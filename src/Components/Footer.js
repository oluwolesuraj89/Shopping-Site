import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    
  const navigate = useNavigate();

  const Home = () =>{
      navigate('/')
  } 
  return (
      
      <div className='body'>
        <div className='main'>
            <div className='footer-container'>
                <div className='footer-content'>
                    <p>like what you see?</p>
                    <h1>Let’s work together</h1>
                    <p>If you’re looking for a kick-ass product design <br/> agency, we’re here to help!</p>
                </div>
                <div className='footer-icons-section'>
                    <div className='footer-icons'>
                    <i class='bx bxl-facebook-circle facebook'></i>
                    <i class='bx bxl-twitter twitter '></i>
                    <i class='bx bxl-instagram instagram'></i>
                    <i class='bx bxl-linkedin-square linkedin'></i>
                    </div>
                    {/* <div style={}> */}
                     <NavLink to={'/Productdetails'}>About us</NavLink>
                     <NavLink to={'/Grains'}>Contact us</NavLink>
                    {/* </div> */}
                    <p>© 2023 Rayna. All rights reserved.</p>
                    <button onClick={Home} className='footer-btn'>M</button>
                </div>
            </div>
        </div>
      </div>  
  )
}
export default Footer