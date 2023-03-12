# Argent Multicall

This repository adds multicall functionality to [zksync-web3 library](https://www.npmjs.com/package/zksync-web3).  
I made this to take part in the following zkSync Era∎ Hack0.  
https://app.buidlbox.io/zksync/era-hack-series

## How it works

If the Account Contract supports multicall function（[details](https://docs.argent.xyz/#multicall)）, you can call it in one transaction. 🤗  
If not supported, send individual transactions. 😱　  

**You can call multicall as follows.**
```typescript
const signer = provider.getSigner();
const token = new ethers.Contract(..., ..., signer);
const dex = new ethers.Contract(..., ..., signer);

const calls = [
  {
    to: token.address,
    value: 0,
    data: token.interface.encodeFunctionData('approve', [
      dex.address,
      exactAmount,
    ]),
  },
  {
    to: dex.address,
    value: 0,
    data: dex.interface.encodeFunctionData('swap', [
      token.address,
      otherTokenAddress,
      exactAmount,
    ]),
  },
];

const result = await signer.multicall(calls);

if (result.ok) {
    console.log(`tx id: ${result.value[0].hash}`);
} else {
    console.error(result.error);
}
```

## Demo Video

Approve multiple ERC20 tokens using the the multicall function.  

By Argemt Login that supports Multicall  

https://user-images.githubusercontent.com/54972320/224561366-9c83f3f5-2cb7-4aa3-b1e3-ae7646584caa.mov  

By metamask that does not support Multicall  

https://user-images.githubusercontent.com/54972320/224561621-3f497e5b-a2d6-4c40-b427-2d987b4ef393.mov  

## Live Demo

https://zksync-multicall-sample-app.vercel.app/

## Packages

| Package                                | Description                            |
| -------------------------------------- | -------------------------------------- |
| [`zksync-web3`](/packages/zksync-web3) | zksync-web3 with multicall-features |
| [`sample-app`](/packages/sample-app)   | sample app using zksync-web3           |

## Development

```bash
# git clone
$git clone https://github.com/0xrhsmt/zksync-multicall.git
$cd zksync-multicall/

# install dependencies
$npm install

# build all packages
$npx nx run-many --target=build

# run sample app
$npx nx run sample-app:dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## etc.

[Pull Request #3](https://github.com/0xrhsmt/argent-multicall/pull/3)  
This is a pull request with added multicall functionality. It is easy to see the difference in the code.
