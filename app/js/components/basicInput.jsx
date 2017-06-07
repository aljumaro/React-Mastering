import React from 'react';
import update from 'immutability-helper';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

export default class BasicInput extends React.Component {

	props: {
		helpText: PropTypes.string,
		error: PropTypes.string
	}

	render() {
		return(
			<div className={ClassNames('basic-input', {'error': this.props.error})}>
				<input type="text" className={ClassNames({'error': this.props.error})}/>
				{this.props.children}
				<aside>{this.props.error || this.props.helpText || ' '}</aside>
			</div>
		)
	}

};