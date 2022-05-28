import React from 'react';
import { useState } from 'react';
import { Navbar } from '../Reusable/Navbar';
import { Post } from '../Reusable/Post';
import './my-profile.scss';

export function MyProfile() {
	const [edit, setEdit] = useState(false);
	const [textValue, setTextValue] = useState('');
	const [userNameValue, setUserNameValue] = useState('');

	function handleUserNameChange(e) {
		setUserNameValue(e.target.value);
	}

	function handleTextChange(e) {
		setTextValue(e.target.value);
	}

	function handleClick() {
		setEdit((prevValue) => !prevValue);
	}

	return (
		<div className='my-page-container'>
			<Navbar />
			<div className='bio'>
				<img
					className='bio-img'
					src='https://i1.sndcdn.com/avatars-000508491087-32hktm-t500x500.jpg'
					alt='avatar'
				/>
				<h1 className='bio-username'>Uros Stesevic</h1>
				{!edit && (
					<div>
						<button
							class='fa-solid fa-pen-to-square'
							onClick={handleClick}
						></button>
					</div>
				)}
				{!edit && (
					<div>
						<p>
							Lorem ipsum is placeholder text commonly used in the
							graphic, print, and publishing industries for
							previewing layouts and visual mockups.
						</p>
					</div>
				)}
				{edit && (
					<div>
						{/* <input
							type='text'
							onChange={handleUserNameChange}
							value={userNameValue}
							autoComplete='off'
						/> */}
						<textarea
							type='text'
							onChange={handleTextChange}
							value={textValue}
							autoComplete='off'
						/>
						<div className='bio-buttons'>
							<button>SAVE</button>
							<button onClick={handleClick}>DISCARD</button>
						</div>
					</div>
				)}
			</div>
			<div className='posts-container'>
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}