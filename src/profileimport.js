import Navbar from './Navbar';
import React from 'react';
import Gradbg from './images/gradient-bg.jpg';
import Gradimg from './images/grad-img.png';

const Profile = () => {
    return (
        <div>
            <Navbar />
                   <div>          
                    <img src={Gradbg} className="grad-bg" alt="bg" /> 
                    <img src={Gradimg} className="grad-img" alt="img-frame" /> 
                    <div>
                        <h2>Mark Lyrics</h2>
                        <p>marklyrics@gmail.com</p>
                    </div>
                    </div>


        </div>
    );
}

export default Profile;
