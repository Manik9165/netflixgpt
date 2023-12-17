import React, { useRef, useState } from 'react'
import Header from './Header'
import Validations from '../Utils/Validations';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const emailFieldRef = useRef(null);
  const passwordFieldRef = useRef(null);
  const nameFieldRef = useRef(null);

  const signIn = isSignUp ? "Sign Up" : "Sign In"
  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  }

  const handleFormData = () => {
    const message = Validations(emailFieldRef.current.value, passwordFieldRef.current.value, nameFieldRef.current.value);
    setErrorMsg(message);
  }

  return (
    <div>
      <Header />
      {/* Background Img Section */}
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='LoginBgImg'
        />
      </div>

      {/* SignIn/Signup Form Section */}
      <div className='flex justify-center align-middle'>
        <form className='absolute w-4/12 bg-black bg-opacity-80 mt-[15%] text-white' onSubmit={(e) => { e.preventDefault(); }}>
          <h1 className='ml-16 text-4xl my-3'>{signIn}</h1>
          <div className='text-center'>
            <input
              type="text"
              ref={nameFieldRef}
              placeholder='Please Enter First Name'
              className='w-9/12 p-2 my-2 text-black'
              hidden={!isSignUp}
            />
            <input
              type="text"
              ref={emailFieldRef}
              placeholder='Please Enter Email'
              className='w-9/12 p-2 my-2 text-black'
            />
            <input
              type="password"
              ref={passwordFieldRef}
              placeholder='Please Enter Password'
              className='w-9/12 p-2 my-2 text-black'
            />
            <h2 className='text-red-700 my-2'>{errorMsg}</h2>
            <button
              type="submit"
              className='w-9/12 p-2 my-5 bg-red-700'
              onClick={handleFormData}>
              {signIn}
            </button>
            <p
              className='w-auto mb-5 cursor-pointer'
              onClick={handleSignUp}>
              {isSignUp ? "Sign In" : "Sign Up"}
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login