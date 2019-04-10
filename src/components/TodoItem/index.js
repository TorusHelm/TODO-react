import React from 'react';
import './style.scss';

class TodoItem extends React.Component {

    constructor(props) {
        super(props)
        const products = this.props.products;
        this.state = {
            name: products.name,
            description: products.description,
            price: products.price
        }
    }

    changeHandler = () => {
        console.log(this.state.name)
    }
    
    render() {
        return (
            <div className="custom-control custom-checkbox alert pl-5">
                <input onChange={this.changeHandler} type="checkbox" className="myCheck" />
                <h2 className="d-flex">{this.props.products.name}<span className="ml-auto text-danger">Price: {this.props.products.price.toLocaleString("en-USD", { style: "currency", currency: "USD" })}</span></h2>
                <h4 className="text-primary">{this.props.products.description}</h4>
            </div>
        )
    }
}

export default TodoItem;