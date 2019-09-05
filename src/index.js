import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hook from '../src/Day2/Hook'
import Day3 from '../src/Day3/Day3'
import Day4 from '../src/Day4/Day4'
import Day5 from '../src/Day5/Day5'

import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));    // Day1 and Day2
// ReactDOM.render(<Hook />, document.getElementById('root'));      // Day2
// ReactDOM.render(<Day3 />, document.getElementById('root'));      // Day3
// ReactDOM.render(<Day4 />, document.getElementById('root'));      // Day4
 ReactDOM.render(<Day5 />, document.getElementById('root'));        // Day5



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
