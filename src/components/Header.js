import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAsync } from '../redux/actions/actionLogin';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate('/login');
  }

  return (
    <header>
      
    </header>
  )
}

export default Header