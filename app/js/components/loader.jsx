import React from 'react';
import ClassNames from 'classnames';

export default class Loader extends React.Component {

	render() {
		let classes = ClassNames('loader-container', {'inline': this.props.inline});

		return (
			<div className="loader">
				<div className={classes}>
					<aside></aside>
					<aside></aside>
					<aside></aside>
					<aside></aside>
					<aside></aside>
				</div>
			</div>
			)
	}
}