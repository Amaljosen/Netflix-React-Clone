import React from 'react'
import video from './assets/str.mp4'

export default function Video() {
  return (
    <div style={{width:'100vw',height:'100vh'}}>
      <video src={video} autoPlay loop controls style={{width: '100%',height: '100%',objectFit:'cover'}}></video>
    </div>
  )
}
