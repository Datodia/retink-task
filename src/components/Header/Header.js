import React from 'react'
import '../Header/header.css'
import { Auth, Text } from '../Auth/Auth'
// import logo from '/logo.svg'

export const Header = () => {
    return (
        <div className='header'>
            <img className='logoImg' src='/assets/logo.svg' />
            <div className='titles'>
                <h1 className='title' >Get Advanced AI
                    + Expert Created</h1>
                <h1 className='logo'>Logos</h1>
            </div>
            <p>
                Boost your sales 10x faster with content customized by our unique partnership of human creativity and AI optimization
            </p>
            <Auth />
            <img className='avatar' src='/assets/avatar.png' />
        </div>

    )
}
