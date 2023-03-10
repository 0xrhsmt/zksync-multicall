/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IAllowListInterface extends ethers.utils.Interface {
  functions: {
    "acceptOwner()": FunctionFragment;
    "canCall(address,address,bytes4)": FunctionFragment;
    "hasSpecialAccessToCall(address,address,bytes4)": FunctionFragment;
    "isAccessPublic(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "setBatchPermissionToCall(address[],address[],bytes4[],bool[])": FunctionFragment;
    "setBatchPublicAccess(address[],bool[])": FunctionFragment;
    "setPendingOwner(address)": FunctionFragment;
    "setPermissionToCall(address,address,bytes4,bool)": FunctionFragment;
    "setPublicAccess(address,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "canCall",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasSpecialAccessToCall",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isAccessPublic",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBatchPermissionToCall",
    values: [string[], string[], BytesLike[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setBatchPublicAccess",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPermissionToCall",
    values: [string, string, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setPublicAccess",
    values: [string, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "canCall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasSpecialAccessToCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAccessPublic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBatchPermissionToCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBatchPublicAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPermissionToCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPublicAccess",
    data: BytesLike
  ): Result;

  events: {
    "NewOwner(address)": EventFragment;
    "NewPendingOwner(address,address)": EventFragment;
    "UpdateCallPermission(address,address,bytes4,bool)": EventFragment;
    "UpdatePublicAccess(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPendingOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateCallPermission"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatePublicAccess"): EventFragment;
}

export class IAllowList extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IAllowListInterface;

  functions: {
    acceptOwner(overrides?: Overrides): Promise<ContractTransaction>;

    "acceptOwner()"(overrides?: Overrides): Promise<ContractTransaction>;

    canCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "canCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    hasSpecialAccessToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "hasSpecialAccessToCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isAccessPublic(
      _target: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isAccessPublic(address)"(
      _target: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    pendingOwner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    setBatchPermissionToCall(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setBatchPermissionToCall(address[],address[],bytes4[],bool[])"(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setBatchPublicAccess(
      _targets: string[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setBatchPublicAccess(address[],bool[])"(
      _targets: string[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setPendingOwner(
      _newPendingOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPendingOwner(address)"(
      _newPendingOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setPermissionToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPermissionToCall(address,address,bytes4,bool)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setPublicAccess(
      _target: string,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPublicAccess(address,bool)"(
      _target: string,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  acceptOwner(overrides?: Overrides): Promise<ContractTransaction>;

  "acceptOwner()"(overrides?: Overrides): Promise<ContractTransaction>;

  canCall(
    _caller: string,
    _target: string,
    _functionSig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "canCall(address,address,bytes4)"(
    _caller: string,
    _target: string,
    _functionSig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  hasSpecialAccessToCall(
    _caller: string,
    _target: string,
    _functionSig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasSpecialAccessToCall(address,address,bytes4)"(
    _caller: string,
    _target: string,
    _functionSig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isAccessPublic(_target: string, overrides?: CallOverrides): Promise<boolean>;

  "isAccessPublic(address)"(
    _target: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

  setBatchPermissionToCall(
    _callers: string[],
    _targets: string[],
    _functionSigs: BytesLike[],
    _enables: boolean[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setBatchPermissionToCall(address[],address[],bytes4[],bool[])"(
    _callers: string[],
    _targets: string[],
    _functionSigs: BytesLike[],
    _enables: boolean[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setBatchPublicAccess(
    _targets: string[],
    _enables: boolean[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setBatchPublicAccess(address[],bool[])"(
    _targets: string[],
    _enables: boolean[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setPendingOwner(
    _newPendingOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPendingOwner(address)"(
    _newPendingOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setPermissionToCall(
    _caller: string,
    _target: string,
    _functionSig: BytesLike,
    _enable: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPermissionToCall(address,address,bytes4,bool)"(
    _caller: string,
    _target: string,
    _functionSig: BytesLike,
    _enable: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setPublicAccess(
    _target: string,
    _enable: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPublicAccess(address,bool)"(
    _target: string,
    _enable: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwner(overrides?: CallOverrides): Promise<void>;

    "acceptOwner()"(overrides?: CallOverrides): Promise<void>;

    canCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "canCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hasSpecialAccessToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasSpecialAccessToCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isAccessPublic(
      _target: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isAccessPublic(address)"(
      _target: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

    setBatchPermissionToCall(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setBatchPermissionToCall(address[],address[],bytes4[],bool[])"(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setBatchPublicAccess(
      _targets: string[],
      _enables: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setBatchPublicAccess(address[],bool[])"(
      _targets: string[],
      _enables: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setPendingOwner(
      _newPendingOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPendingOwner(address)"(
      _newPendingOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPermissionToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPermissionToCall(address,address,bytes4,bool)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setPublicAccess(
      _target: string,
      _enable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPublicAccess(address,bool)"(
      _target: string,
      _enable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    NewOwner(newOwner: string | null): EventFilter;

    NewPendingOwner(
      oldPendingOwner: string | null,
      newPendingOwner: string | null
    ): EventFilter;

    UpdateCallPermission(
      caller: string | null,
      target: string | null,
      functionSig: BytesLike | null,
      status: null
    ): EventFilter;

    UpdatePublicAccess(target: string | null, newStatus: null): EventFilter;
  };

  estimateGas: {
    acceptOwner(overrides?: Overrides): Promise<BigNumber>;

    "acceptOwner()"(overrides?: Overrides): Promise<BigNumber>;

    canCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasSpecialAccessToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasSpecialAccessToCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAccessPublic(
      _target: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAccessPublic(address)"(
      _target: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    setBatchPermissionToCall(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setBatchPermissionToCall(address[],address[],bytes4[],bool[])"(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    setBatchPublicAccess(
      _targets: string[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setBatchPublicAccess(address[],bool[])"(
      _targets: string[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    setPendingOwner(
      _newPendingOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPendingOwner(address)"(
      _newPendingOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setPermissionToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPermissionToCall(address,address,bytes4,bool)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setPublicAccess(
      _target: string,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPublicAccess(address,bool)"(
      _target: string,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwner(overrides?: Overrides): Promise<PopulatedTransaction>;

    "acceptOwner()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    canCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasSpecialAccessToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasSpecialAccessToCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAccessPublic(
      _target: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAccessPublic(address)"(
      _target: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setBatchPermissionToCall(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setBatchPermissionToCall(address[],address[],bytes4[],bool[])"(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setBatchPublicAccess(
      _targets: string[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setBatchPublicAccess(address[],bool[])"(
      _targets: string[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setPendingOwner(
      _newPendingOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPendingOwner(address)"(
      _newPendingOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setPermissionToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPermissionToCall(address,address,bytes4,bool)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setPublicAccess(
      _target: string,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPublicAccess(address,bool)"(
      _target: string,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
