import React from 'react';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import login from '../../assets/auth/login.webp'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data, e)
        signInWithEmailAndPassword(data.email,data.password)
    };
    const onError = (errors, e) => console.log(errors, e);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [SignInWithEmailAndPassword, eUser, eLoading, eError] = useSignInWithEmailAndPassword(auth);

    return (
        <div className='my-10'>
            <div className='mb-10'>
                <h1 className='text-3xl font-bold text-center'>Login Your Account</h1>
                <p className='text-center'>Welcome back! Login to your account</p>
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
                    {errors.email?.type==='required'&& <p className='text-red-700'>{errors.email.message}</p>}
                    {errors.email?.type==='pattern'&&  <p className='text-red-700'>{errors.email.message}</p>}
                </div>
                <div>
                    <label className='block'>Enter Password</label>
                    <input className='border-2 p-2 w-full' type='password' {...register("password",{
                        required: {
                            value: true,
                            message: "Password is required"
                        },
                        minLength: {
                            value: 6,
                            message: 'Enter at least 6 character'
                          }
                    })} />
                    {errors.password?.type==='required'&& <p className='text-red-700'>{errors.password.message}</p>}
                    {errors.password?.type==='minLength'&&  <p className='text-red-700'>{errors.password.message}</p>}
                </div>
                <button className='border-2 p-2' type="submit">Login</button>
                <p className='text-xl font-bold'>New to Bata? <Link className='text-red-700 hover:underline' to='/register'>Register Now!</Link></p>
            </form>
            <div className='flex flex-row items-center gap-3 my-5 justify-center max-w-xl mx-auto'>
                <div className='border-t w-full'></div>
                <p>Or</p>
                <div className='border-t w-full'></div>
            </div>
            <section className='max-w-xl mx-auto'>
                <input onClick={() => signInWithGoogle()} className='border-2 rounded w-full p-2 cursor-pointer font-bold text-white bg-slate-900 hover:text-slate-800 hover:bg-white ' type="submit" value='SIGN IN WITH GOOGLE' />
            </section>
        </div>
    );
};

export default Login;