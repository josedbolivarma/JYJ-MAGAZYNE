import { Navigate } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Details } from '../components/Details'
import Header from '../components/Header'
import Home from '../components/Home'
import Cart from '../pages/Cart/Cart'

const DashboardRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/details:id' element={<Details />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default DashboardRoutes
