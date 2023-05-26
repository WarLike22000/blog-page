import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//helper
import validation from '../helper/validateLogin';

//styles
import './SignUp.css';

const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: '',
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
            <div className='inputCSS'>
                <span className='block text-2xl mb-10 text-center w-full'>Logo</span>
                <div>
                    <input type='email' name='email' value={data.email} placeholder='Email' onFocus={focusHandler} onChange={changeHandler} />
                    <span className='block w-fit h-5 ml-2 mt-1' >{errors && touched.email && <span className='block w-fit h-5 text-xs text-red-500'>{errors.email}</span>}</span>
                </div>
                <div>
                    <input type='password' name='password' value={data.password} placeholder='Password' onFocus={focusHandler} onChange={changeHandler} />
                    <span className='block w-fit h-5 ml-2 mt-1' >{errors && touched.password && <span className='block w-fit h-5 text-xs text-red-500'>{errors.password}</span>}</span>
                </div>
                <section className='flex justify-between items-center'>
                    <button className=' px-5 py-2 rounded-lg bg-sky-100 text-sm font-medium hover:bg-white' >Login</button>
                    <Link to='/signUp' className='outline-none text-sm font-medium px-5 py-2 border rounded-lg bg-sky-100 hover:bg-sky-200 transition-all' >Sign Up</Link>
                </section>
            </div>
        </div>
    );
};

export default Login;