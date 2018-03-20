// /**
//  * Created by gaomingyang on 2018/3/16.
//  */
var React = require('react');
var TodoForm = require('./TodoForm')
var TodoTable = require('./TodoTable')

class Todo extends React.Component {

		constructor(props) {
    		super(props);
   			 this.state = {
   			 	todos:[]
			 };
   			 var  self = this;
   			 // This binding is necessary to make `this` work in the callback
   			 this.listTodo = this.listTodo.bind(this);
   			 this.addTodo = this.addTodo.bind(this);
			this.updateTodo = this.updateTodo.bind(this);
			this.deleteTodo = this.deleteTodo.bind(this);

 		 }

 		 listTodo(){
			$.ajax({
				type:'get',
				url:'/list'
			}).done(function(resp){
				if (resp.status == 'success'){
					this.setState({todos:resp.todos});
				}
			}.bind(this));
		 }

		 componentDidMount(){
 		 	this.listTodo()
		 }

		 addTodo(content){
		 	var self = this;
		 	$.ajax({
				type:'post',
				url:'/add',
				data:{content:content}
			}).done(function (resp) {
				if(resp.status == 'success'){
					this.listTodo()
				}
            }.bind(this))
		 }

		 updateTodo(id,status){
		 	// var thisself = this;
		 	$.ajax({
				type:'post',
				url:'/update',
				data:{id:id,status:status}
			}).done(function (resp) {
				if (resp.status == 'success'){
					console.log(this);
					this.listTodo()
				}
            }.bind(this))
		 }

		 deleteTodo(id){
		 	var self = this;
		 	$.ajax({
				type:'get',
				url:'/delete/'+id
			}).done(function (resp) {
				if (resp.status == 'success'){
					this.listTodo()
				}
            }.bind(this))
		 }

	     render() {
  				  return (
     					 <div>
						  <h1>Gaomingyang</h1>
      					  <TodoForm  addTodo = {this.addTodo}/>
						  <TodoTable todos = {this.state.todos}  updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
      					</div>
   					 );
 			 }
	 	}

module.exports = Todo;