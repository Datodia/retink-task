import React, { useState } from 'react'
import '../Header/header.css'
import { Auth } from '../Auth/Auth'
import { Authentication } from '../Authentication/Authentication'

export const Header = () => {

    const [move, setMove] = useState(600)
    const [up, setUp] = useState(10)
    const mouseOver = (e) => {
        setMove(e.pageX)
        setUp(e.pageY)
    }

    const names = ['Logos ', 'Resumes ', 'Newslatters ', 'Ads & More ']
    return (
        <div className='header'>
            <img className='logoImg' src='/assets/logo.svg' />
            <Authentication />
            <div className='titles'>
                <h1 className='title' >Get Advanced AI
                    + Expert Created</h1>
                <h1 className='logo'><marquee scrolldelay="120" width="300px" height="70px" direction="up">{names.map(e => e)}</marquee >  </h1>
            </div>
            <p>
                Boost your sales 10x faster with content customized by our unique partnership of human creativity and AI optimization
            </p>
            <Auth />
            <img onMouseMove={mouseOver} style={{ left: (move / 13) + 700, top: (up / 13) - 600 }} className='avatar' src='/assets/avatar.png' />

        </div>
    )
}
