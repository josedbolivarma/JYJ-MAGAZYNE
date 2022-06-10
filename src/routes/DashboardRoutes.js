import React from 'react'
import { Navigate } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Header from '../components/Header'
import Cart from '../pages/Cart/Cart'
import Home from '../pages/Home'
import Payment from '../pages/Payment/Payment'

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe (
    "pk_test_51KnArTJaDltuSn9Nj7gxjtVoXGarC9RzF3sPvQh0BLPKgXhgSCgX5syMsdIXtPOZnrnVI6LvI5Dt4KtvdpeH6mo900O0OA7PWH"
  )

const DashboardRoutes = () => {
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/payment" element={
      <div>
       <Elements stripe={promise}>
       <Payment/>
       </Elements>
      </div>
    } />
    <Route path="*" element={<Navigate to='/' />} />
    </Routes>
    </>
  )
}

export default DashboardRoutes