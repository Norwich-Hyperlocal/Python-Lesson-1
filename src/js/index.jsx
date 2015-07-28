/** @jsx React.DOM */
'use strict';

var React = require('react');
var InstallPython = require('./slides/InstallPython');
var Variables = require('./slides/Variables');

React.render(
	<InstallPython />,
	document.getElementById('content')
);
