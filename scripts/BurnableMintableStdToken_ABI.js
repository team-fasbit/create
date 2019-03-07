var web3 = window.web3 || {};

// StdToken_abi of BurnableMintableStandardToken.sol.sol
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
                "name": "account",
                "type": "address"
            },
            {
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
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



// StdToken_bytecode of BurnableMintableStandardToken.sol
var bytecode = '60606040526040805190810160405280600581526020017f4552433230000000000000000000000000000000000000000000000000000000815250600290805190602001906200005192919062000179565b5034156200005e57600080fd5b604051620026673803806200266783398101604052808051906020019091908051820191906020018051906020019091908051820191905050836000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550836006819055508260039080519060200190620000f992919062000179565b5080600490805190602001906200011292919062000179565b5081600560006101000a81548160ff021916908360ff16021790555033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505062000228565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001bc57805160ff1916838001178555620001ed565b82800160010185558215620001ed579182015b82811115620001ec578251825591602001919060010190620001cf565b5b509050620001fc919062000200565b5090565b6200022591905b808211156200022157600081600090555060010162000207565b5090565b90565b61242f80620002386000396000f300606060405260043610610107576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063035f057d1461010c57806306fdde03146101be578063095ea7b31461024c57806318160ddd146102a657806323b872dd146102cf578063313ce5671461034857806340c10f191461037757806350e8587e146103b95780635a3b7e421461046b57806366188463146104f957806370a082311461055357806372a7b8ba146105a05780638da5cb5b1461065257806395d89b41146106a75780639dc29fac14610735578063a9059cbb14610777578063cae9ca51146107d1578063d73dd6231461086e578063dd62ed3e146108c8575b600080fd5b341561011757600080fd5b6101a460048080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091905050610934565b604051808215151515815260200191505060405180910390f35b34156101c957600080fd5b6101d1610bd1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102115780820151818401526020810190506101f6565b50505050905090810190601f16801561023e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561025757600080fd5b61028c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610c6f565b604051808215151515815260200191505060405180910390f35b34156102b157600080fd5b6102b9610d61565b6040518082815260200191505060405180910390f35b34156102da57600080fd5b61032e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610d67565b604051808215151515815260200191505060405180910390f35b341561035357600080fd5b61035b611121565b604051808260ff1660ff16815260200191505060405180910390f35b341561038257600080fd5b6103b7600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611134565b005b34156103c457600080fd5b610451600480803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919050506112e4565b604051808215151515815260200191505060405180910390f35b341561047657600080fd5b61047e611460565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104be5780820151818401526020810190506104a3565b50505050905090810190601f1680156104eb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561050457600080fd5b610539600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506114fe565b604051808215151515815260200191505060405180910390f35b341561055e57600080fd5b61058a600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061178f565b6040518082815260200191505060405180910390f35b34156105ab57600080fd5b610638600480803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919050506117d7565b604051808215151515815260200191505060405180910390f35b341561065d57600080fd5b610665611b38565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156106b257600080fd5b6106ba611b5e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106fa5780820151818401526020810190506106df565b50505050905090810190601f1680156107275780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561074057600080fd5b610775600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611bfc565b005b341561078257600080fd5b6107b7600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611dac565b604051808215151515815260200191505060405180910390f35b34156107dc57600080fd5b610854600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611fcb565b604051808215151515815260200191505060405180910390f35b341561087957600080fd5b6108ae600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050612149565b604051808215151515815260200191505060405180910390f35b34156108d357600080fd5b61091e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612345565b6040518082815260200191505060405180910390f35b6000808251845114151561094757600080fd5b600090505b835181111515610bc657610a13838281518110151561096757fe5b90602001906020020151600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600087858151811015156109c057fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546123cc90919063ffffffff16565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008684815181101515610a6257fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508381815181101515610ab857fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008886815181101515610b5f57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3808060010191505061094c565b600191505092915050565b60038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c675780601f10610c3c57610100808354040283529160200191610c67565b820191906000526020600020905b815481529060010190602001808311610c4a57829003601f168201915b505050505081565b600081600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60065481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610da457600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610df157600080fd5b600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610e7c57600080fd5b610ecd826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546123ea90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f60826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546123cc90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061103182600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546123ea90919063ffffffff16565b600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600560009054906101000a900460ff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561119057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156111cc57600080fd5b6111e1816006546123cc90919063ffffffff16565b600681905550611238816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546123cc90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600080825184511415156112f757600080fd5b600090505b83518111151561145557828181518110151561131457fe5b90602001906020020151600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868481518110151561136d57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555083818151811015156113c357fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925858481518110151561142957fe5b906020019060200201516040518082815260200191505060405180910390a380806001019150506112fc565b600191505092915050565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114f65780601f106114cb576101008083540402835291602001916114f6565b820191906000526020600020905b8154815290600101906020018083116114d957829003601f168201915b505050505081565b600080600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083111561160f576000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506116a3565b61162283826123ea90919063ffffffff16565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000806000835185511415156117ec57600080fd5b600091505b845182111515611b2c57600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868481518110151561184a57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508084838151811015156118a057fe5b90602001906020020151111561194e576000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878581518110151561190157fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611a10565b611978848381518110151561195f57fe5b90602001906020020151826123ea90919063ffffffff16565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600087858151811015156119c757fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8482815181101515611a1e57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008987815181101515611ac557fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a381806001019250506117f1565b60019250505092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611bf45780601f10611bc957610100808354040283529160200191611bf4565b820191906000526020600020905b815481529060010190602001808311611bd757829003601f168201915b505050505081565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611c5857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611c9457600080fd5b611ca9816006546123ea90919063ffffffff16565b600681905550611d00816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546123ea90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515611de957600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515611e3657600080fd5b611e87826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546123ea90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611f1a826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546123cc90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080849050611fdb8585610c6f565b15612140578073ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338630876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156120d55780820151818401526020810190506120ba565b50505050905090810190601f1680156121025780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b151561212357600080fd5b6102c65a03f1151561213457600080fd5b50505060019150612141565b5b509392505050565b60006121da82600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546123cc90919063ffffffff16565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008082840190508381101515156123e057fe5b8091505092915050565b60008282111515156123f857fe5b8183039050929150505600a165627a7a72305820228436c3f1d42448f24a92908d71b395ca09e114471e61162a288f349bfcb8d00029';

export default new web3.eth.Contract(abi, bytecode)