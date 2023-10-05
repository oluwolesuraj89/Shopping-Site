import Logo from './Images/logo.png'
import Cart from './Images/cart.png'
import Heart from './Images/heart.png'
import Vslash from './Images/v-slash.png'
import Phone from './Images/phone.png'
import Dropdown from './Images/dropdwn-icon.png'
import Flag from './Images/flag-nigeria.png'
import Search from './Images/search.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='header-top'>
                <div className='header-top-left' >
                    <img src={Phone} className="phone" alt="phone" />
                    <p className='phonenumber'>+234 706 5292 789</p>
                </div>
                <div className='header-top-center'>
                    <p>Get 50% Off on selected items</p>
                    <img src={Vslash} className="slash" alt="slash" />
                    <p className='shp-nw'>Shop Now</p>
                </div>
                <div className='header-top-right'>
                    <div className='eng'><p id='headr' >EN</p>
                        <img src={Dropdown} className="dropdwn" id='headr' alt="dropdwn" />
                    </div>
                    <img src={Flag} className="flag" id='headr' alt="flag" />
                    <div className='nig'>
                        <p id='headr' >Nigeria</p>
                        <img src={Dropdown} className="dropdwn" id='headr' alt="dropdwn" />
                    </div>
                </div>
            </div>
            <div className="subhead">
                <div className="subhead-left">
                    <img src={Logo} className="logo" alt="logo" />

                    <a href="/">Fruits</a>
                    <a href="/">Vegetables</a>
                    <a href="/">Grains</a>
                </div>
                <div className="subhead-center">

                    <div className='search-container'>
                        <input type="text" className='plchldr-search' placeholder="Search here..." />
                        <div className='search-icon'>
                            <img src={Search} className="search-icon" alt="search-icon" />
                        </div>
                    </div>
                </div>
                <div className='subhead-right'>
                    <img src={Heart} id='rght' className="heart" alt="heartIcon" />
                    <img src={Cart} className="cart" id='rght' alt="cartIcon" />

                    <button className='btn-rght'>Login</button>
                    <button className='rght'>Sign up</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;