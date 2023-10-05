import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import OnbImg from './Images/login.png'
import Divider from './Images/Divider.png'
import GoogleIcon from './Images/GoogleIcon.png';
import TwitterIcon from './Images/TwitterIcon.png';
import axios from 'axios';
import ActivityIndicator from './Components/AcitivityIndicator';
import Swal from 'sweetalert2';


const Login = () => {
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [error, setError] = useState({});
const [errorMessage, setErrorMessage] = useState('');
const [password, setPassword] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [termsSelected, setTermsSelected] = useState(false);

const handleCheckboxChange = (e) => {
    setTermsSelected(e.target.checked);
  };



useEffect(() => {
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, []);


const handleLogin = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const response = await axios.post('https://gtc.ogunstate.gov.ng/api/login', {
        email: email,
        password: password,
      });
      // Handle the response here (e.g., set user session, redirect)
      console.log('Login successful', response.data);
      setEmail('');
      setPassword('');
      // Redirect to the desired page AFTER handling the response
      navigate('/LoginSuccessful');
    } catch (error) {
        const errorMessage = JSON.stringify(error.response?.data?.message || 'An error occurred');
        setErrorMessage(errorMessage);
      // Handle errors (e.g., display error message)
      console.error('Login failed', error);
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Login failed',
    //     text: error.response.data.message,
    //   });
  
    } finally {
      setIsLoading(false); // Set loading state back to false after handling the request
    }
  };

  const isButtonDisabled = !email || !password;

    // const continueToNextPage = () => {
    //   navigate('/Loginsucces');
    // };

    
    const navigateToSignup = () => {
        navigate('/Signup');  
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
                <h4 className='txt-h4' >Welcome back!</h4>
                <p className='txt-p'>Don't have an account? <a className='anclog' onClick={navigateToSignup} style={{ cursor: 'pointer' }}>Sign Up </a></p>

             <form>
                <span className="st-id">Email Address</span>
                <br></br>
                <input type="text" className="sn-input" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <span className="st-id">Password</span>
                <br></br>
                <input type="text" className="sn-input" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}/>
             </form>
              {/* <button className='sgn-btn'> Proceed </button> */}
              <button className='sgn-btn' disabled={isButtonDisabled} style={{ backgroundColor: isButtonDisabled ? 'gray' : '#2F945C', border: isButtonDisabled ? "1.5px solid gray" : "1.5px solid #2f945c"  }} onClick={handleLogin}> {isLoading ? <ActivityIndicator /> : 'Proceed'}</button>
            <div className='tandc'>
                <div>
               <input checked={termsSelected} onChange={handleCheckboxChange} type='checkbox' className='tandc-radio'></input></div>
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


            

            {/* <button onClick={continueToNextPage}>Proceed</button> */} 
            

        </div>


    );
}

export default Login;