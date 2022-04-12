import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import NavBar from './Navbar';
import Home from './Home';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import Fish from './pages/Fish';
import Food from './pages/Food';
import Toys from './pages/Toys';
import Cat from './pages/Cat';


function App() {

  return <BrowserRouter>
    <NavBar />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dogs' element={<Dogs />}>
          <Route path='food' element={<Food />} />
          <Route path='toys' element={<Toys />}/>
        </Route>
        <Route path='cats' element={<Cats />}>
          <Route path=':catId' element={<Cat />} />
        </Route>
        <Route path='fish' element={<Fish />} />
      </Routes>
    </main>
  </BrowserRouter>;
}

export default App;
