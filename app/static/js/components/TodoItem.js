
var React = require('react')

class TodoItem extends React.Component{
    handleUpdate(id,status){
        this.props.updateTodo(id,status);
    }

    deleteUpdate(id){
        this.props.deleteTodo(id);
    }

    render(){
        var t = this.props.todo;
        var updateBtn;

        if(t.status == 0){
            updateBtn =  <button onClick={this.handleUpdate.bind(this,t.id,1)} className="btn btn-primary">Done</button>
        }else{
            updateBtn = <button  onClick={this.handleUpdate.bind(this,t.id,0)} className="btn btn-primary">Undone</button>
        }

        return (

            <tr>
                <td>{t.content}</td>
                <td>{t.status == 0 ? '未完成' :'已完成'}</td>
                <td>{t.time}</td>
                <td>
                     {updateBtn}
                     <button onClick={this.deleteUpdate.bind(this,t.id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}


module.exports = TodoItem;