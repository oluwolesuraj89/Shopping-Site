import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import Flag from '../Images/NigeriaFlag.png';

const Navbar = () => {
  return (
    <div className='header-container'>
      <div className='nav-header'>
        <div className='content'>
          <div className='contact'>
            <Link to ={'#'}><i className='fa fa-phone'></i>+234 7065292789</Link>
          </div>
          <div className='center'>
            <Link to ={'#'}>Get 50% Off on Selected Items</Link>
            <Link to ={'#'} id='shop-now'>shop Now</Link>
          </div>
          <div className='en-nigeria'>
            <Link to ={'#'}>EN <i className='fa fa-angle-down'></i></Link>
            <Link to ={'#'}><img src={Flag} alt='NigeriaFlag' style={{paddingRight: '5px',}}/><span>Nigeria</span> <i className='fa fa-angle-down'></i></Link>
          </div>
        </div>
      </div>

      <div className='main-nav'>
        <div className='nav-logo'>
          <NavLink to={'/'} id='Logo'> M </NavLink>
        </div>
        <div className='nav-menu' style={{width: '248px',}}>
          <NavLink to={'/Products'}>Fruits</NavLink>
          <NavLink to={'/Vegitables'}>Vegitables</NavLink>
          <NavLink to={'/Grains'}>Grains</NavLink>
        </div>
        <div className='search-section'>
          <div className='search'>
            <button><i className='bx bx-search'></i></button>
            <input type='search' placeholder='search here..'/>
          </div>
          <Link to={'#'}><i className='bx bx-heart'></i></Link>
          <Link to={'#'}><i className='bx bx-cart'></i></Link>
        </div>
        <div className='Login-Sign-up'>
          <Link className='Login'> Login </Link>
          <Link  className='SignUp'>  Sign Up </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar