import React from 'react';
import {Container} from 'react-bootstrap';
import TodoItem from '../TodoItem';

function MainMy() {
    return (
        <main>
            <Container className="pt-3">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </Container>
        </main>
    )
}

export default MainMy;