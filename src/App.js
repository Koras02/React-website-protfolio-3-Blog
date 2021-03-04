import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import MainPage from './Components/MainPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" component={MainPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
