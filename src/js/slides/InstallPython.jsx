/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({
    render: function () {
        return <section>
			<header>Install Python</header>
			<main>
				<p>Go to https://www.python.org/downloads/</p>
				<p>Should say "Download the latest version for..."</p>
				<p>Download Python 2.7.10</p>
				<p>Run installer.</p>
				<p>"...Cut to later on..."</p>
				<p>type the following...</p>
				<code>
					Python one_finish.py
				</code>
				<p>You should see "Hello World" in the terminal.</p>
			</main>
			<footer>
				Slide 1 of 10
			</footer>
		</section>;
    }
});