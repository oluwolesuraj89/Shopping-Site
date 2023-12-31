import { useNavigate } from 'react-router-dom';
import OnbImg from '../Images/onb-img.png'
import Eyeslash from '../Images/eye-slash.png'
import Eyeslashtu from '../Images/eye-slash2.png'



 export const CreatePassWord = () => {
    const navigate = useNavigate();

    const continueToNextPage = () => {
        navigate('/Crtsuccess'); // Navigate to the desired page
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
                <h4 className='txt-cpwd' >Create Password!</h4>
                <p className='txt-p'>You have an account already? <a className='anclog' onClick={navigateToLogin}>Login </a></p>
                
                <form>
                    <span className="usr-fn">Password</span>
                    <input type="password" className="usr-input" placeholder="" />
                    <span className="usr-fn">Confirm Password</span>
                    <input type="text" className="usr-input" placeholder="" />
                </form>
                   <button className='usr-btn' onClick={continueToNextPage} >Proceed</button>
            </div>
        </div>
    );
}

