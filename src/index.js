import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GuessGame from './components/guess-game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GuessGame />, document.getElementById('root'));
registerServiceWorker();
