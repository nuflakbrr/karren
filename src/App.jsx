import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Root
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/404'

// Admin
import DashboardAdmin from './pages/admin/Dashboard'
import LoginAdmin from './pages/admin/Login'
import RegisterAdmin from './pages/admin/Register'

// Customer
import DashboardCustomer from './pages/customer/Dashboard'
import LoginCustomer from './pages/customer/Login'
import RegisterCustomer from './pages/customer/Register'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        {/* After Login */}

        {/* Admin */}
        <Route path='/admin/login' element={<LoginAdmin />} />
        <Route path='/admin/register' element={<RegisterAdmin />} />
        <Route path='/admin/dashboard' element={<DashboardAdmin />} />

        {/* Customer */}
        <Route path='/login' element={<LoginCustomer />} />
        <Route path='/register' element={<RegisterCustomer />} />
        <Route path='/dashboard' element={<DashboardCustomer />} />

        {/* Not Found */}
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App