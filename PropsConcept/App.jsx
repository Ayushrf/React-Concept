import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Card from './Components/Card.jsx';
import Footer from './Components/Footer.jsx';
function App() {
  return (
    <>
      <Navbar />
      <div className="cardContainer">
        <Card title="Example1" description="Hnji kya dekhra hai!" image="PlaylistImage1.jpeg" />
        <Card title="Example2" description="Hey bro how are you!" image="PlaylistImage2.jpeg"/>
        <Card title="Example3" description="Example to acha lga!" image="PlaylistImage3.jpeg"/>
        <Card title="Example4" description="Where do i have to go!" image="PlaylistImage4.jpeg"/>
      </div>
      <Footer/>
    </>
  )
}

export default App;
