import React from 'react'

export const Deliveryinfomation = () => {
  return (
    <div className='deliveryInfo'>
        <div className='headding'>
            <span>
                <i class='bx bx-circle'></i>
                <h2>Delivery Information</h2>
            </span>
            <span id='yellow'>
                <i class='bx bxs-edit'></i>
                <p id='yellow'>Edit</p>
            </span>
        </div>
        <div className='content'>
            <h4>Alexandra McPherson</h4>
            <span>
                <i class='bx bx-map-alt'></i>
                <p>20386 Donovans Rd, Georgetown, Delaware(DE)</p>
            </span>
            <span>
                <i class='bx bx-phone'></i>
                <p>+1 23455246337</p>
            </span>
            <span>
                <i class='bx bx-envelope'></i>
                <p>Mark Ekpobiyere Efeokwo@email.com</p>
            </span>
        </div>
    </div>
  )
}
