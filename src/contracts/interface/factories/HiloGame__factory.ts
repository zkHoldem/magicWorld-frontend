/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HiloGame, HiloGameInterface } from "../HiloGame";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IShuffleStateManager",
        name: "_shuffle",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "hiloId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shuffleId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "CreateGame",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "hiloId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "playerIdx",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    name: "EndGame",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "hiloId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "playerIdx",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Selection",
        name: "selection",
        type: "uint8",
      },
    ],
    name: "Guess",
    type: "event",
  },
  {
    inputs: [],
    name: "INVALID_INDEX",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cardConfig",
    outputs: [
      {
        internalType: "enum DeckConfig",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "createGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hiloId",
        type: "uint256",
      },
    ],
    name: "dealCard0ToPlayer0",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hiloId",
        type: "uint256",
      },
    ],
    name: "dealCard1ToPlayer1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hiloId",
        type: "uint256",
      },
    ],
    name: "endGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hiloId",
        type: "uint256",
      },
      {
        internalType: "enum Selection",
        name: "selection",
        type: "uint8",
      },
    ],
    name: "guess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hiloId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "playerIdx",
        type: "uint256",
      },
    ],
    name: "isGuessRight",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hiloId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "playerIdx",
        type: "uint256",
      },
    ],
    name: "isPlayerGuessed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "largestHiloId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hiloId",
        type: "uint256",
      },
    ],
    name: "moveToShuffleStage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hiloId",
        type: "uint256",
      },
    ],
    name: "openCard0",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hiloId",
        type: "uint256",
      },
    ],
    name: "openCard1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shuffle",
    outputs: [
      {
        internalType: "contract IShuffleStateManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161112238038061112283398101604081905261002f91610059565b600080546001600160a01b0319166001600160a01b03929092169190911790556064600155610087565b60006020828403121561006a578081fd5b81516001600160a01b0381168114610080578182fd5b9392505050565b61108c806100966000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638e831bb41161008c578063d0399bb811610066578063d0399bb8146101cd578063e9ab1dff146101e0578063fb533c7e146101f3578063fc7d66671461020a57600080fd5b80638e831bb41461019457806397a304da146101a7578063b9963477146101ba57600080fd5b80634d116d6f116100c85780634d116d6f146101435780636deb81fc146101565780637255d72914610169578063851ca4e41461017157600080fd5b80632520bf04146100ef57806337cf53311461011f578063454203341461012e575b600080fd5b600054610102906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b60026040516101169190610efd565b61014161013c366004610e2f565b610214565b005b610141610151366004610e2f565b610309565b610141610164366004610e2f565b6103e2565b61014161048b565b61018461017f366004610e91565b610613565b6040519015158152602001610116565b6101846101a2366004610e91565b6108d1565b6101416101b5366004610e5f565b61098a565b6101416101c8366004610e2f565b610c35565b6101416101db366004610e2f565b610cde565b6101416101ee366004610e2f565b610d7a565b6101fc60015481565b604051908152602001610116565b6101fc620f423f81565b6000546001600160a01b031633146102475760405162461bcd60e51b815260040161023e90610f10565b60405180910390fd5b6040805160208082018352600180835283516024808201879052855180830390910181526044909101855280830180516001600160e01b031663e9ab1dff60e01b1790526000805487825260029094528581209092015494516318e82a2b60e11b8152939490936001600160a01b03909316926331d05456926102d292918791908790600401610fc7565b600060405180830381600087803b1580156102ec57600080fd5b505af1158015610300573d6000803e3d6000fd5b50505050505050565b6000546001600160a01b031633146103335760405162461bcd60e51b815260040161023e90610f10565b6040805160248082018490528251808303909101815260449091018252602080820180516001600160e01b031663115080cd60e21b17905260008054858252600290925283902060010154925163f3c7e26d60e01b815291926001600160a01b039091169163f3c7e26d916103ac918590600401610f74565b600060405180830381600087803b1580156103c657600080fd5b505af11580156103da573d6000803e3d6000fd5b505050505050565b6000546001600160a01b0316331461040c5760405162461bcd60e51b815260040161023e90610f10565b6040805160248082018490528251808303909101815260449091018252602080820180516001600160e01b0316631a07337760e31b1790526000805485825260029092528390206001908101549351635b040a8f60e11b815292936001600160a01b039092169263b608151e926103ac92909181908790600401610f95565b60016000815461049a90611004565b9091555060008054604051635a3b27ab60e11b8152600260048201526001600160a01b039091169063b4764f5690602401602060405180830381600087803b1580156104e557600080fd5b505af11580156104f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051d9190610e47565b60018054600090815260026020908152604080832084018590559254835160248082019290925284518082039092018252604401845290810180516001600160e01b0316634d116d6f60e01b1790529054915163765718d760e01b8152929350916001600160a01b039091169063765718d7906105a09085908590600401610f74565b600060405180830381600087803b1580156105ba57600080fd5b505af11580156105ce573d6000803e3d6000fd5b5050600154604080518681523360208201529193507f16dca524ff25a377d2e6cecca0f661869e5237f50a4de1699a507346bc5184ea92500160405180910390a25050565b60008115806106225750816001145b61065f5760405162461bcd60e51b815260206004820152600e60248201526d34b73b30b634b210383630bcb2b960911b604482015260640161023e565b600080548482526002602052604080832060010154905163130ff26560e11b81526001600160a01b039092169163261fe4ca916106a9918790600401918252602082015260400190565b60206040518083038186803b1580156106c157600080fd5b505afa1580156106d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f99190610e47565b6000805486825260026020526040822060019081015493945091926001600160a01b039091169163261fe4ca9190610732908890610fed565b6040516001600160e01b031960e085901b1681526004810192909252602482015260440160206040518083038186803b15801561076e57600080fd5b505afa158015610782573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a69190610e47565b90506001600086815260026020819052604090912090869081106107da57634e487b7160e01b600052603260045260246000fd5b602081049091015460ff601f9092166101000a900416600281111561080f57634e487b7160e01b600052602160045260246000fd5b141561081d571090506108cb565b60008581526002602081905260409091208582811061084c57634e487b7160e01b600052603260045260246000fd5b602081049091015460ff601f9092166101000a900416600281111561088157634e487b7160e01b600052602160045260246000fd5b141561088f571190506108cb565b60405162461bcd60e51b815260206004820152601160248201527034b73b30b634b21039b2b632b1ba34b7b760791b604482015260640161023e565b92915050565b60008115806108e05750816001145b61091d5760405162461bcd60e51b815260206004820152600e60248201526d34b73b30b634b210383630bcb2b960911b604482015260640161023e565b60008381526002602081905260408220908490811061094c57634e487b7160e01b600052603260045260246000fd5b602081049091015460ff601f9092166101000a900416600281111561098157634e487b7160e01b600052602160045260246000fd5b14159392505050565b600080548382526002602052604080832060010154905163ba284c2160e01b815260048101919091523360248201526001600160a01b039091169063ba284c219060440160206040518083038186803b1580156109e657600080fd5b505afa1580156109fa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1e9190610e47565b905060008054906101000a90046001600160a01b03166001600160a01b031663fc7d66676040518163ffffffff1660e01b815260040160206040518083038186803b158015610a6c57600080fd5b505afa158015610a80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa49190610e47565b811415610ab057600080fd5b6000826002811115610ad257634e487b7160e01b600052602160045260246000fd5b1415610add57600080fd5b600083815260026020819052604082209083908110610b0c57634e487b7160e01b600052603260045260246000fd5b602081049091015460ff601f9092166101000a9004166002811115610b4157634e487b7160e01b600052602160045260246000fd5b14610b875760405162461bcd60e51b81526020600482015260166024820152751c1b185e595c88185b1c9958591e4819dd595cdcd95960521b604482015260640161023e565b6000838152600260208190526040909120839183908110610bb857634e487b7160e01b600052603260045260246000fd5b602091828204019190066101000a81548160ff02191690836002811115610bef57634e487b7160e01b600052602160045260246000fd5b0217905550827f8744f6fa77f7b9fbb3c3af314ce5f495030892d04a1c5c54944b1b6cd26312d3823385604051610c2893929190610f47565b60405180910390a2505050565b6000546001600160a01b03163314610c5f5760405162461bcd60e51b815260040161023e90610f10565b6040805160248082018490528251808303909101815260449091018252602080820180516001600160e01b0316631b7ae07f60e21b1790526000805485825260029092528381206001908101549451635b040a8f60e11b815293946001600160a01b039093169363b608151e936103ac93909290918790600401610f95565b6000546001600160a01b03163314610d085760405162461bcd60e51b815260040161023e90610f10565b600080548282526002602052604091829020600101549151631a07337760e31b815260048101929092526001600160a01b03169063d0399bb890602401600060405180830381600087803b158015610d5f57600080fd5b505af1158015610d73573d6000803e3d6000fd5b5050505050565b6000546001600160a01b03163314610da45760405162461bcd60e51b815260040161023e90610f10565b6040805160208082018352600280835283516024808201879052855180830390910181526044909101855280830180516001600160e01b031663b996347760e01b17905260008054878252929093529184902060019081015494516318e82a2b60e11b8152939492936001600160a01b03909216926331d05456926102d29287918790600401610fc7565b600060208284031215610e40578081fd5b5035919050565b600060208284031215610e58578081fd5b5051919050565b60008060408385031215610e71578081fd5b82359150602083013560038110610e86578182fd5b809150509250929050565b60008060408385031215610ea3578182fd5b50508035926020909101359150565b60008151808452815b81811015610ed757602081850181015186830182015201610ebb565b81811115610ee85782602083870101525b50601f01601f19169290920160200192915050565b60208101610f0a83611035565b91905290565b6020808252601e908201527f43616c6c6572206973206e6f742073687566666c65206d616e616765722e0000604082015260600190565b8381526001600160a01b038316602082015260608101610f6683611035565b826040830152949350505050565b828152604060208201526000610f8d6040830184610eb2565b949350505050565b84815283602082015260ff83166040820152608060608201526000610fbd6080830184610eb2565b9695505050505050565b84815283516020820152826040820152608060608201526000610fbd6080830184610eb2565b600082821015610fff57610fff61101f565b500390565b60006000198214156110185761101861101f565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6003811061105357634e487b7160e01b600052602160045260246000fd5b5056fea26469706673582212202d1eeac3e2641dae55094def4ddcb580e62e1f18bc4fcfa7565177e96eef15f564736f6c63430008040033";

type HiloGameConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HiloGameConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HiloGame__factory extends ContractFactory {
  constructor(...args: HiloGameConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _shuffle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HiloGame> {
    return super.deploy(_shuffle, overrides || {}) as Promise<HiloGame>;
  }
  override getDeployTransaction(
    _shuffle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_shuffle, overrides || {});
  }
  override attach(address: string): HiloGame {
    return super.attach(address) as HiloGame;
  }
  override connect(signer: Signer): HiloGame__factory {
    return super.connect(signer) as HiloGame__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HiloGameInterface {
    return new utils.Interface(_abi) as HiloGameInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HiloGame {
    return new Contract(address, _abi, signerOrProvider) as HiloGame;
  }
}