import React from 'react';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import login from '../../assets/auth/register.webp'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data, e)
        signInWithEmailAndPassword(data.email, data.password)
        navigate('/home')
    };
    const onError = (errors, e) => console.log(errors, e);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    return (
        <section className='my-10 w-5/6 mx-auto '>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div>
                        <img src={login} alt="" />
                    </div>
                    <div>
                        <div className='mb-10'>
                            <h1 className='text-3xl font-bold text-center uppercase'>Log in To Your Account</h1>
                            <p className='text-center'>Welcome back! If you already have an account please login.</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit, onError)} className='flex flex-col max-w-xl mx-auto gap-4'>
                            <div className=''>
                                <label className='block' >Enter Email/Phone</label>
                                <input className='border-2 p-2 w-full' type='email' {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Email is invalid'
                                    }
                                })} />
                                {errors.email?.type === 'required' && <p className='text-red-700'>{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p className='text-red-700'>{errors.email.message}</p>}
                            </div>
                            <div>
                                <label className='block'>Enter Password</label>
                                <input className='border-2 p-2 w-full' type='password' {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Enter at least 6 character'
                                    }
                                })} />
                                {errors.password?.type === 'required' && <p className='text-red-700'>{errors.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-700'>{errors.password.message}</p>}
                            </div>
                            <button className='border-2 p-2 font-bold uppercase hover:text-white hover:bg-slate-900' type="submit">Login</button>

                        </form>
                        <div className='flex flex-row items-center gap-3 my-5 justify-center max-w-xl mx-auto'>
                            <div className='border-t w-full'></div>
                            <p>Or</p>
                            <div className='border-t w-full'></div>
                        </div>
                        <section className='max-w-xl mx-auto mb-10'>
                            <input onClick={() => signInWithGoogle()} className='border-2 rounded w-full p-2 cursor-pointer font-bold text-white bg-slate-900 hover:text-slate-800 hover:bg-white ' type="submit" value='SIGN IN WITH GOOGLE' />
                        </section>
                    </div>
                </div>
                <div className=''>
                        <h1 className='text-3xl font-bold uppercase text-center text-red-700'>Don't have an account? <Link to='/register' className='hover:text-slate-900 hover:underline'>Join Now!</Link></h1>
                        
                    </div>

        </section>
    );
};

export default Login;