import React from 'react';

export default function History(props) {
	const guesses = props.guesses.map((guess, index) =>
        <li key={index}>
            {guess}
        </li>
    );
	return (
		<ul role="status">
			{guesses}
		</ul>
	);
}