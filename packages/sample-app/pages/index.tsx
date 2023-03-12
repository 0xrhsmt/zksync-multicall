import dynamic from 'next/dynamic';
import React, { FC, useEffect, useState, useCallback, useMemo } from 'react';
import { ethers } from 'ethers';
import { IEthereumProvider } from '@argent/login-react';
import * as zksync from 'zksync-web3';
import classNames from 'classnames';

const IERC20 = new ethers.utils.Interface(
  require('../libs/abi/IERC20.json').abi
);

const Tokens = [
  {
    name: 'DAI',
    symbol: 'DAI',
    address: '0x3e7676937A7E96CFB7616f255b9AD9FF47363D4b',
  },
  {
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0x0faF6df7054946141266420b43783387A78d82A9',
  },
];

// NOTE: this is a workaround to make sure the ArgentLoginButton is not rendered on the server side.
const ArgentLoginButton = dynamic(
  () => import('@argent/login-react').then((mod) => mod.ArgentLoginButton),
  { ssr: false }
);

export const App: FC = () => {
  const [provider, setProvider] = useState<zksync.Web3Provider>();
  const [signerAddress, setSignerAddress] = useState<string>('');
  const [spenderAddress, setSpenderAddress] = useState<string>('');
  const [results, setResults] = useState<zksync.types.MulticallResult[]>([]);
  const [tokenAllowances, setTokenAllowances] = useState<{
    [address: string]: string;
  }>({});
  const [submitting, setSubmitting] = useState<boolean>(false);

  const isSubmitEnabled = useMemo(
    () =>
      provider &&
      !submitting &&
      ethers.utils.isAddress(signerAddress) &&
      ethers.utils.isAddress(spenderAddress),
    [provider, submitting, signerAddress, spenderAddress]
  );

  const handleConnect = useCallback(
    async (ethereumProvider: IEthereumProvider) => {
      const provider = new zksync.Web3Provider(ethereumProvider);
      setProvider(provider);
    },
    []
  );

  const handleMetamaskConnect = useCallback(async () => {
    const ethereum = (window as any).ethereum;
    if (ethereum) {
      const result = await ethereum.request({ method: 'eth_requestAccounts' });
      const hexChainId = await ethereum.request({ method: 'eth_chainId' });
      if (hexChainId !== '0x118') {
        alert('Please connect to zkSync Era testnet');
        return;
      }

      const provider = new zksync.Web3Provider(ethereum);
      setProvider(provider);

      console.log(result, hexChainId);
    } else {
      alert('hge');
    }
  }, []);

  const handleDisconnect = useCallback(async () => {
    localStorage.removeItem('walletconnect'); // to make sure WC is disconnected
    setProvider(undefined);
  }, []);

  const handleApprove = useCallback(async () => {
    if (!provider) return;
    if (!isSubmitEnabled) return;

    setSubmitting(true);

    const signer = provider.getSigner();
    const calls = Tokens.map((token) => {
      return {
        to: token.address,
        data: IERC20.encodeFunctionData('approve', [
          spenderAddress,
          ethers.constants.MaxUint256,
        ]),
      };
    });

    const result = await signer.multicall(calls);
    setResults((prev) => [...prev, result]);

    setSubmitting(false);
  }, [isSubmitEnabled, provider, spenderAddress]);

  const handleRevoke = useCallback(async () => {
    if (!provider) return;
    if (!isSubmitEnabled) return;

    setSubmitting(true);

    const signer = provider.getSigner();
    const calls = Tokens.map((token) => {
      return {
        to: token.address,
        data: IERC20.encodeFunctionData('approve', [
          spenderAddress,
          ethers.constants.Zero,
        ]),
      };
    });

    const result = await signer.multicall(calls);
    setResults((prev) => [...prev, result]);

    setSubmitting(false);
  }, [isSubmitEnabled, provider, spenderAddress]);

  const refreshTokenAllowances = useCallback(async () => {
    if (!provider) return;
    if (
      !ethers.utils.isAddress(signerAddress) ||
      !ethers.utils.isAddress(spenderAddress)
    )
      return;

    const signer = provider.getSigner();

    const allowances: { [address: string]: string } = {};
    for await (const token of Tokens) {
      const _allowance = await signer.call({
        to: token.address,
        data: IERC20.encodeFunctionData('allowance', [
          signerAddress,
          spenderAddress,
        ]),
      });

      const allowance =
        _allowance !== '0x'
          ? ethers.BigNumber.from(_allowance)
          : ethers.constants.Zero;
      allowances[token.address] = allowance.eq(ethers.constants.MaxUint256)
        ? '∞（Unlimited）'
        : allowance.toString();
    }
    setTokenAllowances(allowances);
  }, [provider, signerAddress, spenderAddress]);

  useEffect(() => {
    if (!provider) return;

    provider
      .getSigner()
      .getAddress()
      .then((_address) => {
        setSignerAddress(_address);
      });
  }, [provider]);

  useEffect(() => {
    refreshTokenAllowances();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results?.length ?? 0, signerAddress, spenderAddress]);

  return (
    <div>
      {!provider ? (
        <div className="flex space-x-8 justify-center items-center h-screen w-full">
          <ArgentLoginButton
            options={{
              chainId: 280,
              rpcUrl: 'https://zksync2-testnet.zksync.dev',
            }}
            onConnect={handleConnect}
            onError={console.error}
          />
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleMetamaskConnect}
          >
            🦊 Log in with Metamask
          </button>
        </div>
      ) : (
        <>
          <div className="bg-white px-8 pt-6 pb-8 mb-4">
            <div className="mb-12">
              <h2>Account</h2>
              <p>Address: {signerAddress}</p>
              <p>
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleDisconnect}
                >
                  Disconnect
                </button>
              </p>
            </div>

            <div className="mb-12">
              <h2>Approve Tokens</h2>

              <div className="mb-4">
                <h3>Authorized Spender Address</h3>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  onChange={(e) => {
                    setSpenderAddress(e.target.value ?? '');
                  }}
                  value={spenderAddress}
                  placeholder="0x1234..."
                />
              </div>

              <div className="mb-4">
                <h3>Token List</h3>
                {Tokens.map((token, index) => {
                  return (
                    <div key={index} className="mb-4">
                      <h4>{token.name}</h4>
                      <h4>Symbol: {token.symbol}</h4>
                      <p>Address: {token.address}</p>
                      <p>Allowance: {tokenAllowances[token.address] ?? '--'}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex space-x-2">
                <button
                  className={classNames(
                    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
                    {
                      'opacity-50': !isSubmitEnabled,
                    }
                  )}
                  onClick={handleApprove}
                  disabled={!isSubmitEnabled}
                >
                  Approve all tokens
                </button>
                <button
                  className={classNames(
                    'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
                    {
                      'opacity-50': !isSubmitEnabled,
                    }
                  )}
                  onClick={handleRevoke}
                  disabled={!isSubmitEnabled}
                >
                  Revoke all tokens
                </button>
              </div>
            </div>

            <div className="mb-12">
              <h2>Multicall Result</h2>

              <div>
                {results.map((result, index) => {
                  return (
                    <div key={index} className="mb-4">
                      <h3>Result: {index + 1}</h3>
                      <div>
                        <p>Success: {result.ok ? 'true' : 'false'}</p>
                        <div>
                          <>
                            Details:
                            {result.ok ? (
                              <div>
                                {result.value.map((tx) => {
                                  const url = `https://goerli.explorer.zksync.io/tx/${tx.hash}`;
                                  return (
                                    <>
                                      <a
                                        key={tx.hash}
                                        href={url}
                                        className="text-blue-500 underline"
                                        target="_blank"
                                      >
                                        {url}
                                      </a>
                                      <br />
                                    </>
                                  );
                                })}
                              </div>
                            ) : (
                              JSON.stringify(result.error)
                            )}
                          </>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
