import React, { Component } from 'react';
import Library from './library/library'
import Schedule from './schedule/schedule'



 class App extends Component {
  render() {
    return (
      <div className='app'>
        <Library/>
        <Schedule/>
      </div>
    );
  }
}


export default App