import React from 'react';

import Feedback from './feedback';

import History from './history';

import Form from './form';



export default class GuessGame extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			number: Math.floor(Math.random()*101),
			history: [],
			feedback: 'Make Your Guess!'
		}
	}

	newGame() {
		this.setState({
			number: Math.floor(Math.random()*101),
			history: [],
			feedback: 'Make Your Guess!'
		});
	}

	handleGuess(guess) {
		
    	if (isNaN(guess)) {
      		this.setState({ feedback: 'Please enter a valid number' });
    	}

    	let diff = Math.abs(guess - this.state.number);
		
		let feedback; 

		if (diff === 0) {
			alert('You guessed it!')
		}
		else if (diff < 11) {
			feedback = 'Hot'
				
		}
		else {

			feedback = 'Cold'
		}

		this.setState({
			feedback,
			history: [...this.state.history, guess]
		});

	}

	render() {
	
		return (
			<div className="game-container">
				<Feedback feedback={this.state.feedback} />
				<Form handleGuess={guess=>this.handleGuess(guess)} />
				<History guesses={this.state.history} />
				<button onClick={()=>this.newGame()}>Start Over</button>
			</div>
		);
	}
}