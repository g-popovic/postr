import './styles.scss';
import React from 'react';
import BackgroundImage from '../../assets/background.jpg';

export default function LandingPage() {
	return (
		<div className='outer-container'>
			<img className='bg-image' src={BackgroundImage} alt='background' />

			<div className='inner-container'>
				<h6>WELCOME TO</h6>
				<h1>POSTR</h1>
			</div>
		</div>
	);
}
