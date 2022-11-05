import React from 'react'
import { Auth } from '../Auth/Auth'
import { Blog } from '../Blog/Blog'
import { Card } from '../Card/Card'
import '../Middle/middle.css'

export const Middle = () => {
    return (
        <div className='middle'>
            <div className='explain'>
                <h1>EXPLAINER</h1>
                <iframe width={'737px'} height={"418px"} src="https://www.youtube.com/embed/uXWycyeTeCs" ></iframe>
            </div>

            <div className='cards'>
                <Card
                    src={'assets/brain.png'}
                    title={'MakeAI-assisted Content Choices'}
                    desc={'Access and Order from an extensive catalogue in any language and on your budget’s terms. If unsure, our AI guides you to the best.'}
                />
                <Card
                    src={'assets/maintain.png'}
                    title={'Upload and Maintain your Brand Identity'}
                    desc={'Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!'}
                />
                <Card
                    src={'assets/info.png'}
                    title={'Be informed as we create'}
                    desc={'Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.'}
                />
                <Card
                    src={'assets/connect.png'}
                    title={'Receive and Review'}
                    desc={'The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.'}
                />
                <Card
                    src={'assets/monitor.png'}
                    title={'Publish and Monitor your contents’ progress'}
                    desc={'The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.'}
                />
            </div>
            <div className='proces'>
                <h1>Transform your Creation Process</h1>
                <p>With a new approach toordering content, you can now stop juggling multiple documents and meetings and start publishing content faster and on demand</p>
                <h1>Activate your business growth with RetinkContent. </h1>
                <p>Save time and maintain your brand identity within your budget range or sign up for affordable plans and still access multiple content services like: </p>
            </div>
            <div className='blogs'>
                <Blog
                    src={'assets/logoBlog.jpg'}
                    title={'Logos'}
                    desc={' Have a unique & creative logo designed to express and represent your brand identity'}
                />
                <Blog
                    src={'assets/blog.jpg'}
                    title={'Blog Writing'}
                    desc={'  Write SEO enriched blog posts as long or short articles on any topic of your choice '}
                />
                <Blog
                    src={'assets/animation.jpg'}
                    title={'Animated Videos'}
                    desc={'Bring animated characters to life to keep your viewers engaged and  entertained.'}
                />
                <Blog
                    src={'assets/demo.jpg'}
                    title={'Product Demo'}
                    desc={' Introduce your product to potential customers in a clear and creative video.                    '}
                />
                <Blog
                    src={'assets/cop.jpg'}
                    title={'Copywriting'}
                    desc={'Have creative and compelling copies written to boost your product, brand, service or company.             '}
                />
                <Blog
                    src={'assets/social.jpg'}
                    title={'Social Media Ads'}
                    desc={'Boost sales and awareness with tailor made ads from experts.                    '}
                />
            </div>
            <div className='signUp'>
                <h1>Sign Up For The BETA to see more</h1>
                <div className='inputs'>
                    <input placeholder='Business Name' type='text' />
                    <input placeholder='Email' type="email" />
                </div>
                <div className='btns'>
                    <button className='not'>Notify Me</button>
                    <button className='sign'>Sign up as a freelance partner</button>
                </div>

            </div>
        </div >
    )
}
