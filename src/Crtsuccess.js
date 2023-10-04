import { useNavigate } from 'react-router-dom';
import OnbImg from './Images/pwd-crte-img.png'
import Succrt from './Images/pwd-created.png'




function UserProfile() {
    const navigate = useNavigate();

    const continueToNextPage = () => {
        navigate('/Login'); // Navigate to the desired page
    };

    return (
        <div className='usrpr'>
            <div >
                <img src={OnbImg} className="leftonb-img" alt="img" />
            </div>

            <div className="usr-cont">
            <img src={Succrt} className="pwd-suc" alt="img" />

                <h4 className='txt-cpwd' > Password Created <span className='suc-va'>Successfully</span> </h4>
                <p className='txt-pcpwd'>You are just a step closer to your seamless experience</p>
                

                

                   <button className='usr-btncrets' onClick={continueToNextPage} >Proceed to Login</button>
                 

            </div>


        </div>
    );
}

export default UserProfile;