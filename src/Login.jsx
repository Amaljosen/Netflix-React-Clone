import React, { useState } from 'react'
import Background from './assets/login.jpg'
import logo from './assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'





const Login = () => {

  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const [error,seterror]=useState('')
  const Nav=useNavigate()
  

  const HandleSubmit=(e)=>{
        e.preventDefault()
        const StoredEmail=localStorage.getItem('email')
        const StoredPass=localStorage.getItem('pass')
        if(email===StoredEmail&&pass===StoredPass){
          Nav('/netflix')
        }
        else{
          seterror('Invalid Email & Password')
        }
        
 }



  return (
    <div className='Login'>
     <div> <img src={Background} alt="BG-Img" className='bg'/> </div>

    <div className='Content'>


     <div className='nav'>
        <img src={logo} alt="Logo" className='logo'/>
        <Link to='/signup'><button className='signB'>Sign up</button></Link>
     </div>
     <form onSubmit={HandleSubmit}>
    <div className='center-div'>
    <div className='center'>
      
        <h2>Login</h2>
        <input 
        type="email" 
        className='eIn' 
        placeholder='Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
        type="password" 
        className='pIn' 
        placeholder='Password'
        value={pass}
        onChange={(e)=>setPass(e.target.value)}
        />
        <button className='logB' type='submit'>Log in</button>
        <span className='error'>{error}</span>
    </div>
    </div>
    </form>
     </div>
    </div>
  )
}

export default Login
