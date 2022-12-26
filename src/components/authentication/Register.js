import React from 'react';
import { useSignUpWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
   // const [signUpWithEmailAndPassword, eUser, eLoading, eError] = useSignUpWithEmailAndPassword(auth);
    const onSubmit = (data, e) => {
        console.log(data, e)
        //signUpWithEmailAndPassword(data.email,data.password)
    };
    const onError = (errors, e) => console.log(errors, e);
    return (
        <div>
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
            </form>
            
        </div>
        </div>
    );
};

export default Register;