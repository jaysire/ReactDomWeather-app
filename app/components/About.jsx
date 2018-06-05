var React = require('react');

var About = props => {
	return (
		<div>
			<h1 className="text-center page page-title">About</h1>
			<p>
				This is a weather application that I biuld on React. <br/> I have built this for The Complete React Web App
				Developer Course.
			</p>
			<p>Here are some of the tools i used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
				</li>
				<li>
					<a href="http://openweathermapt.org">Open Weather Map</a> - I used the Open Weather Map to search
					for the weather data by city name.
				</li>
			</ul>
		</div>
	);
};

module.exports = About;
