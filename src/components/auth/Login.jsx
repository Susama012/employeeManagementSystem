import React, { useState } from 'react'

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const submitHandler = (e) => {
      e.preventDefault()
      console.log(`Email is ${email}`);
      console.log(`Password is ${password}`)
      
      setEmail("")
      setPassword("")
   }
   return (
      <div className='flex items-center justify-center h-screen w-screen'>
         <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
               <input
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  className='border-2 border-emerald-600 rounded-full py-3 px-5  outline-none bg-transparent placeholder:text-gray-400'
                  type="email" placeholder='example@gmail.com'
               />
               <input
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }}
                  className='border-2 border-emerald-600 rounded-full py-3 px-5  outline-none bg-transparent placeholder:text-gray-400 mt-3'
                  type="password" placeholder='Enter password' required />
               <button className='bg-emerald-600 rounded-full py-3 px-5  outline-none border-none mt-5'
               >Log in</button>
            </form>
         </div>
      </div>
   )
}

export default Login