import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import CSS from '../css/app.less';

class AppLayout extends React.Component {

	render() {
		return (
			<div className="app-container">
				<main>
					From main
				</main>
			</div>
		)
	}

}

ReactDom.render(<AppLayout></AppLayout>, document.getElementById('app'));