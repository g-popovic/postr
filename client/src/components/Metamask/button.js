import React from 'react';
import './Metamask.scss';
import { injected } from './connectors';
import icon from '../../statics/metamask-icon.png';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import { axiosApp } from '../../util/config';

export const MetamaskButton = ({ className }) => {
	const { active, account, library, connector, activate, deactivate } = useWeb3React();

	async function connectWalletAndLogin() {
		await connectMetamaskWallet();
		await signNonceAndLogin();
	}

	async function signNonceAndLogin() {
		if (!window.ethereum) {
			alert('Please install Metamask to use this app');
		} else {
			try {
				await activate(injected);
				const web3 = new Web3(window.ethereum);
				const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
				const response = await axiosApp.get(`/auth/generate-nonce/${accounts[0]}`);

				console.log({ acc: accounts[0] });

				// we need to sign this to authenticate
				const nonce = response.data.nonce;

				const signedNonce = await web3.eth.personal.sign(nonce, accounts[0]);

				await axiosApp.post('/auth/verify-signature-and-login', {
					signature: signedNonce,
					address: accounts[0],
				});
			} catch (err) {
				console.log(err);
				alert('Something went wrong!');
			}
		}
	}

	async function connectMetamaskWallet() {
		if (localStorage?.getItem('isWalletConnected') === 'true') {
			try {
				await activate(injected);
				localStorage.setItem('isWalletConnected', true);
			} catch (err) {
				console.log(err);
			}
		}
	}
	//   async function disconnect() {
	//     try {
	//       await deactivate(injected);
	//       localStorage.getItem("isWalletConnected", false);

	//       //   await web3.eth.currentProvider.disconnect();
	//     } catch (err) {
	//       console.log(err);
	//     }
	//   }
	// useEffect(() => {
	// connectMetamaskWallet;
	// }, []);

	return (
		<button
			className={'btn btn-rounded btn-outline-light metamask-btn ' + (className || '')}
			onClick={connectWalletAndLogin}>
			<div className='metamask-image-container'>
				<img src={icon} alt='metamask' className='metamask-image' />
			</div>
			{active === false ? (
				<span className='wallet-text'>CONNECT WALLET</span>
			) : (
				<span className='wallet-connected'>{account.slice(0, 13) + '...'}</span>
			)}
		</button>
	);
};
