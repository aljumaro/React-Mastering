import React from 'react';
import { Route, Switch } from 'react-router';
import UserList from './list';
import UserEdit from './edit';
import UserView from './view';

export default class UsersRouter extends React.Component {
	render() {
		return (
			  <Switch>
			    	<Route exact path="/users" component={ UserList } />
					<Route exact path="/users/create" component={ UserEdit } />
					<Route exact path="/users/:userId" component={ UserView } />
					<Route path="/users/:userId/edit" component={ UserEdit } />
			  </Switch>
		  )
	}
}