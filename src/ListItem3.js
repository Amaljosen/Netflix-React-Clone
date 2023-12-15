import React from 'react'
import Multi from './Multi'
import { Link } from 'react-router-dom'
import {another} from './Array'


export default function ListItem3() {
  return (
   
    <div>
    <Link to='/video'>
    <div className='list-head'>
    {another.map((e)=>(
    <Multi e={e} key={e.id}/>
    ))}
    </div>
    </Link>
    </div>
    
  )
}
