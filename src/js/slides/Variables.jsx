/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({

    render: function () {
        return <section>
			<header>Variables</header>
			<main>
				<quote>"In computer programming, a variable or scalar is a storage location paired with an associated symbolic name (an identifier), which contains some known or unknown quantity of information referred to as a value."</quote>
				<p>Which means, a variable is a number or a string.</p>
				<p>So</p>
				<code>
					a = 5
					b = "Hello"
				</code>
				<p>What does a equal?</p>
				<code>
					5
				</code>
				<p>What does b equal?</p>
				<code>
					Hello
				</code>
				<p>What does a + b equal?</p>
				<code>
					ERROR!
				</code>
				<p>nothing you can not mix variable types. This will give you a nasty error in your terminal.</p>
			</main>
			<footer>
				Slide 1 of 10
			</footer>
		</section>;
    }
});