import React from 'react'
import { Navigate } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'

const DashboardRoutes = () => {
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Navigate to='/' />} />
    </Routes>
    </>
  )
}

export default DashboardRoutes