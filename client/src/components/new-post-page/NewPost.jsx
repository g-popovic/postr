import React from 'react';
import { useState } from 'react';
import { axiosApp } from '../../util/config';
import { Navbar } from '../Reusable/Navbar';
import './new-post.scss';

export function NewPost() {
	const [text, setText] = useState('');

	function handleChange(e) {
		setText(e.target.value);
	}

	async function onSubmit() {
		try {
			await axiosApp.post('/posts/new', { text });
			setText('');
		} catch (err) {
			alert('Something went wrong');
			console.error(err);
		}
	}

	return (
		<div className='new-post-page'>
			<div className='post-container'>
				<Navbar />
				<div className='post-wrapper'>
					<h1>CREATE NEW POST</h1>
					<textarea
						type='text'
						onChange={handleChange}
						value={text}
						autoComplete='off'
						placeholder='What do you want to post about? Remember, you can only post once every 24 hours.'
					/>
					<button onClick={onSubmit}>POST</button>
				</div>
			</div>
		</div>
	);
}
