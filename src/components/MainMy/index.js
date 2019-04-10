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

    render() {

        const todosItem = this.state.todos.map(item => <TodoItem key={item.id} products={item} />);
        
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