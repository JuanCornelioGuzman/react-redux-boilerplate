var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App Css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<p>Boilerplate Project</p>,
	document.getElementById('app')
);

require('./redux-example.jsx')
