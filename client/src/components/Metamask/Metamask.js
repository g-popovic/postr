import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import { MetamaskButton } from './button';

export const Metamask = ({ className }) => {
	function getLibrary(provider) {
		return new Web3(provider);
	}
	return (
		<Web3ReactProvider getLibrary={getLibrary}>
			<MetamaskButton className={className} />
		</Web3ReactProvider>
	);
};
