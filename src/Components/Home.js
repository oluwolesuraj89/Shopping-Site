import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Adidas from '../Images/Adidas.png'
import Nike from '../Images/Nike.png'
import NorthFace from '../Images/NorthFace.png'
import cart from '../Emogies/cart.png';
import Arival from '../Emogies/Arival.png';
import head from '../Emogies/head.png';
import shipping from '../Emogies/shipping.png';
import Arrow from '../Emogies/icon/arrow-up-right.png';
import stars from '../Emogies/stars.png';
import Rice from '../Images/Rice.png';
import Beans from '../Images/Beans.png';
import Garri from '../Images/Garri.png';
import Ewedu from '../Images/Ewedu.png';
import Fruits from '../Images/FruitPackages.png';
import Layout from './Layout';



export const Home = () => {

  // const navigate = useNavigate();

  // const Home = () =>{
      // navigate('/Home')
  // }
  return (
    <Layout>
      <div className='body'>
        <div className='main'>
          <div className='hero-background'>
            <div id='contents'>
              <div  className='h4'>
                ENDLESS SUMMER SALE
              </div>
              <h4>Up to <span>20% off</span> on all items till <span>September 11</span></h4>
              <button className='shop-now'>Shop now <i className='bx bx-chevron-right'></i> </button>
            </div>
          </div>

            {/* Brands */}
          <div className='brands'>
            <h1>Brands</h1>
            <div className='main-brands'>
              <img src={Adidas} alt='Adidas'/>
              <img src={Nike} alt='Nike'/>
              <img src={NorthFace} alt='NorthFace'/>
              <img src={Adidas} alt='Adidas'/>
              <img src={Nike} alt='Nike'/>
              <img src={NorthFace} alt='NorthFace'/>
            </div>
          </div>

          {/* Categories */}
          <div className='Categories'>
            <div className='content'>
              <h1>Categories</h1>
              <button>View all <i className='bx bx-plus'></i></button>
            </div>
            <div className='Categories-grid'>
              <div className='grids fresh-vegitable'>
                <div className='fast-selling'>Fast Selling</div>
                <div className='fast-selling-content'>
                  <h2>Fresh Vegetables</h2>
                  <p>Raging from Efo, Ewedu, Gbure, Carrots...e.t.c</p>
                  <button className='shop-now'>Shop now <i className='bx bx-chevron-right'></i> </button>
                </div>
              </div>
              <div className='grids grain'>
                <div className='fast-selling-content'>
                  <h2>Grains</h2>
                  <p>Raging from Efo, Ewedu, Gbure, Carrots...e.t.c</p>
                  <button className='shop-now'>Shop now <i className='bx bx-chevron-right'></i> </button>
                </div>
              </div>
              <div className='grids fresh-fruit'>
                <div className='fast-selling-content'>
                  <h2>Fresh Fruits</h2>
                  <p>Raging from Efo, Ewedu, Gbure, Carrots...e.t.c</p>
                  <button className='shop-now'>Shop now <i className='bx bx-chevron-right'></i> </button>
                </div>
              </div>
            </div>
          </div>

          {/* Custormer experience */}
          <div className='custormer-experience'>
            <h1>We provide the <br/>best customer experiences</h1>
            <div className='custorm-experience-details'>
              <div className='contents'>
                <img src={cart} alt='cartImg'/>
                <h4>Fresh Product</h4>
                <p>We ensure money-back guarantee if the product is counterfeit</p>
              </div>
              <div className='contents'>
              <img src={head} alt='head Emogie'/>
                <h4>Fresh Product</h4>
                <p>We ensure money-back guarantee if the product is counterfeit</p>
              </div>
              <div className='contents'>
              <img src={Arival} alt='Arival'/>
                <h4>Fresh Product</h4>
                <p>We ensure money-back guarantee if the product is counterfeit</p>
              </div>
              <div className='contents'>
                <img src={shipping} alt='shipping'/>
                <h4>Fresh Product</h4>
                <p>We ensure money-back guarantee if the product is counterfeit</p>
              </div>
            </div>
          </div>

          {/* grid produts */}
          <div>
            <div className='grid2'>
              <div className='grids container1'>
                <div className='cont discount-lable'>
                  <div className='discount'>UP TO 80% OFF</div>
                  <img src={Arrow} alt='Arrow'/>
                </div>
                <div className='cont grids-content'>
                  <h2>Shops from popular Collection</h2>
                  <button className='shop-now'>Shop now <i className='bx bx-chevron-right'></i> </button>
                </div>
              </div>
              <div className='grids container2'>
                <div className='grids-content'>
                  <div className='discounts h4'>UP TO 20% OFF</div>
                  <h2>Fresh Tomatoes from the farm</h2>
                </div>
              </div>
              <div className='grids container3'>
                <div className='grids-content'>
                  <div className='discounts h4'>UP TO 20% OFF</div>
                  <h2>Fresh Tomatoes from the farm</h2>
                </div>
              </div>
            </div>  
          </div>

          {/* Popular */}
          <div className='popularSection'>
            <div className='popular'>
              <h1>Popular</h1>
              <button className='viewMore'>
                View more 
                <i className='fa fa-angle-down'></i>
              </button>
            </div>
            <div className='popularImgs'>
              <div className='img1'>
                <img src={Rice} alt='Ric'/>
                <div>
                <h4>Court Heels</h4>
                <h4><small>$</small>95<small>.00</small></h4>
                </div>
                <p>Red Silettos</p>
                <span><img src={stars} alt='stars'/> (91)</span><br/>
                <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
              </div>
              <div className='img1'>
                <img src={Beans} alt='Ric'/>
                <div>
                <h4>Court Heels</h4>
                <h4><small>$</small>95<small>.00</small></h4>
                </div>
                <p>Red Silettos</p>
                <span><img src={stars} alt='stars'/> (91)</span><br/>
                <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
              </div>
              <div className='img1'>
                <img src={Garri} alt='Ric'/>
                <div>
                <h4>Court Heels</h4>
                <h4><small>$</small>95<small>.00</small></h4>
                </div>
                <p>Red Silettos</p>
                <span><img src={stars} alt='stars'/> (91)</span><br/>
                <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
              </div>
              <div className='img1'>
                <img src={Ewedu} alt='Ric'/>
                <div>
                <h4>Court Heels</h4>
                <h4><small>$</small>95<small>.00</small></h4>
                </div>
                <p>Red Silettos</p>
                <span><img src={stars} alt='stars'/> (91)</span><br/>
                <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
              </div>
              
            </div>
          </div>

          {/* Footer free delivery  */}
        <div className='freeDeliveryContainer'>
          <div className='content'>
            <h1>Free delivery on <br/> all Lagos Orders</h1>
            <button className='shop-now'>Shop now <i className='bx bx-chevron-right'></i> </button>
          </div>
          <img src={Fruits} alt='fruitPackages'/>
        </div>
        {/* Footer */}
        {/* <div className='footer-container'>
          <div className='footer-content'>
            <p>like what you see?</p>
            <h1>Let’s work together</h1>
            <p>If you’re looking for a kick-ass product design <br/> agency, we’re here to help!</p>
          </div>
          <div className='footer-icons-section'>
            <div className='footer-icons'>
              <i class='bx bxl-facebook-circle facebook'></i>
              <i class='bx bxl-twitter twitter '></i>
              <i class='bx bxl-instagram instagram'></i>
              <i class='bx bxl-linkedin-square linkedin'></i>
            </div>
            <p>© 2023 Rayna. All rights reserved.</p>
            <button onClick={Home} className='footer-btn'>M</button>
          </div> */}
        {/* </div> */}
        </div>
      </div>
    </Layout>
  )
}
