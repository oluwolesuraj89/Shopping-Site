import React from 'react'
import Atarodo from '../Images/Atarodo.png'

export const Cartdetails = () => {
    return (
        <div className='Cart-container'>
            {/* <div className='my-cart'>
                <span>
                    <h1>My Cart</h1>
                    <input type='text' placeholder='3'/>
                </span>
                <button><i class='bx bx-x'></i></button>
            </div>    */}
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
        </div> 
    )
}
