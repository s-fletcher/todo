import React from 'react';
import './Item.scss';
import { FaCheck } from "react-icons/fa";

// Add component
class Item extends React.Component {
    // Rendering
    render() {
        var handler = this.props.handler;
        return (
            <div onClick={() => handler(this.props.index)} className="item">
                <p className="name">{this.props.name}</p>
                <FaCheck className="complete"/>
            </div>
        );
    }
}

export default Item;
