import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import PublicRoute from './components/PublicRoute'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {

  const [isAuthenticated, setAuth] = useState(!!localStorage.getItem('token'))

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={
          <PublicRoute>
            < Login />
          </PublicRoute>
        } />

        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

      </Routes>
    </div>
  )
}

export default App 