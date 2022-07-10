import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bsc from '../components/bsc/bsc';
import Home from '../components/home/home';

class ReactRoute extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bsc" element={<Bsc />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default ReactRoute;
