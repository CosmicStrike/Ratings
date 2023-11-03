import React from 'react';
// import RatingComponent from './components/RatingComponent'
import './App.css'

function App(props) {
	const [rating1, setRating1] = React.useState(8);
	const [rating2, setRating2] = React.useState(3);
	const [rating3, setRating3] = React.useState(0);

	const clearRatings = () => {
		// YOUR CODE HERE
	}

	return (
		<div className='App'>
			<h1>Rating Component</h1>
			<h3>Must initially render 8 / 10 rating</h3>
			<RatingComponent
				// YOUR CODE HERE
			/>
			<h3>Must initially render 3 / 5 rating and does not allow rating change</h3>
			<RatingComponent
				// YOUR CODE HERE
			/>
			<h3>Must render if maxRating is not set</h3>
			<RatingComponent
				// YOUR CODE HERE
			/>
			<h3>Clears all current ratings</h3>
			<button onClick={clearRatings}>Clear All</button>
		</div>
	);
};

export default App;
