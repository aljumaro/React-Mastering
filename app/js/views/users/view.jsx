import React from 'react';

export default class UserView extends React.Component {

	render() {
		return (
				<div className="user-view">user view: {this.props.match.params.userId}</div>
			);
	}

}