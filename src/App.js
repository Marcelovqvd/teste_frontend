import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
