import React from 'react'
import SummaryRice from '../Images/SummaryRice.png';
import { Mininavthree } from '../ChoppingCartComponents/Mininavthree';
import { OrderSummaryProducts } from '../ChoppingCartComponents/OrderSummaryProducts';
import { Deliveryinfomation } from '../ChoppingCartComponents/Deliveryinfomation';
import { Paymentinformation } from '../ChoppingCartComponents/Paymentinformation';
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
            <div id='CheckoutMininavthree'>
                <Mininavthree />
            </div>
            <div className='Checkout'>
                <div>
                    <OrderSummaryProducts/>
                    <Deliveryinfomation/>
                <div className='pickInStore deliveryInfo'>
                    <span>
                        <i class='bx bx-circle'></i>
                        <h2>Pick in store</h2>
                    </span>
                    <i className='fa fa-angle-down'></i>
                </div>
                    </div>
                    <Paymentinformation/>          
            </div>
            
        </div>
    </div>
  )
}
export default Checkout