import React from 'react';
import { Route, Switch } from 'react-router';
import PostList from './list';
import PostEdit from './edit';
import PostView from './view';

export default class PostsRouter extends React.Component {
	render() {
		return (
			  <Switch>
			    	<Route path="/posts/:pageNum/?" component={ PostList } ignoreScrollBehavior />
					<Route path="/posts/create" component={ PostEdit }/>
					<Route path="/posts/:postId/edit" component={ PostEdit } />
					<Route path="/posts/:postId" component={ PostView } />
			  </Switch>
		  )
	}
}