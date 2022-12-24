import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

const App = () => {
    return (
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/adduser' element={<AddUser />} />
          <Route exact path='/edituser/:id' element={<EditUser />} />
        </Routes>
      </div>
    )
}

export default App
