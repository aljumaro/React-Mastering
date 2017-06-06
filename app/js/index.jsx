import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CSS from '../css/app.less';
import AppLayout from 'appRoot/views/appLayout'




/*let routes = (
	<Route path="/" component={ AppLayout }>
		<IndexRoute component={ PostList } />
		<Route path="posts/:pageNum/?" component={ PostList } ignoreScrollBehavior />
		<Route path="/posts/create" component={ PostEdit }/>
		<Route path="/posts/:postId/edit" component={ PostEdit } />
		<Route path="posts/:postId" component={ PostView } />
		<Route path="/users" component={ UserList } />
		<Route path="/users/create" component={ UserEdit } />
		<Route path="/users/:userId" component={ UserView } />
		<Route path="/users/:userId/edit" component={ UserEdit } />
		<Route path="/login" component={ Login } />
		<Route path="*" component={ PostList } />
	</Route>
)*/



ReactDom.render(
	<BrowserRouter>
		<AppLayout/>
	</BrowserRouter>
	, document.getElementById('app'));