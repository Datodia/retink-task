import React from 'react'
import '../Card/card.css'

export const Card = ({ title, desc, src }) => {
    return (
        <div className='card'>
            <img src={src} />
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}
