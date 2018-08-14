import React from 'react';

export default class Form extends React.Component {
	onSubmit(event) {
		event.preventDefault();
		const value = this.input.value;
		this.props.handleGuess(value);
		this.input.value = '';
	}


	render() {
		return (
			<form onSubmit={e => this.onSubmit(e)}>
				<input type="number" min="0" max="100" ref={input => (this.input = input)} />
				<button type="submit">Guess</button>
			</form>
		);
	}
}