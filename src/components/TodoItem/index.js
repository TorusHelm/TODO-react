import React from 'react';

function TodoItem() {
    return (
        <div className="custom-control custom-checkbox alert alert-primary pl-5">
            <input type="checkbox" className="custom-control-input" id="customCheck-1" />
            <label className="custom-control-label" htmlFor="customCheck-1">First Variant</label>
        </div>
    )
}

export default TodoItem;