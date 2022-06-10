import React from 'react'
import { Navigate } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Card from '../components/Card'
import Header from '../components/Header'

const DashboardRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default DashboardRoutes