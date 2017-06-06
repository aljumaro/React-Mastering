import React from 'react';
import { Link } from 'react-router-dom';

export default class AppHeader extends React.Component {

	render() {
		return (
			<header className="app-header">
				<nav>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/posts'>Posts</Link></li>
						<li><Link to='/users'>Users</Link></li>
					</ul>
				</nav>
			</header>
			);
	}

}