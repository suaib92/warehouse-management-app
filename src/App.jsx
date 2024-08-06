import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WarehouseList from './pages/WarehouseList';
import WarehouseDetails from './pages/WarehouseDetails';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<WarehouseList />} />
        <Route path="/details/:id" element={<WarehouseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
