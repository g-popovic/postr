import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
	const [user, setUser] = useState({});

	useEffect(() => {
		fetchAndSetUserData();
	}, []);

	async function fetchAndSetUserData() {
		try {
			// const { data } = await axios.get('/auth/status');
			const data = {
				address: 'placeholder',
				showLandingPageIntro: false,
			};
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
