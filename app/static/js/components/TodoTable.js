var React = require('react')
var TodoItem = require('./TodoItem')

class TodoTable extends React.Component{
    render(){
        // {this.props.name}
        var todos = this.props.todos.map(function (item) {
            return <TodoItem key={item.id} todo={item} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} />
        }.bind(this))
        return (
            <div>
            <h2>Todo List</h2>
            <table className="table">
                <thead>
                 <tr>
                    <th>content</th>
                    <th>status</th>
                    <th>time</th>
                    <th>opeartion</th>
                </tr>
                </thead>
                <tbody>
                     {todos}
                </tbody>
            </table>
            </div>
        )
    }
}

module.exports = TodoTable;