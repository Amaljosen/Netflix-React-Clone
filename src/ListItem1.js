import React from 'react'
import Multi from './Multi'
import { Link } from 'react-router-dom'
import {Array} from './Array'


export default function ListItem() {
  return (
   
    <>
    <Link to='/video'>
    <div className='list-head'>
    {Array.map((e)=>(
    <Multi e={e} key={e.id}/>
    ))}
    </div>
    </Link>
    </>
    
  )
}
