import React, { Component } from 'react';

class TodoList extends Component {
    
    state = {
        todos: []
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    todos: json
                })
                console.log(this.state)
            });
    }

    render() {
        return (
            <ul>
                {this.state.todos.map(item =>
                    <li key={item.id} className={item.completed ? 'completed' : 'not-completed'}>{item.title}</li>
                )}
            </ul>
        )
    }

}

export default TodoList;