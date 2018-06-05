var React = require('react');

const { Link } = require('react-router');

var Examples = props => {
	return (
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to="/?location=Salt Lake City">Salt Lake City, UT</Link>
				</li>
				<li>
					<Link to="/?location=Nairobi">Nairobi, Kenya</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = Examples;

// This is where we added our grid.