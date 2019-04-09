import React from 'react';
import './style.scss';

function TodoItem(props) {

    return (
        <div className="custom-control custom-checkbox alert pl-5">
            <input type="checkbox" className="myCheck" />
            <h2 className="d-flex">{props.products.name}<span className="ml-auto text-danger">Price: {props.products.price.toLocaleString("en-USD", { style: "currency", currency: "USD" })}</span></h2>
            <h4 className="text-primary">{props.products.description}</h4>
        </div>
    )
}

export default TodoItem;