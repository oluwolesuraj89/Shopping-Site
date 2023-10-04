import React from 'react'
import SummaryRice from '../Images/SummaryRice.png';
// import { useNavigate } from 'react-router-dom'

 const Checkout = () => {
    // let navigate = useNavigate()
    // const Home = () =>{
    //     navigate('/')
    // }
    // const Fruit = () =>{
    //     navigate('/Fruit')
    // }
    // const Checkout = () =>{
    //     navigate('/Checkout')
    // }

  return (
    <div className='body'>
        <div className='main'>
            <div className='option-btns'>
                <button >Home</button>
                <span>/</span>
                <button >Fruits</button>
                <span>/</span>
                <button onClick={Checkout}>Checkout</button>
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
export default Checkout