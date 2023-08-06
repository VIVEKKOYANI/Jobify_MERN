import React from 'react';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            jov <span>tracking</span>app
          </h1>
          <p>
            I'm baby edison bulb keytar cupping, venmo everyday carry gorpcore jawn flexitarian single-origin coffee meggings. Disrupt YOLO vice pickled 90's, authentic pitchfork pok pok echo park green juice pabst direct trade. Hoodie semiotics wolf brunch typewriter chartreuse hell of, irony austin unicorn forage. Jean shorts gastropub 3 wolf moon grailed copper mug tonx yuccie coloring book twee thundercats snackwave selvage swag. Blog vaporware truffaut butcher bitters paleo artisan adaptogen put a bird on it hexagon four dollar toast.
          </p>
          <Link to="/register" className='btn register-link'>Register</Link>
          <Link to="/login" className='btn'>Login / Demo User</Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing