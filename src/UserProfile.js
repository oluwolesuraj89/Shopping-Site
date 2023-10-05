import { useNavigate } from 'react-router-dom';
import OnbImg from './Images/onb-img.png'
import Imgframe from './Images/img-frame.png'
import Imgicon from './Images/img-icon.png'
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ActivityIndicator from './Components/AcitivityIndicator';



function UserProfile({ route }) {
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [ogNumber, setOgNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const location = useLocation();
  const staffDetails = location.state?.staffDetails;



    const continueToNextPage = () => {
        navigate('/Createpwd'); // Navigate to the desired page
    };

    const navigateToLogin = () => {
        navigate('/Login');
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        setPasswordMatch(text === confirmPassword);
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
        setPasswordMatch(text === password);
    };

    const isButtonDisabled = email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || email.trim() === '' || phone.trim() === '';

    const HandleRegister = async () => {
        setIsLoading(true);
        console.log(password, confirmPassword, email, phone, ogNumber, address);
        try {
           
                const response = await axios.post('https://gtc.ogunstate.gov.ng/api/register', {
                    password: password,
                    confirm_password: confirmPassword,
                    email: email,
                    phone: phone,
                    og_number: staffDetails.ogNumber,
                    address: address
                });

                navigate('/SignupSuccess');
                console.log(response.data.message);

                
              

                // Clear input fields after successful registration
                setEmail('');
                setPhone('');
                setPassword('');
                setConfirmPassword('');
          
        } catch (error) {
            // Handle error response
            const errorMessage = JSON.stringify(error.response?.data?.message || 'An error occurred');
            // Alert.alert('Failed', errorMessage);
            console.log('Error:', error.response?.data?.message);
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <div className='usrpr'>
            <div >
                <img src={OnbImg} className="leftonb-img" alt="img" />
            </div>

            <div className="usr-cont">
                <h4 className='txt-usr' >User Profile!</h4>
                <p className='txt-p'>You have an account already? <a className='anclog' onClick={navigateToLogin}>Login </a></p>
                <div className='profile'>
                    <div id='profilePic-cont'></div>
                    <img src={Imgicon} className="img-icon" alt="img" />
                </div>

                <form>
                    <div>
                        <span className="usr-fn">First Name</span><br />
                        <input type="text" className="usr-input" placeholder="Enter your first name" value={staffDetails.firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <span className="usr-fn">Last Name</span><br />
                        <input type="text" className="usr-input" placeholder="Enter your last name" value={staffDetails.lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div>
                        <span className="usr-fn">OG Number</span><br />
                        <input type="text" className="usr-input" placeholder="Enter your Og number" value={staffDetails.ogNumber} onChange={(e) => setOgNumber(e.target.value)}/>
                    </div>
                    <div>
                        <span className="usr-fn">Password</span><br />
                        <input type="text" className="usr-input" placeholder="Create your password" value={password} onChange={(e) => handlePasswordChange(e.target.value)}/>
                    </div>
                    <div>
                        <span className="usr-fn">Confirm Password</span><br />
                        <input type="text" className="usr-input" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => handleConfirmPasswordChange(e.target.value)}/>
                    </div>
                    {!passwordMatch && 
                    <div style={{marginLeft: 90, marginTop: -25, color: "#F64E60"}}>Passwords do not match</div>}
                    

                    <div>
                        <span className="usr-fn">Address</span><br />
                        <input type="text" className="usr-input" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <div>
                        <span className="usr-fn">Email</span><br />
                        <input type="text" className="usr-input" placeholder=" Enter your valid email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                   
                    <div>
                        <label className="usr-fn">Phone Number</label><br />
                        <input type="text" className="usr-input" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                </form>
                
                    <button disabled={isButtonDisabled} style={{ backgroundColor: isButtonDisabled ? 'gray' : '#2F945C', border: isButtonDisabled ? "1.5px solid gray" : "1.5px solid #2f945c"  }} className='usr-btn proceed' onClick={HandleRegister}>{isLoading ? <ActivityIndicator /> : 'Proceed'}</button>
     

            </div>


        </div>
    );
}

export default UserProfile;