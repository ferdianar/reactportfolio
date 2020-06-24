import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';
import About from './Components/About';
import Management from './Components/Management';
import Tools from './Components/Tools';
import Experience from './Components/Experience';
import Skill from './Components/Skill';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <SectionOne />
      <SectionTwo />
      <About />
      <Management />
      <Tools />
      <Experience />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
