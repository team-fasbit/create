var web3 = window.web3 || {};

// StdToken_abi of BurnableStandardToken.sol
var abi =[
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address[]"
            },
            {
                "name": "_addedValue",
                "type": "uint256[]"
            }
        ],
        "name": "multiIncreaseApproval",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address[]"
            },
            {
                "name": "_value",
                "type": "uint256[]"
            }
        ],
        "name": "multiApprove",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "standard",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseApproval",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address[]"
            },
            {
                "name": "_subtractedValue",
                "type": "uint256[]"
            }
        ],
        "name": "multiDecreaseApproval",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "account",
                "type": "address"
            },
            {
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_extraData",
                "type": "bytes"
            }
        ],
        "name": "approveAndCall",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseApproval",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "initialSupply",
                "type": "uint256"
            },
            {
                "name": "tokenName",
                "type": "string"
            },
            {
                "name": "decimalUnits",
                "type": "uint8"
            },
            {
                "name": "tokenSymbol",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
];




// StdToken_bytecode of BurnableStandardToken.sol
var bytecode = '60606040526040805190810160405280600581526020017f4552433230000000000000000000000000000000000000000000000000000000815250600290805190602001906200005192919062000179565b5034156200005e57600080fd5b6040516200246a3803806200246a83398101604052808051906020019091908051820191906020018051906020019091908051820191905050836000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550836006819055508260039080519060200190620000f992919062000179565b5080600490805190602001906200011292919062000179565b5081600560006101000a81548160ff021916908360ff16021790555033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505062000228565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001bc57805160ff1916838001178555620001ed565b82800160010185558215620001ed579182015b82811115620001ec578251825591602001919060010190620001cf565b5b509050620001fc919062000200565b5090565b6200022591905b808211156200022157600081600090555060010162000207565b5090565b90565b61223280620002386000396000f3006060604052600436106100fc576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063035f057d1461010157806306fdde03146101b3578063095ea7b31461024157806318160ddd1461029b57806323b872dd146102c4578063313ce5671461033d57806350e8587e1461036c5780635a3b7e421461041e57806366188463146104ac57806370a082311461050657806372a7b8ba146105535780638da5cb5b1461060557806395d89b411461065a5780639dc29fac146106e8578063a9059cbb1461072a578063cae9ca5114610784578063d73dd62314610821578063dd62ed3e1461087b575b600080fd5b341561010c57600080fd5b610199600480803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919050506108e7565b604051808215151515815260200191505060405180910390f35b34156101be57600080fd5b6101c6610b84565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102065780820151818401526020810190506101eb565b50505050905090810190601f1680156102335780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561024c57600080fd5b610281600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610c22565b604051808215151515815260200191505060405180910390f35b34156102a657600080fd5b6102ae610d14565b6040518082815260200191505060405180910390f35b34156102cf57600080fd5b610323600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610d1a565b604051808215151515815260200191505060405180910390f35b341561034857600080fd5b6103506110d4565b604051808260ff1660ff16815260200191505060405180910390f35b341561037757600080fd5b610404600480803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919050506110e7565b604051808215151515815260200191505060405180910390f35b341561042957600080fd5b610431611263565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610471578082015181840152602081019050610456565b50505050905090810190601f16801561049e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104b757600080fd5b6104ec600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611301565b604051808215151515815260200191505060405180910390f35b341561051157600080fd5b61053d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611592565b6040518082815260200191505060405180910390f35b341561055e57600080fd5b6105eb600480803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919050506115da565b604051808215151515815260200191505060405180910390f35b341561061057600080fd5b61061861193b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561066557600080fd5b61066d611961565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106ad578082015181840152602081019050610692565b50505050905090810190601f1680156106da5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156106f357600080fd5b610728600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506119ff565b005b341561073557600080fd5b61076a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611baf565b604051808215151515815260200191505060405180910390f35b341561078f57600080fd5b610807600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611dce565b604051808215151515815260200191505060405180910390f35b341561082c57600080fd5b610861600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611f4c565b604051808215151515815260200191505060405180910390f35b341561088657600080fd5b6108d1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612148565b6040518082815260200191505060405180910390f35b600080825184511415156108fa57600080fd5b600090505b835181111515610b79576109c6838281518110151561091a57fe5b90602001906020020151600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878581518110151561097357fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121cf90919063ffffffff16565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008684815181101515610a1557fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508381815181101515610a6b57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008886815181101515610b1257fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a380806001019150506108ff565b600191505092915050565b60038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c1a5780601f10610bef57610100808354040283529160200191610c1a565b820191906000526020600020905b815481529060010190602001808311610bfd57829003601f168201915b505050505081565b600081600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60065481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610d5757600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610da457600080fd5b600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610e2f57600080fd5b610e80826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121ed90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f13826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121cf90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610fe482600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121ed90919063ffffffff16565b600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600560009054906101000a900460ff1681565b600080825184511415156110fa57600080fd5b600090505b83518111151561125857828181518110151561111757fe5b90602001906020020151600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868481518110151561117057fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555083818151811015156111c657fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925858481518110151561122c57fe5b906020019060200201516040518082815260200191505060405180910390a380806001019150506110ff565b600191505092915050565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112f95780601f106112ce576101008083540402835291602001916112f9565b820191906000526020600020905b8154815290600101906020018083116112dc57829003601f168201915b505050505081565b600080600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115611412576000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506114a6565b61142583826121ed90919063ffffffff16565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000806000835185511415156115ef57600080fd5b600091505b84518211151561192f57600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868481518110151561164d57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508084838151811015156116a357fe5b906020019060200201511115611751576000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878581518110151561170457fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611813565b61177b848381518110151561176257fe5b90602001906020020151826121ed90919063ffffffff16565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600087858151811015156117ca57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b848281518110151561182157fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600089878151811015156118c857fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a381806001019250506115f4565b60019250505092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119f75780601f106119cc576101008083540402835291602001916119f7565b820191906000526020600020905b8154815290600101906020018083116119da57829003601f168201915b505050505081565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a5b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611a9757600080fd5b611aac816006546121ed90919063ffffffff16565b600681905550611b03816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121ed90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515611bec57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515611c3957600080fd5b611c8a826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121ed90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611d1d826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121cf90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080849050611dde8585610c22565b15611f43578073ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338630876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611ed8578082015181840152602081019050611ebd565b50505050905090810190601f168015611f055780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1515611f2657600080fd5b6102c65a03f11515611f3757600080fd5b50505060019150611f44565b5b509392505050565b6000611fdd82600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121cf90919063ffffffff16565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008082840190508381101515156121e357fe5b8091505092915050565b60008282111515156121fb57fe5b8183039050929150505600a165627a7a72305820bc11987d33abf856ba83359d54af2d4733d733626f425f71f557dcc0912b26530029';

export default new web3.eth.Contract(abi, bytecode)