import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Root
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/404'

// Admin
import AdminPage from './pages/admin/AdminPage'
import DashboardAdmin from './pages/admin/DashboardAdmin'
import LoginAdmin from './pages/admin/LoginAdmin'
import RegisterAdmin from './pages/admin/RegisterAdmin'
import ProfileAdmin from './pages/admin/ProfileAdmin'

// Customer
import DashboardCustomer from './pages/customer/DashboardCustomer'
import LoginCustomer from './pages/customer/LoginCustomer'
import RegisterCustomer from './pages/customer/RegisterCustomer'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        {/* After Login */}

        {/* Admin */}
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/admin/login' element={<LoginAdmin />} />
        <Route path='/admin/register' element={<RegisterAdmin />} />
        <Route path='/admin/dashboard' element={<DashboardAdmin />} />
        <Route path='/admin/profile' element={<ProfileAdmin />} />

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