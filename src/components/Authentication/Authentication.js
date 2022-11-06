import React, { useEffect, useRef, useState } from 'react'
import '../Authentication/autentication.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase-config'
import Avatar from '@mui/material/Avatar';

export const Authentication = () => {

    const [popup, setPopup] = useState(false)
    const [user, setUser] = useState({})


    useEffect(() => {
        onAuthStateChanged(auth, () => {
            setUser(auth.currentUser)
        })
    }, [auth.currentUser])

    const registerEmailRef = useRef()
    const registerPasswordRef = useRef()
    const loginEmailRef = useRef()
    const loginPasswordRef = useRef()

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmailRef.current.value, registerPasswordRef.current.value)
            setUser(user.user)
        } catch (error) {
            console.log(error.message)
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmailRef.current.value, loginPasswordRef.current.value)
            setUser(user.user)
        } catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        await signOut(auth)
        setUser({})
    }

    const showClick = () => {
        setPopup(!popup)
    }

    return (
        <div className='authent'>
            <div className='login-div'>
                {!user?.email && <button className='singup' onClick={showClick}>Sing In/Sing Up</button>}
                <div className='loggeduser'>
                    <Avatar src="/broken-image.jpg" />
                    <h1 className='user'>{user?.email}</h1>
                </div>
                {user?.email && <button className='loggout' onClick={logout}>Log out</button>}
            </div>
            {popup &&
                <div className='auth-div'>
                    <div className='register'>
                        <h1 className='title'>Register</h1>
                        <button className='exit' onClick={showClick}>X</button>
                        <div className='names'>
                            <h1>Email</h1>
                            <h1>Password</h1>
                        </div>
                        <div className='inputs'>
                            <input placeholder='Email' ref={registerEmailRef} />
                            <input type='password' placeholder='Password' ref={registerPasswordRef} />
                        </div>
                        <button onClick={() => { register(); showClick(); }}>Create user</button>
                    </div>
                    <div className='login'>
                        <h1 className='title'>Login</h1>
                        <div className='names'>
                            <h1>Email</h1>
                            <h1>Password</h1>
                        </div>
                        <div className='inputs'>
                            <input placeholder='Email' ref={loginEmailRef} />
                            <input type='password' placeholder='Password' ref={loginPasswordRef} />
                        </div>
                        <button onClick={() => { login(); showClick() }}>Log In</button>
                    </div>
                </div>}
        </div>
    )
}
