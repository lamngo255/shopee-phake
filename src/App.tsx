import React from 'react';
import 'normalize.css';
import '@/assets/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';
import { ToastContainer } from 'react-toastify';
import Authorization from '@/components/Authorization/Authorization';

function App() {
  return (
    <div className="App">
      <Routes />
      <ToastContainer />
      <Authorization />
    </div>
  );
}

export default App;
