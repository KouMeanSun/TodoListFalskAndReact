var React = require('react')
var ReactDOM = require('react-dom')
class TodoForm extends React.Component {




    handleSubmitClick(event){
        event.preventDefault();
        var content = ReactDOM.findDOMNode(this.refs.content).value.trim();
        if(!content){
            return;
        }
        this.props.addTodo(content);

        ReactDOM.findDOMNode(this.refs.content).value = "";
    }

    render(){
        return(
            <form className="input-group" onSubmit={this.handleSubmitClick.bind(this)}>
             <input  ref="content" className="form-control" id="content" name="content" type="text" />
                <span  className="input-group-btn">
                <button className="btn btn-default" type="submit">Add</button>
                </span>
            </form>
        )
    }
}

module.exports = TodoForm;