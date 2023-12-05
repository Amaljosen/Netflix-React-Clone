import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import profile from './assets/profile.png';
import search from './assets/search.png';
import bell from './assets/bell.png';
import video from './assets/str.mp4';
import strLogo from './assets/strLogo.png';
import play from './assets/play.png';
import info from './assets/info.png';
import List from './List';

const Netflix = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='vid'>
        <video src={video} autoPlay loop className='nav-video' />
      </div>
      <nav className={`navbar ${scrolling ? 'scroll' : ''}`}>
        <ul className='ul-left'>
          <li><img src={logo} alt="icon" className='logo' /></li>
          <li><Link to='#'>Home</Link></li>
          <li><Link to='#'>TV shows</Link></li>
          <li><Link to='#'>Movies</Link></li>
          <li><Link to='#'>New Popular</Link></li>
          <li><Link to='#'>My List</Link></li>
          <li><Link to='#'>Browse By Languages</Link></li>
        </ul>
        <ul className='ul-left-mob'>
          <li><img src={logo} alt="icon" className='logo' /></li>
        </ul>
        <ul className='ul-right'>
          <li><img src={search} alt="search-icon" className='icon' /></li>
          <li><img src={bell} alt="bell-icon"className='icon' /></li>
          <li><img src={profile} alt="profile-icon" className='p-icon' /></li>
        </ul>
      </nav>
      <div className='content'>
        <img src={strLogo} alt="icon" className='strLogo'/>
        <div className='play'>
          <Link to='/video'>
            <div className='play-btn'>
              <img src={play} alt='btn' width={'20px'} style={{ marginRight: '8px' }} />
              Play
            </div>
          </Link>
          <Link to='#'>
            <div className='info-btn'>
              <img src={info} alt="btn" width={'20px'} style={{ marginRight: '8px' }} />
              More Info
            </div>
          </Link>
        </div>
      </div>
    
    <div className='movies'>
      <List/>
    </div>

    </div>
  );
}

export default Netflix;
