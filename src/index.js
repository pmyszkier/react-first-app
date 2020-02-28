import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Car from './Car.js';
import Garage from './Car.js';
import * as serviceWorker from './serviceWorker';

// Pobieram komponenty: 
import MyButtonComponent from './MyAlertButton.js';
import ClickCounter from './ClickCounter.js';
import InputContent from './InputContent.js';
import ShowButtonAndDate from './ShowDate.js';
// import DateComponent from './DateComponent.js'; // to nie tutaj tylko w showDate.js
import PersonListComponent from './PersonListComponent.js';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Car />, document.getElementById('root1'));
ReactDOM.render(<Garage />, document.getElementById('root2'));

ReactDOM.render(<MyButtonComponent />, document.getElementById('root3'));
// root3-Dalej patrz index.html
ReactDOM.render(<ClickCounter />, document.getElementById('root4'));
// root4-Dalej patrz index.html
ReactDOM.render(<InputContent />, document.getElementById('root5'));
// root5-Dalej patrz index.html
ReactDOM.render(<ShowButtonAndDate />, document.getElementById('root6'));
// root6-Dalej patrz index.html
ReactDOM.render(<PersonListComponent />, document.getElementById('root7'));
// root6-Dalej patrz index.html



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
