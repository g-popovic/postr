require('dotenv').config();
const Provider = require('@truffle/hdwallet-provider');
const crypto = require('crypto');
const Web3 = require('web3');
const infuraUrl = process.env.INFURA_URI;
const privateKey = process.env.ADMINISTRATOR_PRIVATE_KEY;
const provider = new Provider(privateKey, infuraUrl);

const web3 = new Web3(provider);
const ADMIN_PUBLIC_ADDRESS = process.env.ADMINISTRATOR_WALLET_ADDRESS;
const EXAMPLE_CONTRACT_ADDRESS = '0x99aD02E67073404Dd80B228bBb0d0e8EbDDd8cA7';
const REWARD_MANAGER_CONTRACT_ADDRESS = '0xBDa485474825649f563bD8AB7C7F33966759535e';

function generateNonce() {
	return crypto.randomBytes(16).toString('hex');
}

module.exports = {
	web3,
	ADMIN_PUBLIC_ADDRESS,
	EXAMPLE_CONTRACT_ADDRESS,
	REWARD_MANAGER_CONTRACT_ADDRESS,
	generateNonce,
};
