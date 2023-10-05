import React, {useState} from 'react'
import Atarodo from '../Images/Atarodo.png';
import { Cartdetails } from './Cartdetails';
import { Navigate, useNavigate } from 'react-router-dom';
import { OrderSummaryProducts } from '../ChoppingCartComponents/OrderSummaryProducts';
import { Mininavs, Mininavthree } from '../ChoppingCartComponents/Mininavthree';
import { Paymentinformation } from '../ChoppingCartComponents/Paymentinformation';
import { Deliveryinfomation } from '../ChoppingCartComponents/Deliveryinfomation';

// import SummaryRice from '../Images/SummaryRice.png';

export const Choppingcart = () => {
    const [count, setCount] = useState(1)

    let Navigate = useNavigate()
    
    const handleCount = () => {
        setCount(count + 1)
    }
    const handleLessCount = () => {
        setCount(count - 1)
    }
    const Checkout = () =>{
        Navigate('/Checkout')
    }
    return (
        <div className='body'>
            <div className='main'>
                <div className='Cart-container'>
                    <div></div>
                    <div className='mainCart'>
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
                                            <button onClick={handleLessCount} id='subtract'><i class='bx bx-minus'></i></button>
                                            <input type='text' placeholder={count}/>

                                            <button onClick={handleCount} id='add'><i class='bx bx-plus'></i></button>
                                        </div>
                                        <button ><i class='bx bx-trash'></i></button>
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
                </div>

                {/* Check out  */}
                <Mininavthree/>
                
                
            </div>
        </div>
    )
}
