import React from 'react'
import '../Footer/footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='about'>
                <img src='assets/logo.svg' />
                <div className='about-link'>
                    <div className='left'>
                        <h1>Product by Retink Media UG</h1>
                        <h1>Bonn, Germany</h1>
                    </div>
                    <div className='right'>
                        <h1>Get Early Acess</h1>
                        <h1>Provide Feedback</h1>
                    </div>
                </div>
            </div>
            <div className='social'>
                <h1>Connect with Us</h1>
                <div className='soc-netw'>
                    <a href='#'><img /></a>
                </div>
            </div>
        </div>
    )
}
