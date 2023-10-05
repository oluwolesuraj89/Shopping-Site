import React from 'react'

export const Paymentinformation = () => {
  return (

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
  )
}
