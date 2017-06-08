import Reflux from 'reflux';
import Request from 'superagent';
import Cookie from 'js-cookie';

import Actions from 'appRoot/actions';
import Config from 'appRoot/appConfig';

export default Reflux.createStore({
    listenables: Actions,

    endPoint: Config.apiRoot + '/users',

    context: { loggedIn: false },

    getInitialState: function() {

    	this.context = JSON.parse(Cookie.getItem('session')) || {};
    	this.context.loggedIn = this.context.loggedIn || false;
    	return this.context;

    },

    getResponseResolver: function(action) {

    	return function (err, res) {

    		let ok = res.ok;
    		let array = res.body instanceof Array;
    		let filled = res.body.length > 0;

    		if (ok && array && filled) {
    			
    			this.context = res.body[0];
    			this.context.loggedIn = true;
    			this.profileImageData = null;

    			this.trigger(this.context);

    			action.completed();

    			Cookie.setItem('session', this.context);

    		} else {
    			action.failed();
    		}

    	}.bind(this);

    },

    getSessionInfo: function() {
    	return JSON.parse(Cookie.getItem('session'));
    },

    onLogin: function(name, pass) {
    	
    	Request
    		.get(this.endPoint)
    		.query({
    			'username': name,
    			'password': pass
    		})
    		.end(this.getResponseResolver(Actions.login));

    },

    onLogout: function() {
    	
    	Cookie.removeItem('session');
    	this.context = { loggedIn: false };
    	this.trigger(this.context);
    	return true;

    }
});
