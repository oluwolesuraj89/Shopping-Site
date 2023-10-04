import React from 'react'
import Atarodo from '../Images/Atarodo.png';
import { Cartdetails } from './Cartdetails';
import { Navigate, useNavigate } from 'react-router-dom';
import SummaryRice from '../Images/SummaryRice.png';

export const Choppingcart = () => {
    let Navigate = useNavigate()

    const Checkout = () =>{
        Navigate('/Checkout')
    }
    return (
        <div className='body'>
            <div className='main'>
                <div className='Cart-container'>
                    <div className='my-cart'>
                        <span>
                            <h1>My Cart</h1>
                            <input type='text' placeholder='3'/>
                        </span>
                        <button><i class='bx bx-x'></i></button>
                    </div> 
                    <div className='cartdetails-container'>
                    {/* <Cartdetails/> */}
                        <div className='cart-details'>
                            <img src={Atarodo} alt='Pepper'/>  
                            <div id='content'>
                                <div id='h4'>
                                    <h4>Pepper Atarodo </h4>
                                    <h4> <small>N</small> 1500</h4>
                                </div>
                                    <p>Qty : Black</p>
                                <div className='Btns'>
                                    <div className='main-btns'>
                                        <button id='subtract'><i class='bx bx-minus'></i></button>
                                        <input type='text' placeholder='1'/>
                                        <button id='add'><i class='bx bx-plus'></i></button>
                                    </div>
                                    <button><i class='bx bx-trash'></i></button>
                                </div>
                            </div>
                        </div>   

                        <div className='cart-details'>
                            <img src={Atarodo} alt='Pepper'/>
                            <div id='content'>
                                <div id='h4'>
                                    <h4>Nike Air Max 97 SE </h4>
                                    <h4> <small>N</small> 1500</h4>
                                </div>
                                    <p>Color : White & Pink</p>
                                <div className='Btns'>
                                    <div className='main-btns'>
                                        <button id='subtract'><i class='bx bx-minus'></i></button>
                                        <input type='text' placeholder='1'/>
                                        <button id='add'><i class='bx bx-plus'></i></button>
                                    </div>
                                    <button><i class='bx bx-trash'></i></button>
                                </div>
                            </div>
                        </div>  

                        <div className='cart-details'>
                            <img src={Atarodo} alt='Pepper'/>
                            <div id='content'>
                                <div id='h4'>
                                    <h4>Nike Basketball <br/> Shoes</h4>
                                    <h4> <small>N</small> 1500</h4>
                                </div>
                                    <p>Color : Orange</p>
                                <div className='Btns'>
                                    <div className='main-btns'>
                                        <button id='subtract'><i class='bx bx-minus'></i></button>
                                        <input type='text' placeholder='1'/>
                                        <button id='add'><i class='bx bx-plus'></i></button>
                                    </div>
                                    <button><i class='bx bx-trash'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>  

                    <div id='subtotal'>
                        <p>subtotal</p>
                        <h4> <small>N</small> 1500<small>.00</small></h4>
                    </div>
                    <button onClick={Checkout} className='checkout'>Checkout</button>

                </div>

                {/* Check out  */}
                <div className='option-btns'>
                    <button onClick={''}>Home</button>
                    <span>/</span>
                    <button onClick={''}>Fruits</button>
                    <span>/</span>
                    <button onClick={Checkout}>Checkout</button>
                </div>

                <div className='Checkout'>
                    <div className='orderSummary'> 
                        <div className='my-cart'>
                            <span>
                                <h1>Oder Summary</h1>
                                <input type='text' placeholder='2'/>
                            </span>
                        </div>
                        <div className='ProductInfo'>
                            <img src={SummaryRice} alt='Bag Of Rice'/>
                            <div className='mainDetails'>
                                <div>
                                    <h4>Bag of rice</h4>
                                    <p>Qty:1</p>
                                </div>

                                <div className='price'>
                                    <h4>$150.32</h4>
                                </div>
                            </div>    
                        </div>

                        <div className='ProductInfo'>
                            <img src={SummaryRice} alt='Bag Of Rice'/>
                            <div className='mainDetails'>
                                <div>
                                    <h4>Nike Air Max Correlate</h4>
                                    <p>Color : Black</p>
                                    <p>Size: 41</p>
                                </div>

                                <div className='price'>
                                    <h4>$150.32</h4>
                                </div>
                            </div>    
                        </div>

                        <div className='ProductInfo'>
                            <img src={SummaryRice} alt='Bag Of Rice'/>
                            <div className='mainDetails'>
                                <div>
                                    <h4>Nike Air Max Correlate</h4>
                                    <p>Color : Black</p>
                                    <p>Size: 41</p>
                                </div>

                                <div className='price'>
                                    <h4>$150.32</h4>
                                </div>
                            </div>    
                        </div>
                        
                    </div>
                    
                    {/* <div> */}
                        <div className='PaymentInfo'>
                            <h3>Payment Information</h3>
                            <h4>Apply Discount</h4>
                        
                            <div className='inputs'>
                                <input type='text' placeholder='Enter Coupon Code'/>
                                <button>Apply</button>
                            </div>
                            <div className='paymentOptions'>
                                <h4>Pay With</h4>
                                <div id='depositDetails'>
                                    <div>
                                        <i class='bx bx-stop-circle'></i>
                                        <p>Debit or Credit Card</p>
                                    </div>
                                    <div>
                                        <i class='bx bx-radio-circle'></i>
                                        <p>Pay on Delivery</p>
                                    </div>
                                </div>
                            </div>
                            <form>
                                <h4>Enter Card Information</h4>
                                <span>
                                    <label>Cardholder Name</label>
                                    <input  type='text' id='inputs'
                                    placeholder='Alexandra McPherson Grey'/>
                                </span>

                                <sapn>
                                    <label>Card Number</label>
                                    <input id='cardholder' type='text' 
                                    placeholder='5061 2345 6789 1234'/>
                                </sapn>

                                <div className='Card-details'>
                                    <div id='Expir'>
                                        <lablel>Expiry Date</lablel>
                                        <div className='cardInfo date' id='inputs'>
                                            <input type='text' placeholder='09/2024'/>
                                            <i class='bx bx-calendar'></i>
                                        </div>
                                    </div>
                                    
                                    <div className='CVV'>
                                        <lablel>CVV</lablel>
                                        <div className='cardInfo pin' id='inputs'>
                                            <input type='text'  placeholder='123'/>
                                            <i class='bx bx-lock'></i>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className='paymentDetails'>
                                    <div>
                                        <p>Sub Total</p>
                                        <p>$549.00</p>
                                    </div>
                                    <div>
                                        <p>Tax (10%)</p>
                                        <p>$54.00</p>
                                    </div>
                                    <div>
                                        <p>Shopping</p>
                                        <p>$0.00</p>
                                    </div>
                                </div>
                                <div className='total'>
                                    <p>Total</p>
                                    <span>$250.32</span>
                                </div>
                                <button id='pay'>Pay $250.32</button>
                            </div>
                    {/* </div> */}
                </div>
                
            </div>
        </div>
    )
}
