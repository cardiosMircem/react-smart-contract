import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Bsc from '../components/bsc/bsc';
import Home from '../components/home/home';

class ReactRoute extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="bsc" element={<Bsc />} />
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default ReactRoute;
