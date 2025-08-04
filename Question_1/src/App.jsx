import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProfileCard from './ProfileCard'
import MackImg from './assets/Mack.jpg'
import BlakeImg from './assets/blake.jpg'
import './App.css'

function App() {

  return (
    <>
      <div style={{display: 'flex', gap: '20px', justifyContent:'center', marginTop:'50px'}}>
        <ProfileCard
        img={MackImg}
        name="Mack Kayla"
        job_title="Quantitative Analyst"
        contact_info="Email: mackkayla577@gmail.com"
        />

        <ProfileCard
        img={BlakeImg}
        name="Blake Morris"
        job_title="Network Analyst"
        contact_info="Email: blakemorris98@gmail.com"
        />

      </div>
    </>
  )
}

export default App
