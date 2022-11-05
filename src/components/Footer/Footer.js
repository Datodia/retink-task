import React from 'react'
import '../Footer/footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-div'>
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
                        <a href='#'><img src='assets/fb.png' /></a>
                        <a href='#'><img src='assets/Twitter.png' /></a>
                        <a href='#'><img src='assets/Instagram.png' /></a>
                        <a href='#'><img src='assets/Youtube.png' /></a>
                        <a href='#'><img src='assets/LinkedIn.png' /></a>
                        <a href='#'><img src='assets/Pinterest.png' /></a>
                    </div>
                </div>
                <div className='copy'>
                    <div className='copy-div'>
                        <h1>Copyright © {new Date().getFullYear()} Retink</h1>
                        <h1>Terms of Service</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
