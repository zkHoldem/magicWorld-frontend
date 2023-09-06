/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  DecryptPairing,
  DecryptPairingInterface,
} from "../../../../../@p0x-labs/poseidon-zk-circuits/contracts/decrypt_verifier.sol/DecryptPairing";

const _abi = [
  {
    inputs: [],
    name: "InvalidProof",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a48f34bac08bb2072acba37e09453ce698c8d0df39ee46842c99071e2fd8944d64736f6c63430008040033";

type DecryptPairingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DecryptPairingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DecryptPairing__factory extends ContractFactory {
  constructor(...args: DecryptPairingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DecryptPairing> {
    return super.deploy(overrides || {}) as Promise<DecryptPairing>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DecryptPairing {
    return super.attach(address) as DecryptPairing;
  }
  override connect(signer: Signer): DecryptPairing__factory {
    return super.connect(signer) as DecryptPairing__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DecryptPairingInterface {
    return new utils.Interface(_abi) as DecryptPairingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DecryptPairing {
    return new Contract(address, _abi, signerOrProvider) as DecryptPairing;
  }
}