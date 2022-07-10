import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Bsc from '../components/bsc/bsc';
import Home from '../components/home/home';

class ReactRoute extends React.Component {
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/react-smart-contract" element={<Home />} />
          <Route path="/react-smart-contract/bsc" element={<Bsc />} />
          <Route path="/react-smart-contract/home" element={<Home />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default ReactRoute;
