import React, { useState } from 'react'
import Background from './assets/login.jpg'
import logo from './assets/logo.png'
import { Link , useNavigate} from 'react-router-dom'


const Signup = () => {

  const [Email,setEmail]=useState("")
  const [Pass,setPass]=useState("")
  const [error,seterror]=useState('')
  const Nav=useNavigate()

  const HandleChange=(e)=>{
    e.preventDefault(); 
    localStorage.setItem('email',Email)
    localStorage.setItem('pass',Pass)
   
    if(Email === '' || Pass === ''){
      seterror('Fill the Both Email & Password')
    }
    else{
      Nav('/') 
    }
    
  }
  console.log(Email)
  
  



  return (
    <div className='Signup'>
     <div> <img src={Background} alt="BG-Img" className='bg'/> </div>

    <div className='Content'>


     <div className='nav'>
        <img src={logo} alt="Logo" className='logo'/>
        <Link to='/'><button className='signB'>Log in</button></Link>
     </div>

    <div className='sign-center-div'>
    <div className='sign-center'>
        <h1 className='h1'>Unlimited Movies, TV Shows and more</h1>
        <h3 className='h3'>Watch anywhere. Cancel anytime.</h3>
        <p className='p'>Ready to watch? Enter your email to create or restart membership</p>
        <form onSubmit={HandleChange}>
        <input 
        type="email"
        placeholder='Email' 
        className='sign-eIn'
        value={Email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
        type="password" 
        className='sign-pIn'
        placeholder='Password'
        value={Pass}
        onChange={(e)=>setPass(e.target.value)}
        />
        <br />
        <button className='signBut' type='submit'>Sign up</button>
        </form>
        <span className='error'>{error}</span>
    </div>
    </div>

     </div>
    </div>
  )
}

export default Signup
