import React from 'react';
import { useNavigate } from 'react-router-dom';
import OnbImg from './Images/login.png'
import Divider from './Images/Divider.png'
import Google from './Images/Google.png'
import Twitter from './Images/twitter.png'

const Login = () => {
const navigate = useNavigate();
  
    const continueToNextPage = () => {
      navigate('/Loginsucces');
    };

    const navigateToonboarding = () => {
        navigate('/');  
      };

    return (
        <div className='signup'>
            <div className='TheImg'>
                <img src={OnbImg} className="leftonb-img" alt="img" />
            </div>



            <div className="sign-cont">
                <h4 className='txt-h4' >Welclome back!</h4>
                <p className='txt-p'>Don't have an account? <a className='anclog' onClick={navigateToonboarding}>Sign Up </a></p>

             <form>
                <span className="st-id">Email Address</span>
                <br></br>
                <input type="text" className="sn-input" placeholder="" />
                <span className="st-id">Password</span>
                <br></br>
                <input type="text" className="sn-input" placeholder="" />
             </form>
              {/* <button className='sgn-btn'> Proceed </button> */}
              <button className='sgn-btn' onClick={continueToNextPage}>Proceed</button>
            <div className='tandc'>
                <div>
               <input type='checkbox' className='tandc-radio'></input></div>
               <div>
               <p>I Agree to the <a className='sgntrm' href=''>Terms </a  >and<a className='sgncndt' href=''> Conditions</a></p>

               </div>
              
            </div>
            <div>
               <img src={Divider} className="divider" alt="divider" />
               </div>
               <div className='socials'>
               <a> <img src={Google} className="goo" alt="divider" /></a>
               <a> <img src={Twitter} className="twi" alt="divider" /></a>

               </div>
            </div>

            

            {/* <button onClick={continueToNextPage}>Proceed</button> */} 
            

        </div>


    );
}

export default Login;