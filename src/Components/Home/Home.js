import React from 'react';
import MobileScreen from './imgs/mobile.png';
import AppsScreen from './imgs/apps.png';
import './Home.css';

const Home = () => {
  return <>
    <div className='home-parent'>
      <section>
        <img className='mobile-logo' src={MobileScreen} alt='MobileScreen' />
      </section>
      <section>
        <img className='apps-logo' src={AppsScreen} alt='AppsLogo' />
      </section>
    </div>
  </>
}

export default Home;