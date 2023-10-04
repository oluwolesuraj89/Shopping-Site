import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Pepper from '../Images/Pepper.png';
import Beans from '../Images/Beans.png';
import Rice from '../Images/Rice.png';
import Garri from '../Images/Garri.png';
import Ewedu from '../Images/Ewedu.png';

export const Productdetails = () => {

    let navigate = useNavigate()

    const Home = () =>{
        navigate('/')
    }
    const Fruit =() =>{
        navigate('/Products')
    }
    
    return (
        <div className='body'>
            <div className='main productdetails'>
                <div className='option-btns'>
                    <button onClick={Home}>Home</button>
                    <span>/</span>
                    <button onClick={Fruit}>Fruits</button>
                    <span>/</span>
                    <button>Pepper</button>
                </div>
                <div className='container'>
                    {/* <div className='img'> */}
                        <img src={Pepper} alt='Fruits'/>
                    {/* </div> */}
                    <div className='details'>
                        <div>
                            <h1>Pepper (Ata rodo)</h1>
                            <p>Description: Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low '77 Vintage returns with its low-profile style and heritage b-ball looks.</p>
                            <span className='star-details'>
                                <div id='solid-stars'>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </div>
                                (91)
                            </span>
                        </div>
                        <div id='Price-section'>
                            <h3 id='price'>$ 190.20 per basket</h3>
                            <p>Suggestion: you can divide the basket into two</p>
                        </div>
                        {/* <hr/> */}
                        <div id='quantity-section'>
                            <h4>Quantity</h4>
                            <div className='AddSubtract-section'>
                                <div className='buttons'>
                                    <button id='subtract'><i class='bx bx-minus'></i></button>
                                    <input type='text' placeholder='1'/>
                                    <button id='add'><i class='bx bx-plus'></i></button>
                                </div>
                                <p>Only <span>12 Items</span> Left! <br/> Don’t miss it</p>
                            </div>
                        </div>
                        <div className='buyNow-addToCart'>
                            <button id='buy-now'>Buy Now</button>
                            <button id='AddToCart'>Add To Cart</button>
                        </div>
                        <div id='FreeDelivery'>
                            <i class='bx bx-store'></i>
                            <div id='FreeDelivery-Contents'>
                                <h4>Free Delivery</h4>
                                <p>Enter your Postal Code for Delivery Availability</p>
                            </div>
                        </div>

                    </div>
                </div>
    
                {/* Similar Items You Might Like */}
                <div className='popularSection Similar-Items'>
                <div className='popular'>
                    <h1>Similar Items You Might Like</h1>
                    {/* <button className='viewMore'>
                    View more 
                    <i className='fa fa-angle-down'></i>
                    </button> */}
                </div>
                <div className='popularImgs'>
                    <div className='img1'>
                    <img src={Rice} alt='Ric'/>
                    <div>
                    <h4>Court Heels</h4>
                    <h4><small>$</small>95<small>.00</small></h4>
                    </div>
                    <p>Red Silettos</p>
                    <span className='star-details'>
                        <div id='solid-stars'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                        (91)
                    </span>
                    <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
                    </div>
                    <div className='img1'>
                    <img src={Beans} alt='Ric'/>
                    <div>
                    <h4>Court Heels</h4>
                    <h4><small>$</small>95<small>.00</small></h4>
                    </div>
                    <p>Red Silettos</p>
                    <span className='star-details'>
                        <div id='solid-stars'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                        (91)
                    </span>
                    <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
                    </div>
                    <div className='img1'>
                    <img src={Garri} alt='Ric'/>
                    <div>
                    <h4>Court Heels</h4>
                    <h4><small>$</small>95<small>.00</small></h4>
                    </div>
                    <p>Red Silettos</p>
                    <span className='star-details'>
                        <div id='solid-stars'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                        (91)
                    </span>
                    <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
                    </div>
                    <div className='img1'>
                    <img src={Ewedu} alt='Ric'/>
                    <div>
                    <h4>Court Heels</h4>
                    <h4><small>$</small>95<small>.00</small></h4>
                    </div>
                    <p>Red Silettos</p>
                    <span className='star-details'>
                        <div id='solid-stars'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                        (91)
                    </span>
                    <button className='addToCart'><i className='bx bx-cart'></i> Add to Cart</button>
                    </div>
                    
                </div>
                </div>
            </div>
            
        </div>
    )
}
 