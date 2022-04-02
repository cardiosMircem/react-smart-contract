import React from 'react';
import NavBar from './nav-bar';
import ReactRoute from './react-route';

class Main extends React.Component {
  render() {
    return (
      <>
        <NavBar></NavBar>
        <ReactRoute></ReactRoute>
      </>
    );
  }
}

export default Main;
