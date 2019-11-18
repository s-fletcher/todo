import React from 'react';
import './Add.scss';
import Item from '../Item/Item';


// Add component
class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
        this.list = [];
        this.handler = this.handler.bind(this)
    }

    // Helper function
    helperHandler(key) {
        // small hack to fix weird class bug
        document.getElementsByClassName("item")[key].classList.remove("remove");
        // remove key from list
        this.list.splice(key, 1);
        this.setState({})
    }

    // Function called when finishing task
    handler(key) {
        setTimeout(() => this.helperHandler(key), 500);
        // add class to play animation
        document.getElementsByClassName("item")[key].classList.add("remove");
    }
    
    // Function called when submitting
    handleSubmit = event => {
        event.preventDefault();
        this.input.blur();
        var input = this.input.value.trim();
        if (input === "")
            return;
        this.list.push(input);
        this.input.value = "";
        this.setState({});
    };

    // Rendering
    render() {
        var none;
        if (this.list.length === 0) {
            none = <p className="none">All tasks complete!</p>;
        } else {
            none = "";
        }
        return (
            <div className="add">
                <div className="line"></div>

                {/* Add task */}
                <form onSubmit={this.handleSubmit}>
                    <input id="input"
                        type="text"
                        maxLength="100"
                        name="username"
                        placeholder="Add a task"
                        ref={(input) => this.input = input}
                    />
                </form>
                {/* Listing tasks */}
                <h3>
                    {this.list.map((name, key) =>
                        /*
                            Name: name of task
                            Index: index of task
                            Key: added to get rid of warning
                            Handler: how to handle pressing item
                        */
                        <Item name={name} index={key} key={key} handler={this.handler}/>
                    )}
                </h3>
                {/* displaying all task complete text */}
                {none}
            </div>
        );
    }
}

export default Add;
