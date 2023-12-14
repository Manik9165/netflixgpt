import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header />
      {/* Background Img Section */}
      <div>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='LoginBgImg' />
        <div className='absolute inset-0 bg-gradient-to-b from-black opacity-40' />

        {/* Login Form Section */}

        <div className='absolute box-content w-1/4 h-1/2 left-[38%] top-[25%] bg-black bg-gradient-to-b from-black opacity-90'>
          <div>
            <h4 className='text-white'>Sign In</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login