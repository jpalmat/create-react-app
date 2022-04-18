import './App.css';
import Navbar from './components/navbar';
import React, {Component} from 'react';
import Counters  from './components/counters';

class App extends Component {
    render() {
    return (
        <React.Fragment>
            <Navbar />
            <main className="container">
                <Counters />
            </main>
        </React.Fragment>
      );
    }
}

export default App;
