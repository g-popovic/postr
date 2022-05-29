import { createContext, useEffect, useState } from 'react';
import { axiosApp } from '../util/config';

export const UserContext = createContext();

export function UserProvider({ children }) {
	const [user, setUser] = useState({});

	console.log(user);

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

	return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
}
