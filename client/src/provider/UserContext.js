import { createContext, useEffect, useState } from 'react';
import { axiosApp } from '../util/config';

export const UserContext = createContext();

export function UserProvider({ children }) {
	const [user, setUser] = useState({});

	useEffect(() => {
		fetchAndSetUserData();
	}, []);

	async function fetchAndSetUserData() {
		try {
			const status = await axiosApp.get('/auth/status');
			const data = status.data;
			setUser(data);
		} catch (err) {
			console.error(err);
		}
	}

	return !user ? (
		<div className='center'>
			<div className='spinner-border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</div>
		</div>
	) : (
		<UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>
	);
}
