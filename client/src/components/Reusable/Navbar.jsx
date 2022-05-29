import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
				<h3 className='logo'>LOGO</h3>
				<button className='menu-button' onClick={onOpenSidebar}>
					MENU
				</button>
			</div>

			{showSidebar && (
				<div>
					<div
						onClick={onCloseSidebar}
						className={
							'sidebar-background-blur' +
							(sidebarIsClosing ? ' closing' : '')
						}
					></div>
					<div
						className={
							'sidebar-container' +
							(sidebarIsClosing ? ' closing' : '')
						}
					>
						<h5 className='text-white'>LOGO</h5>

						<div className='d-flex flex-column sidebar-btn-containers'>
							<Link
								to='/my-profile'
								className='link-btn btn btn-outline-light'
							>
								MY PROFILE
							</Link>
							<Link
								to='/explore'
								className='link-btn btn btn-outline-light'
							>
								EXPLORE
							</Link>
							<Link
								to='/new-post'
								className='link-btn btn btn-outline-light'
							>
								NEW POST
							</Link>
							<Link
								to='/statistics'
								className='link-btn btn btn-outline-light'
							>
								STATISTIC
							</Link>
							<Link
								to='/'
								className='link-btn btn btn-outline-light'
							>
								HOME
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
