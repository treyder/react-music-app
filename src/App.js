import React, { Component } from 'react';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
            {this.props.children}
            {Footer}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
