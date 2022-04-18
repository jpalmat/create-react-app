import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        test: 'zero',
        tags: ['tag1', 'tag2', 'tag3']
    };

////first way to bind handle methods, use constructor
//     constructor() {
//         super();
//         this.handleIncrement = this.handleIncrement.bind(this);
//     }

////second way to bind handle methods, use arrow method
    handleIncrement = () => {
        console.log('Increment', this);
        this.setState( {count: this.state.count + 1 } ); //method from Component to tell react any chabge
    }
    render() {

        return (
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </React.Fragment>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes+= this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCounter() {
    const { test, count } = this.state
        return count === 0 ? test : count;
    }
}
export default Counter;