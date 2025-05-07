import React from 'react';
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'

import '../styles/globals.css'

function Home() {
  return (
    <main>
         <Header/>
         <Hero/>
         <Features/>
    </main>
  );
}

export default Home;