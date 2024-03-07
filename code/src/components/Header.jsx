import React from 'react';
import {auth} from '../config/Firebase'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Header = () => {

	const navigate = useNavigate()
	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				console.log('Sign-out successful');
				navigate('/');
				// Additional actions after successful sign-out can be performed here
			})
			.catch(error => {
				// An error occurred during sign-out.
				console.error('Sign out error:', error);
				// Handle the error, such as displaying an error message to the user
			});
	};
	
	return (
		<div className='header'>
			<h1 className='headerText'>NoteWorthy</h1>
			<div className='headerLinks'>
			<a href="#"   onClick={handleLogout} >Log Out</a>
			</div>
		</div>
	);
};

export default Header;
