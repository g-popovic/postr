import './styles.scss';
import React, { useContext, useState } from 'react';
import BackgroundImage from '../../assets/background.jpg';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../provider/UserContext';

export default function LandingPage() {
	const [showFirstSlide, setShowFirstSlide] = useState(true);
	const [showSecondSlide, setShowSecondSlide] = useState(false);
	const [showFadeOutAnimation, setShowFadeOutAnimation] = useState(false);
	const navigate = useNavigate();
	const [userData, setUserData] = useContext(UserContext);

	// TODO: Make this happen automatically or on scroll
	function transitionToSecondSlide() {
		setShowFirstSlide(false);
		setTimeout(() => setShowSecondSlide(true), 400);
	}

	function onPressExplore() {
		setShowFadeOutAnimation(true);
		setTimeout(onAnimationEnd, 1200);
	}

	function onAnimationEnd() {
		setUserData({ ...userData, showLandingPageIntro: true });
		navigate('/explore');
	}

	return (
		<div className='outer-container' onClick={transitionToSecondSlide}>
			<img
				className={'bg-image' + (showFadeOutAnimation ? ' fade-out' : '')}
				src={BackgroundImage}
				alt='background'
			/>

			<div className='title-container'>
				<div className={!showFirstSlide && 'fade-out'}>
					<h6 className='subtitle'>WELCOME TO</h6>
					<h1>POSTR</h1>
				</div>
			</div>

			<div className='info-container'>
				<div
					className={
						!showSecondSlide
							? 'fade-out-pre-intro'
							: showFadeOutAnimation
							? 'fade-out-outro'
							: ''
					}>
					<h5>POSTR</h5>
					<p>
						Hello world this is a text that is supposed to explain more about the
						product but do not worry about it too much for now
					</p>

					<button className='btn btn-outline-light' onClick={onPressExplore}>
						EXPLORE
					</button>
				</div>
			</div>
		</div>
	);
}
