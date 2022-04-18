import React, { Component } from 'react';

class Counter extends Component {
    state = {
    /*
    an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a
    way to pass data from one component to other components. It is similar to function arguments.
    Props are passed to the component in the same way as arguments passed in a function*/

    //this.props is plain javaScript object that includes all the attributes
    //that we set  in counters component
        value: this.props.counter.value,
        test: 'zero',
        tags: ['tag1', 'tag2', 'tag3']
    };

////first way to bind handle methods, use constructor
//     constructor() {
//         super();
//         this.handleIncrement = this.handleIncrement.bind(this);
//     }

////second way to bind handle methods, use arrow method
    handleIncrement = (product) => {
        console.log(product);
        this.setState( {value: this.state.value + 1 } ); //method from Component to tell react any change
    }

    render() {
        console.log(this.props);
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
            <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes+= this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCounter() {
    const { test, value } = this.state
        return value === 0 ? test : value;
    }
}
export default Counter;