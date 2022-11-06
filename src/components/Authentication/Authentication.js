import React, { useEffect, useRef, useState } from 'react'
import '../Authentication/autentication.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase-config'

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
        <div className='auth'>
            <button onClick={showClick}>Sing In/Sing Up</button>
            <h1>{user?.email}</h1>
            <button onClick={logout}>Log out</button>
            {popup &&
                <div className='auth-div'>
                    <div className='register'>
                        <h1>Register</h1>
                        <h1>name</h1>
                        <input type='text' placeholder='Email' ref={registerEmailRef} />
                        <input type='mail' placeholder='Password' ref={registerPasswordRef} />
                        <button onClick={() => { register(); showClick(); }}>Create user</button>
                    </div>
                    <div className='login'>
                        <h1>Login</h1>
                        <h1>name</h1>
                        <input type='text' placeholder='Email' ref={loginEmailRef} />
                        <input type='mail' placeholder='Password' ref={loginPasswordRef} />
                        <button onClick={() => { login(); showClick() }}>login</button>
                    </div>
                </div>}
        </div>
    )
}
