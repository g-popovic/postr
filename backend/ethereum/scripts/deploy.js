const { web3 } = require('../../util/web3.config');
const { getCompiledContractData } = require('./compile');

async function deployContract(contractName, constructorArguments) {
	const { evm, abi } = getCompiledContractData(contractName);

	try {
		const [account] = await web3.eth.getAccounts();

		const result = await new web3.eth.Contract(abi)
			.deploy({ data: evm.bytecode.object, arguments: constructorArguments })
			.send({ from: account });

		console.log(`Contract deployed to ${result.options.address}`);
	} catch (err) {
		console.error('Error deploying contract:', err);
	}
}

deployContract('LikeRewardManager', ['0xA796a15dC8797686748045D6D779be3A18444ECf']);
