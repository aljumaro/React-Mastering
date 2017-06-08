import React from 'react';
import { History } from 'react-router';
import BasicInput from 'appRoot/components/basicInput';
import Actions from 'appRoot/actions';
import SessionContext from 'appRoot/stores/sessionContext';

export default class Login extends React.Component {

	constructor(){
		super();
		this.state = {'loginError': null};
	}

	mixins: [ History ]

	login(e) {
		let detail = {};

		Array
			.from(e.target.querySelectorAll('input'))
			.map( i => detail[i.getAttribute('name')] = i.value);
		e.preventDefault();
		e.stopPropagation();

		Actions.login(detail.username, detail.password)
			.then(() => this.history.pushState('', '/'))
			.catch(() => this.setState({'loginError': 'Bad username or password'}));

	}

	render() {
		return (
				<form className="login-form" onSubmit={this.login}>
					<fieldset>
						<legend>Log in</legend>
						<BasicInput name="username" type="text" placeholder="username"/>
						<BasicInput name="password" type="password" placeholder="password"/>
						{this.state.loginError && <aside className="error">{this.state.loginError}</aside>}
						<button type="submit">Log In</button>
					</fieldset>
				</form>
			);
	}

}