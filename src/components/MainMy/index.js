import React from 'react';
import {Container} from 'react-bootstrap';
import TodoItem from '../TodoItem';
import todosData from '../../todosData';

class MainMy extends React.Component {
    
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    handleChange = (id) => {
        this.setState(prevState => {
            const updateTodos = prevState.todos.map(todo => {
                if(todo.id === id) {
                    todo.complited = !todo.complited
                }
                return todo
            })
            return {
                todos: updateTodos
            }
        })
    }

    render() {

        const todosItem = this.state.todos.map(item => <TodoItem handleChange={this.handleChange} key={item.id} products={item} />);
        
        return (
            <main>
                <Container className="pt-3">
                    {todosItem}
                </Container>
            </main>
        )
    }
}

export default MainMy;