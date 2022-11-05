import React from 'react'
import '../Blog/blog.css'

export const Blog = ({ src, title, desc }) => {
    return (
        <div className='blog'>
            <img src={src} />
            <h1>{title}</h1>
            <div className='line'></div>
            <p className='desc'>{desc}</p>
        </div>
    )
}
