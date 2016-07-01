var React = require('react');
var ReactDOM = require('react-dom');

//	Routing
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var RouteHandler = require('react-router').RouteHandler;
// var browserHistory = require('react-router').browserHistory;
var HashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

var AppContainer = require('./containers/app.jsx');

ReactDOM.render( <AppContainer />, document.getElementById('app'));
