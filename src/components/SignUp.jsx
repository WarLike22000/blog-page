import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//styles
import './SignUp.css';

const SignUp = () => {

    const [data, setData] = useState({
        fullName: '',
        email: '',
        password: '',
        phoneNumber: '',
    });
    
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }
    
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='inputCSS'>
                <span className='block text-2xl mb-10 text-center w-full'>Logo</span>
                <div>
                    <input type='text' name='fullName' value={data.fullName} placeholder='Full Name' onChange={changeHandler} />
                </div>
                <div>
                    <input type='email' name='email' value={data.email} placeholder='Email' onChange={changeHandler} />
                </div>
                <div>
                    <input type='password' name='password' value={data.password} placeholder='Password' onChange={changeHandler} />
                </div>
                <div>
                    <input type='text' name='phoneNumber' value={data.phoneNumber} placeholder='Phone Number' onChange={changeHandler} />
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