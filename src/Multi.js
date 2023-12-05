import {React,useState} from 'react'
import like from './assets/like.png'
import add from './assets/add.png'
import play from './assets/play-button.png'
import video from './assets/intro.mp4'


export default function Multi({e}) {

  const [isHovered, setIsHovered] = useState(true);

    const handleMouseEnter = () => {
      setIsHovered(false);
    };

    const handleMouseLeave = () => {
      setIsHovered(true);
    };
  return (
    
    <div className='list' 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>


      {isHovered ? 
      (<img src={e.image} alt="card" className='img-list'/>): 
      (<video src={video} autoPlay loop muted className='img-list'></video>
    )}
    <img src={play} alt='play' className='i'/>
    <img src={add} alt='add' className='i'/>
    <img src={like} alt='like' className='i'/>
    <div>
    <span className='red'>{e.match}</span>
    <span className='box'>{e.ua}</span>
    <span className='span'>{e.hours}</span><span className='hd'>HD</span>
    </div>
    <ul className='ul'><li>{e.content}</li></ul>


    </div>
    
  )
}
