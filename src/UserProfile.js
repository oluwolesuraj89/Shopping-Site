import { useNavigate } from 'react-router-dom';
import OnbImg from './Images/onb-img.png'
import Imgframe from './Images/img-frame.png'
import Imgicon from './Images/img-icon.png'



function UserProfile() {
    const navigate = useNavigate();

    const Proceed = () => {
        navigate('/PassWordSuccessfull'); // Navigate to the desired page
    };

    const navigateToLogin = () => {
        navigate('/Login');  
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
                        <span className="usr-fn">Full Name</span><br/>
                        <input type="text" className="usr-input" placeholder="Enter your full name" />
                    </div>
                    <div>
                        <span className="usr-fn">Address</span><br/>
                        <input type="text" className="usr-input" placeholder="Enter your address" />
                    </div>
                    <div>
                        <span className="usr-fn">Email</span><br/>
                        <input type="text" className="usr-input" placeholder=" Enter your valid email" />
                    </div>
                    <div>
                        <span className="usr-fn">State</span><br/>
                        <input type="text" className="usr-input" placeholder=" Enter your mail" />
                    </div>
                    <div>
                        <label className="usr-fn">Phone Number</label><br/>
                        <input type="text" className="usr-input" placeholder="Enter your phone number" />
                    </div>
                </form>

                   <button  className='usr-btn edit'>Proceed</button>
                   <button  className='usr-btn proceed' onClick={Proceed} >Proceed</button>
                 

            </div>


        </div>
    );
}

export default UserProfile;