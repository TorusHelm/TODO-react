import React from 'react';
import {Container} from 'react-bootstrap';
import TodoItem from '../TodoItem';
import vschoolProducts from '../../vschoolProducts';

function MainMy() {
    return (
        <main>
            <Container className="pt-3">
                {vschoolProducts.map(item => <TodoItem products={{
                    key: item.id,
                    name: item.name,
                    price: item.price,
                    description: item.description
                    }}
                />)}
            </Container>
        </main>
    )
}

export default MainMy;