import Heroimg from './Images/hero-img.png'
import Brand from './Images/brands.png'
import Plus from './Images/plus-icon.png'
import Categoryleft from './Images/left-img-cat.png'
import Categoryrightt from './Images/right-top-cat.png'
import Categoryrightb from './Images/right-bottom-cat.png'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div className="home">
            {/* <Navbar /> */}
            <img src={Heroimg} className="hero-img" alt="hero-img" />
            <p className='brandstxt'> Brands </p>
            <img src={Brand} className="brands" alt="brands" />

            <div className='cat-cat'>
                <div id='cattxt' >
                    <p className='cattxt'> Categories </p>
                </div>
                <div className='viewall-txt'>
                    <p className='viewalltxt'> View all </p>
                    <img src={Plus} className="plus-icon" alt="plus" />
                </div>
            </div>

            <div className='catimg-main' >
                <div className='catimg-left' >
                    <img src={Categoryleft} className="cat-left" alt="cat-left" />
                </div>
                <div className='catimg-right'>
                    <img src={Categoryrightt} className="cat-rtop" alt="cat-rtop" />
                    <img src={Categoryrightb} className="cat-rbottom" alt="cat-rbottom" />
                </div>
            </div>
        </div>
    );
}

export default Home;