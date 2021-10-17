export interface Multicall {
	address: string;
	// The block at which the contract was deployed
	block: number;
}

export function getMulticall(chainId: number): Multicall {
	const addressMap: Record<number, Multicall> = {
		1: {
			address: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
			block: 7929876,
		},
		3: {
			address: '0x53c43764255c17bd724f74c4ef150724ac50a3ed',
			block: 7980811,
		},
		4: {
			address: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
			block: 4534725,
		},
		5: {
			address: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
			block: 743550,
		},
		10: {
			address: '0xe295ad71242373c37c5fda7b57f26f9ea1088afe',
			block: 0,
		},
		42: {
			address: '0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a',
			block: 11482433,
		},
		56: {
			address: '0xe21a5b299756ee452a6a871ff29852862fc99be9',
			block: 0,
		},
		100: {
			address: '0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a',
			block: 0,
		},
		108: {
			address: '0xfce4609743e17d349b7e5f478a7a9a6cfa3c808c',
			block: 0,
		},
		128: {
			address: '0x56171094a15b8cac4314c0f8930100b939503bd9',
			block: 0,
		},
		137: {
			address: '0x35e4aa226ce52e1e59e5e5ec24766007bcbe2e7d',
			block: 0,
		},
		250: {
			address: '0xc04d660976c923ddba750341fe5923e47900cf24',
			block: 0,
		},
		321: {
			address: '0x543528e13eac69206e87334cca971503a552438b',
			block: 0,
		},
		820: {
			address: '0x8ba3d23241c7044be703afaf2a728fdbc16f5f6f',
			block: 0,
		},
		1337: {
			address: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
			block: 0,
		},
		4689: {
			address: '0x0e14ded9e7965c6446df2e5c528dd1b4e3b4640f',
			block: 0,
		},
		42161: {
			address: '0x10126ceb60954bc35049f24e819a380c505f8a0f',
			block: 0,
		},
		43114: {
			address: '0xE8eeDd99baC03871CF123E76cE90bA179Df94351',
			block: 0,
		},
		80001: {
			address: '0x08411add0b5aa8ee47563b146743c13b3556c9cc',
			block: 0,
		},
		1313161554: {
			address: '0xa48c67d1c60b8187ecb7c549e8a670419d356994',
			block: 0,
		},
		1666600000: {
			address: '0xfe4980f62d708c2a84d3929859ea226340759320',
			block: 0,
		},
	};
	return addressMap[chainId];
}

export function getMulticall2(chainId: number): Multicall {
	const addressMap: Record<number, Multicall> = {
		1: {
			address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
			block: 12336033,
		},
		4: {
			address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
			block: 8283206,
		},
		5: {
			address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
			block: 4489716,
		},
		42: {
			address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
			block: 24025820,
		},
		56: {
			address: '0x4c6bb7c24b6f3dfdfb548e54b7c5ea4cb52a0069',
			block: 0,
		},
		100: {
			address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
			block: 0,
		},
		137: {
			address: '0xf43a7be1b284aa908cdfed8b3e286961956b4d2c',
			block: 0,
		},
		250: {
			address: '0x470ADB45f5a9ac3550bcFFaD9D990Bf7e2e941c9',
			block: 0,
		},
		1337: {
			address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
			block: 0,
		},
	};
	return addressMap[chainId];
}

export const deploylessMulticallBytecode =
	'0x608060405234801561001057600080fd5b5060405161075138038061075183398181016040528101906100329190610466565b60004390506000825167ffffffffffffffff811115610054576100536106d6565b5b60405190808252806020026020018201604052801561008757816020015b60608152602001906001900390816100725790505b50905060005b83518110156102715760008073bd770416a3345f91e4b34576cb804a576fa48eb173ffffffffffffffffffffffffffffffffffffffff168684815181106100d7576100d66106a7565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff16146101a757858381518110610111576101106106a7565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff16868481518110610146576101456106a7565b5b60200260200101516020015160405161015f91906104e0565b6000604051808303816000865af19150503d806000811461019c576040519150601f19603f3d011682016040523d82523d6000602084013e6101a1565b606091505b5061022f565b600073ffffffffffffffffffffffffffffffffffffffff168684815181106101d2576101d16106a7565b5b6020026020010151602001516040516101eb91906104e0565b6000604051808303816000865af19150503d8060008114610228576040519150601f19603f3d011682016040523d82523d6000602084013e61022d565b606091505b505b915091508161023d57600080fd5b80848481518110610251576102506106a7565b5b6020026020010181905250505080806102699061062f565b91505061008d565b508160408203526040602082035260208101602082015b602060018451010283018110156102aa57818151038152602081019050610288565b50604082604051030160408303f35b60006102cc6102c78461051c565b6104f7565b905080838252602082019050828560208602820111156102ef576102ee610714565b5b60005b8581101561033d57815167ffffffffffffffff81111561031557610314610705565b5b80860161032289826103fa565b855260208501945060208401935050506001810190506102f2565b5050509392505050565b600061035a61035584610548565b6104f7565b90508281526020810184848401111561037657610375610719565b5b6103818482856105cb565b509392505050565b60008151905061039881610739565b92915050565b600082601f8301126103b3576103b2610705565b5b81516103c38482602086016102b9565b91505092915050565b600082601f8301126103e1576103e0610705565b5b81516103f1848260208601610347565b91505092915050565b6000604082840312156104105761040f61070a565b5b61041a60406104f7565b9050600061042a84828501610389565b600083015250602082015167ffffffffffffffff81111561044e5761044d61070f565b5b61045a848285016103cc565b60208301525092915050565b60006020828403121561047c5761047b610723565b5b600082015167ffffffffffffffff81111561049a5761049961071e565b5b6104a68482850161039e565b91505092915050565b60006104ba82610579565b6104c48185610584565b93506104d48185602086016105cb565b80840191505092915050565b60006104ec82846104af565b915081905092915050565b6000610501610512565b905061050d82826105fe565b919050565b6000604051905090565b600067ffffffffffffffff821115610537576105366106d6565b5b602082029050602081019050919050565b600067ffffffffffffffff821115610563576105626106d6565b5b61056c82610728565b9050602081019050919050565b600081519050919050565b600081905092915050565b600061059a826105a1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156105e95780820151818401526020810190506105ce565b838111156105f8576000848401525b50505050565b61060782610728565b810181811067ffffffffffffffff82111715610626576106256106d6565b5b80604052505050565b600061063a826105c1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561066d5761066c610678565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6107428161058f565b811461074d57600080fd5b5056fe';

