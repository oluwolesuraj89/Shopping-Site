import React from 'react';
import { useNavigate } from 'react-router-dom';
import OnbImg from '../Images/onb-img.png';
import Divider from '../Images/Divider.png';
import GoogleIcon from '../Images/GoogleIcon.png';
import TwitterIcon from '../Images/TwitterIcon.png';


const SignUp = () => {
const navigate = useNavigate();
  
    const continueToNextPage = () => {
      navigate('/UserProfile');  
    };

    const navigateToLogin = () => {
        navigate('/Login');  
      };

    return (
        <div className='signup'>
            <div className='TheImg'>
                <img src={OnbImg} className="leftonb-img" alt="img" />
            </div>

            <div className="sign-cont">
                <h4 className='txt-h4' >Sign up!</h4>
                <p className='txt-p'>You have an account already? <a className='anclog' onClick={navigateToLogin}>Login </a></p>

             <form>
                <span className="st-id">OGIRS Number</span>
                <br></br>
                <input type="phone" className="sn-input" placeholder="" />
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
                <div className='socialBx google'>
                    <img src={GoogleIcon} alt='GoogleIcon'/>
                    <h5>Google</h5>
                </div>
                <div className='socialBx google'>
                    <img src={TwitterIcon} alt='TwitterIcon'/>
                    <h5>Twitter</h5>
                </div>
               </div>
            </div>

            

            

        </div>


    );
}

export default SignUp;