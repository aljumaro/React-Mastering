import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CSS from '../css/app.less';
import AppLayout from 'appRoot/views/appLayout'


ReactDom.render(
	<BrowserRouter>
		<AppLayout/>
	</BrowserRouter>
	, document.getElementById('app'));