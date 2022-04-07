import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/404'
import About from './pages/About'
// import Dashboard from './pages/admin/Dashboard'
import Register from './pages/customer/Register'
import Home from './pages/Home'
import Login from './pages/Login'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* After Login */}
        {/* <Route path='/admin/dashboard' element={<Dashboard />} /> */}

        {/* Not Found */}
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App