import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';

const App = () => {
    return (
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/adduser' element={<AddUser />} />
        </Routes>
      </div>
    )
}

export default App
