import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import join from '../../assets/auth/login.webp';


const Register = () => {
    const [passwordMatch,setPasswordMatch]=useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data,setData]=useState({})
   // const [signUpWithEmailAndPassword, eUser, eLoading, eError] = useSignUpWithEmailAndPassword(auth);
    const onSubmit = (data, e) => {
        
        setData(data)
        console.log(data, e)
        //signUpWithEmailAndPassword(data.email,data.password)
    };
    const onError = (errors, e) => console.log(errors, e);
    return (
        <div className='w-11/12 mx-auto my-8'>
            <div className='max-w-2xl mx-auto'>
            <div>
                <img src={join} alt="" width="100%" />
            </div>
            <div className='my-10'>
            <div className='mb-10'>
                <h1 className='text-3xl font-bold text-center'>REGISTRATION</h1>
                <p className='text-center'>Do you like Bata? You will love Bata Club! Register now! Only for members, there are discount coupons, exclusive previews and many other advantages.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit, onError)} className='flex flex-col gap-4'>
                <div className=''>
                    <div>
                    <label className='block' >First Name</label>
                    <input className='border-2 p-2 w-full' type='text' {...register("firstName", {
                        required: {
                            value: true,
                            message: "First name is required"
                        }
                    })} />
                    {errors.firstName?.type==='required'&& <p className='text-red-700'>{errors.firstName.message}</p>}
                    </div>

                    <div>
                    <label className='block' >Last Name</label>
                    <input className='border-2 p-2 w-full' type='text' {...register("lastName", {
                        required: {
                            value: true,
                            message: "Last name is required"
                        }     
                    })} />
                    {errors.lastName?.type==='required'&& <p className='text-red-700'>{errors.lastName.message}</p>}
                    </div>
                    <div>
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
                <div>
                    <label className='block'>Confirm Password</label>
                    <input className='border-2 p-2 w-full' type='password' {...register("password2",{
                        required: {
                            value: true,
                            message: "Password is required"
                        }
                        
                    })} />
                    {errors.password?.type==='required'&& <p className='text-red-700'>{errors.password.message}</p>}
                    {data.password!==data.password2&& <p className='text-red-700'>Password does not match</p>}
                </div>
                <button className='border-2 p-2' type="submit">Login</button>
            </form>
            
        </div>
        </div>
        </div>
    );
};

export default Register;