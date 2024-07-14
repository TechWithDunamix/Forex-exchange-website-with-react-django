import React from 'react';
import {PhoneOutlined ,MailOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import {message} from 'antd'
import {countries,callMainApi} from '../utils.js'
import {useState} from 'react'
import { toQueryString } from "@zayne-labs/callapi"
import '../index.css'
const SignupForm = () => {
  const [formData,setFormData] = useState()
  const [errors,setErrors] = useState({})
  const [isLoading,setIsLoading] = useState(false)
  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  }
  const handleSubmit = async (e)=> {
    setIsLoading(true)
    e.preventDefault()
    
    const request = await callMainApi('/auth/register',{
      body:toQueryString(formData),
      method:'POST'
    })
    if(!request.error){
        message.success("Sbmited");
        localStorage.setItem("token",request.data.token)
        // localStorage.setItem("user_email",request.data)
        localStorage.removeItem("userEmail")

        console.log(request)
        window.location.href  = '/dashboard'
        return ;

    }
    setIsLoading(false)
    message.error("Error !")
    setErrors(request.error.errorData)
    console.log(errors)

    
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-5">
        <h2 className="text-2xl font-bold text-center mb-8 text-green-600">Sign Up</h2>
        
        <form className="space-y-6" onSubmit = {handleSubmit}>
          <div className="relative">
            <MailOutlined className="absolute left-3 top-3 text-green-600" style={{ fontSize: '20px' }} />
            <input
              type="email"
              name='email'
              required
              onChange = {handleChange}
              placeholder="Email"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            {errors.email && <p className='text-red-500 font-light'>Email is already taken by another user </p>}
          </div>

          <div className="relative">
            <UserOutlined className="absolute left-3 top-3 text-green-600" style={{ fontSize: '20px' }} />
            <input
              onChange = {handleChange}
              required
              type="text"
              name='username'
              placeholder="Full Name"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

           <div className="relative">
            <PhoneOutlined className="absolute left-3 top-3 text-green-600" style={{ fontSize: '20px' }} />
            <input
              onChange = {handleChange}
              required
              type="text"
              name='phone'
              placeholder="Phone Number"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="relative">
            <LockOutlined className="absolute left-3 top-3 text-green-600" style={{ fontSize: '20px' }} />
            <input
              required
              type="password"
              name='password'
              onChange={handleChange}
              placeholder="Password"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="relative">
            <select
              required
              name='country'
              onChange={handleChange}
              className="pl-3 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
              defaultValue=""
            >
              <option value="" disabled>Select your country</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>{country.label}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <LockOutlined className="absolute left-3 top-3 text-green-600" style={{ fontSize: '20px' }} />
            <input
              type="text"
              name='referal_id'
              onChange={handleChange}
              placeholder="Referal Code"
              value={localStorage.getItem("ref")}

              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            Sign Up
          </button>
        </form>
        {isLoading && <div className='mt-5 mr-20 p-4 animate-spin-infinte border-t-4 border-green-500 w-[20px] h-[20px] rounded-[200px]'></div>}
      </div>
    </div>
  );
};

export default SignupForm;
