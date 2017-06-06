import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import AppHeader from 'appRoot/views/appHeader'
import Login from 'appRoot/views/Login'
import PostsRouter from 'appRoot/views/posts/router'
import UsersRouter from 'appRoot/views/users/router'

export default class AppLayout extends React.Component {
	render() {
		return (
			<div className="app-container">
				<AppHeader />
				<main>
					<Switch>
				      <Route path='/posts' component={PostsRouter}/>
				      <Route path='/users' component={UsersRouter}/>
				      <Route path='/login' component={Login}/>
				      <Route component={PostsRouter}/>
				    </Switch>
				</main>
			</div>
		)
	}
}