export const deploylessMulticall2Bytecode =
	'0x608060405234801561001057600080fd5b5060405161084e38038061084e8339818101604052810190610032919061063f565b6000815167ffffffffffffffff81111561004f5761004e610331565b5b60405190808252806020026020018201604052801561008857816020015b6100756102b3565b81526020019060019003908161006d5790505b50905060005b82518110156101d3576000808483815181106100ad576100ac61069b565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff168584815181106100e2576100e161069b565b5b6020026020010151602001516040516100fb9190610711565b6000604051808303816000865af19150503d8060008114610138576040519150601f19603f3d011682016040523d82523d6000602084013e61013d565b606091505b509150915085156101895781610188576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017f906107ab565b60405180910390fd5b5b60405180604001604052808315158152602001828152508484815181106101b3576101b261069b565b5b6020026020010181905250505080806101cb90610804565b91505061008e565b506020815160400282604051030301604081604051030360005b8351811015610247578060200260208501018160200260400183018261021557855160200281525b600083111561023a576020808303510151602083510151038060208303510180835250505b50506001810190506101ed565b5060005b835181101561027657806020026020850101805151604060208351015103525060018101905061024b565b5060005b83518110156102a35780602002602085010160406020808351015103525060018101905061027a565b5060208152825160208201528181f35b6040518060400160405280600015158152602001606081525090565b6000604051905090565b600080fd5b600080fd5b60008115159050919050565b6102f8816102e3565b811461030357600080fd5b50565b600081519050610315816102ef565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61036982610320565b810181811067ffffffffffffffff8211171561038857610387610331565b5b80604052505050565b600061039b6102cf565b90506103a78282610360565b919050565b600067ffffffffffffffff8211156103c7576103c6610331565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610412826103e7565b9050919050565b61042281610407565b811461042d57600080fd5b50565b60008151905061043f81610419565b92915050565b600080fd5b600067ffffffffffffffff82111561046557610464610331565b5b61046e82610320565b9050602081019050919050565b60005b8381101561049957808201518184015260208101905061047e565b838111156104a8576000848401525b50505050565b60006104c16104bc8461044a565b610391565b9050828152602081018484840111156104dd576104dc610445565b5b6104e884828561047b565b509392505050565b600082601f8301126105055761050461031b565b5b81516105158482602086016104ae565b91505092915050565b600060408284031215610534576105336103dd565b5b61053e6040610391565b9050600061054e84828501610430565b600083015250602082015167ffffffffffffffff811115610572576105716103e2565b5b61057e848285016104f0565b60208301525092915050565b600061059d610598846103ac565b610391565b905080838252602082019050602084028301858111156105c0576105bf6103d8565b5b835b8181101561060757805167ffffffffffffffff8111156105e5576105e461031b565b5b8086016105f2898261051e565b855260208501945050506020810190506105c2565b5050509392505050565b600082601f8301126106265761062561031b565b5b815161063684826020860161058a565b91505092915050565b60008060408385031215610656576106556102d9565b5b600061066485828601610306565b925050602083015167ffffffffffffffff811115610685576106846102de565b5b61069185828601610611565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600081905092915050565b60006106eb826106ca565b6106f581856106d5565b935061070581856020860161047b565b80840191505092915050565b600061071d82846106e0565b915081905092915050565b600082825260208201905092915050565b7f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c6560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b6000610795602183610728565b91506107a082610739565b604082019050919050565b600060208201905081810360008301526107c481610788565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b600061080f826107fa565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610842576108416107cb565b5b60018201905091905056fe';
