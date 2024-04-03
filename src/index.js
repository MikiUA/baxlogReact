import React from 'react';
import ReactDOM from 'react-dom/client';
import Context from './context/Context';
import Navbar from './Navbar/Navbar';
import BaxList from './BaxList/BaxList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <Navbar />
      <BaxList />
    </Context>
  </React.StrictMode>
);