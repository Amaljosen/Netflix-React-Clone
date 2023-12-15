import React from 'react'
import ListItem1 from './ListItem1'
import ListItem2 from './ListItem2'
import ListItem3 from './ListItem3'


export default function List() {
  return (
    <div className='list-movies'>
      <h2 className='titlee'>Continue to Watch</h2>
    <div className='list-div'>
      <ListItem1/>
      </div>
      <h2 className='title'>Popular on Netflix</h2>
       <div className='list-div'>
      <ListItem2/>
      </div>
      <h2 className='title'>Trending Now</h2>
       <div className='list-div'>
      <ListItem3/>
      </div>
      <h2 className='title'>Movie and Tv Shows</h2>
      <div className='list-div'>
      <ListItem1/>
      </div>
      <h2 className='title'>Action and Adventure Movies</h2>
       <div className='list-div'>
      <ListItem2/>
      </div>
      <h2 className='title'>Recommended for You</h2>
       <div className='list-div'>
      <ListItem3/>
      </div>
    </div>
  )
}
