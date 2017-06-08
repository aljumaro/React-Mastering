import Reflux from 'reflux';
import Request from 'superagent';

import Actions from 'appRoot/actions';
import Config from 'appRoot/appConfig';

export default Reflux.createStore({
    listenables: Actions,

    users: [],

    endPoint: Config.apiRoot + '/users',

    init: function() {
        Request
            .get(this.endPoint)
            .end(function(err, res) {
                if (res.ok) {
                    this.users = res.body;
                    this.trigger(this.users);
                }
            }.bind(this));
    },

    getInitialState: function() {
        return this.users;
    },

    modifyUser: function(method, details, action) {
        Request
            [method](this.endpoint)
            .send(details)
            .end(function(err, res) {
                if (res.ok) {
                    Actions
                    	.login(res.body.username, res.password)
                        .then(() => action.completed(res.body));
                } else {
                    action.failed(err);
                }
            }.bind(this));;
    },

    onCreateUser: function() {
    	this.modifyUser('post', details, Actions.createUser);
    },

    onEditUser: function() {
    	this.modifyUser('put', details, Actions.editUser);
    }

});
