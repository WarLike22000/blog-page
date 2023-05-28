import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//helper
import validation from '../helper/validateSignUp';

//styles
import './SignUp.css';

const SignUp = () => {

    const [data, setData] = useState({
        fullName: '',
        email: '',
        password: '',
        phoneNumber: '',
    });

    const [errors, setErrors] = useState();
    const [touched, setTouched] = useState({
        fullName: false,
        email: false,
        password: false,
        phoneNumber: false,
    })
    
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const focusHandler = (event) => {
        setTouched({...touched, [event.target.name]: true})
    }
    
    useEffect(() => {
        setErrors(validation(data))
    }, [data])
    
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='dark:shadow-xl dark:shadow-white/20 bg-white/80 dark:bg-white/10 inputCSS'>
                <span className='block text-2xl mb-10 text-center w-full dark:text-white'>Logo</span>
                <div>
                    <input className='dark:text-white' type='text' name='fullName' value={data.fullName} placeholder='Full Name' onFocus={focusHandler} onChange={changeHandler} />
                    <span className='block w-fit h-5 ml-2 mt-1' >{errors && touched.fullName && <span className='block w-fit h-5 text-xs text-red-500'>{errors.fullName}</span>}</span>
                </div>
                <div>
                    <input className='dark:text-white' type='email' name='email' value={data.email} placeholder='Email' onFocus={focusHandler} onChange={changeHandler} />
                    <span className='block w-fit h-5 ml-2 mt-1' >{errors && touched.email && <span className='block w-fit h-5 text-xs text-red-500'>{errors.email}</span>}</span>
                </div>
                <div>
                    <input className='dark:text-white' type='password' name='password' value={data.password} placeholder='Password' onFocus={focusHandler} onChange={changeHandler} />
                    <span className='block w-fit h-5 ml-2 mt-1' >{errors && touched.password && <span className='block w-fit h-5 text-xs text-red-500'>{errors.password}</span>}</span>
                </div>
                <div>
                    <input className='dark:text-white' type='text' name='phoneNumber' value={data.phoneNumber} placeholder='Phone Number' onFocus={focusHandler} onChange={changeHandler} />
                    <span className='block w-fit h-5 ml-2 mt-1' >{errors && touched.phoneNumber && <span className='block w-fit h-5 text-xs text-red-500'>{errors.phoneNumber}</span>}</span>
                </div>
                <section className='flex justify-between items-center'>
                    <Link className='outline-none text-sm font-medium px-5 py-2 border rounded-lg bg-sky-100 hover:bg-sky-200 transition-all' to='/login'>Login</Link>
                    <button className=' px-5 py-2 rounded-lg bg-sky-100 text-sm font-medium hover:bg-white'>Sign Up</button>
                </section>
            </div>
        </div>
    );
};

export default SignUp;