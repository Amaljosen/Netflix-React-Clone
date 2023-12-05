import React from 'react'
import Multi from './Multi'
import { Link } from 'react-router-dom'
import {popArray} from './Array'


export default function ListItem2() {
  return (
   
    <div>
    <Link to='/video'>
    <div className='list-head'>
    {popArray.map((e)=>(
    <Multi e={e} key={e.id}/>
    ))}
    </div>
    </Link>
    </div>
    
  )
}
