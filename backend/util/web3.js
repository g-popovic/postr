const LikeRewardManager = require('../ethereum/build/LikeRewardManager.json');
const ExampleContract = require('../ethereum/build/ExampleContract.json');
const {
	ADMIN_PUBLIC_ADDRESS,
	web3,
	EXAMPLE_CONTRACT_ADDRESS,
	REWARD_MANAGER_CONTRACT_ADDRESS,
} = require('./web3.config');

async function sendExampleTransactionTransaction() {
	// Load web3 contract instance using ABI and address
	const exampleContract = new web3.eth.Contract(ExampleContract.abi, EXAMPLE_CONTRACT_ADDRESS);

	// Check that everything is working correctly
	console.log(`Old data value: ${await exampleContract.methods.number().call()}`);
	const receipt = await exampleContract.methods.setNumber(3).send({
		from: ADMIN_PUBLIC_ADDRESS,
	});
	console.log(`Transaction hash: ${receipt.transactionHash}`);
	console.log(`New data value: ${await exampleContract.methods.number().call()}`);
}

async function triggerSendingRewards(userAddress, numberOfLikes, rewardPerLike) {
	const contract = new web3.eth.Contract(LikeRewardManager.abi, REWARD_MANAGER_CONTRACT_ADDRESS);

	try {
		const receipt = await contract.methods
			.sendRewards(userAddress, numberOfLikes, rewardPerLike)
			.send({
				from: ADMIN_PUBLIC_ADDRESS,
			});
		console.log(receipt);
	} catch (err) {
		console.log(err);
	}
}

module.exports = {
	sendExampleTransactionTransaction,
	triggerSendingRewards,
};
