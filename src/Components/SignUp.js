import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import OnbImg from '../Images/onb-img.png';
import Divider from '../Images/Divider.png';
import GoogleIcon from '../Images/GoogleIcon.png';
import TwitterIcon from '../Images/TwitterIcon.png';
import axios from 'axios';
import ActivityIndicator from './AcitivityIndicator';
import Swal from 'sweetalert2';



const SignUp = () => {
const navigate = useNavigate();
const [ogirs, setOGIRS] = useState('');
const [staff, setStaff] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState('');


  
const isButtonDisabled = !ogirs;

    const continueToNextPage = () => {
      navigate('/UserProfile');  
    };

    const HandleCheckOg = async () => {
        setIsLoading(true);
      
        try {
          const response = await axios.get('https://gtc.ogunstate.gov.ng/api/fetch-staff-record', {
            params: {
              og_number: ogirs,
            },
          });
      
          setOGIRS('');
          const staffDetails = response.data?.data;
        //   console.log(staffDetails)
          // Use history.push to navigate and pass data as state
          navigate('/UserProfile', { state: { staffDetails } });
      
        //   console.log('Success:', response.data?.data?.firstName);
          setStaff(staffDetails);
         
        } catch (error) {
          // Handle error response
          const errorMessage = error.response?.data?.message;
          setErrorMessage(errorMessage);
          console.log('Error:', error.response?.data?.message);
        } finally {
          setIsLoading(false);
        }
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
            {errorMessage ? (
  <div className="error-message">
    {errorMessage}
  </div>
) : null}

                <h4 className='txt-h4' >Sign up!</h4>
                <p className='txt-p'>You have an account already? <a className='anclog' onClick={navigateToLogin} style={{ cursor: 'pointer' }}>Login </a></p>

             <form>
                <span className="st-id">OG Number</span>
                <br></br>
                <input type="phone" className="sn-input" placeholder="" onChange={(e) => setOGIRS(e.target.value)}/>
             </form>
              {/* <button className='sgn-btn'> Proceed </button> */}
              <button className='sgn-btn' disabled={isButtonDisabled} style={{ backgroundColor: isButtonDisabled ? 'gray' : '#2F945C', border: isButtonDisabled ? "1.5px solid gray" : "1.5px solid #2f945c"  }} onClick={HandleCheckOg}>{isLoading ? <ActivityIndicator /> : 'Proceed'}</button>
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