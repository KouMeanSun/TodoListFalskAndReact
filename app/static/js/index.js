/**
 * Created by gaomingyang on 2018/3/16.
 */
var React = require('react');
var ReactDOM = require('react-dom')
var Todo = require('./components/Todo');

class Welcome extends React.Component {
 			 render() {
    				return <h1>Hello, {this.props.name}</h1>;
 				 }
			}

module.exports = Welcome;

// ReactDOM.render(<Welcome name="高明阳"/>,document.getElementById('todo-container'));
ReactDOM.render(<Todo />,document.getElementById('todo-container'));
