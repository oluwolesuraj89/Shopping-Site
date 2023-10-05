import { useNavigate } from 'react-router-dom';
import OnbImg from './Images/onb-img.png'
import Imgframe from './Images/img-frame.png'
import Imgicon from './Images/img-icon.png'



function UserProfile() {
    const navigate = useNavigate();

    const continueToNextPage = () => {
        navigate('/Createpwd'); // Navigate to the desired page
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
                <img src={Imgframe} className="frame-img" alt="img" />
                <img src={Imgicon} className="img-icon" alt="img" />

                <form>
                    <span className="usr-fn">Full Name</span>
                    <br></br>
                    <input type="text" className="usr-input" placeholder="Mark Ekpobiyere" />
                    <span className="usr-fn">Address</span>
                    <br></br>
                    <input type="text" className="usr-input" placeholder="Lagos Abeokuta express way, Obada Ogun State" />
                    <span className="usr-fn">Email</span>
                    <br></br>
                    <input type="text" className="usr-input" placeholder="markekpobiyere@gmail.com" />
                    <span className="usr-fn">State</span>
                    <br></br>
                    <input type="text" className="usr-input" placeholder=" Ogun State" />
                    <span className="usr-fn">Phone Number</span>
                    <br></br>
                    <input type="text" className="usr-input" placeholder="+2349060606060" />

                </form>

                   <button  className='usr-btn' onClick={continueToNextPage} >Proceed</button>
                 

            </div>


        </div>
    );
}

export default UserProfile;