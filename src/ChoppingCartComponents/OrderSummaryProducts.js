import React from 'react'
import SummaryRice from '../Images/SummaryRice.png';

export const OrderSummaryProducts = () => {
  return (
    <div>
      
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

    </div>
  )
}
