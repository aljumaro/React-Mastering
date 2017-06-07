import React from 'react';
import { Link } from 'react-router-dom';

export default class AppHeader extends React.Component {

	render() {
		return (
			<header className="app-header">
				<Link to="/"><h1>Re&#923;ction</h1></Link>
				<section className="account-ctrl">
					<Link to="/users/create">Join</Link>
					<Link to="/login">Log In</Link> 
				</section>
			</header> 
			);
	}

}