const path = require('path');
const fs = require('fs');
const solc = require('solc');

/**
 *
 * @param {String} contractName
 * @returns { Object } { abi, evm: { bytecode: { object } } }
 */
function getCompiledContractData(contractName) {
	// Read contract code from file
	const contractPath = path.resolve(__dirname, '..', 'contracts', `${contractName}.sol`);
	const source = fs.readFileSync(contractPath, 'utf8');

	// Format contract code so the solc compiler understands it
	const compilerInput = {
		language: 'Solidity',
		sources: {
			[`${contractName}.sol`]: {
				content: source,
			},
		},
		settings: {
			outputSelection: {
				'*': {
					'*': ['*'],
				},
			},
		},
	};

	// Data which can be used to deploy the contract or interact with it in JS
	const compileResult = JSON.parse(solc.compile(JSON.stringify(compilerInput)));
	const compiledContractData = compileResult.contracts[`${contractName}.sol`][contractName];

	// Save compiled data to file for future use
	fs.writeFileSync(
		path.resolve(__dirname, '..', 'build', contractName + '.json'),
		JSON.stringify(compiledContractData),
	);

	return compiledContractData;
}

module.exports = {
	getCompiledContractData,
};
