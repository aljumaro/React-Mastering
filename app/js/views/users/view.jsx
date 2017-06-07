import React from 'react';
import BasicInput from '../../components/basicInput';
import Loader from '../../components/loader';

export default class UserView extends React.Component {

	render() {
		return (
				<div className="user-view">user view: {this.props.match.params.userId}
				<BasicInput helpText="this is a helpText"/>
				<Loader />
				</div>
			);
	}

}