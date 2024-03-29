import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <p>Hey Professor Olgevee!</p>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
