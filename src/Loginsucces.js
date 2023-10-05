import { useNavigate } from 'react-router-dom';
import OnbImg from './Images/Login-img.png'
import Succrt from './Images/pwd-created.png'




function UserProfile() {

    const navigate = useNavigate();

    const continueToNextPage = () => {
        navigate('/'); // Navigate to the desired page
    };

    return (
        <div className='usrpr'>
            <div >
                <img src={OnbImg} className="leftonb-img" alt="img" />
            </div>

            <div className="usr-contsuc">
            <img src={Succrt} className="pwd-suc" alt="img" />

                <h4 className='txt-cpwd' > Login Successful  </h4>
                <p className='txt-pcpwd'>You are just a step closer to your seamless experience</p>
                

                

                   <button className='usr-btncrets' onClick={continueToNextPage} >Proceed to Shopping</button>
                 

            </div>


        </div>
    );
}

export default UserProfile;