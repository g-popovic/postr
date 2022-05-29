import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Metamask } from '../Metamask/Metamask';

export function Navbar() {
	const [showSidebar, setShowSidebar] = useState(false);
	const [sidebarIsClosing, setSidebarIsClosing] = useState(false);

	function onOpenSidebar() {
		setShowSidebar(true);
		setSidebarIsClosing(false);
		document.querySelector('body').classList.add('no-scroll');
	}

	function onCloseSidebar() {
		setSidebarIsClosing(true);
		// After closing animation plays:
		setTimeout(() => setShowSidebar(false), 300);
		document.querySelector('body').classList.remove('no-scroll');
	}

	return (
		<>
			<div className='navbar-wrapper'>
				<Link to='/' className='logo'>
					LOGO
				</Link>
				<button className='menu-button' onClick={onOpenSidebar}>
					MENU
				</button>
			</div>

			{showSidebar && (
				<div>
					<div
						onClick={onCloseSidebar}
						className={
							'sidebar-background-blur' + (sidebarIsClosing ? ' closing' : '')
						}></div>
					<div className={'sidebar-container' + (sidebarIsClosing ? ' closing' : '')}>
						<h5 className='text-white'>LOGO</h5>

						<div className='d-flex flex-column sidebar-btn-containers'>
							<Metamask className='link-btn' />

							<Link
								to='/my-profile'
								className='link-btn btn btn-outline-light'
								onClick={onCloseSidebar}>
								MY PROFILE
							</Link>
							<Link
								to='/explore'
								className='link-btn btn btn-outline-light'
								onClick={onCloseSidebar}>
								EXPLORE
							</Link>
							<Link
								to='/new-post'
								className='link-btn btn btn-outline-light'
								onClick={onCloseSidebar}>
								NEW POST
							</Link>
							<Link
								to='/statistics'
								className='link-btn btn btn-outline-light'
								onClick={onCloseSidebar}>
								STATISTIC
							</Link>
							<Link
								to='/'
								className='link-btn btn btn-outline-light'
								onClick={onCloseSidebar}>
								HOME
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
