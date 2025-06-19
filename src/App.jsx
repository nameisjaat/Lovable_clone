import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './heroSection.jsx'
import SecondPage from './SecondPage.jsx'
import PreviewForm from './PreviewForm.jsx'
import PowerfulModules from './PowerFulModules.jsx'
import CaseStudySlider from './CaseStudySlider.jsx'
import WhyDMISection from './WhyDMISection.jsx'
import DesignRevolution from './DesignRevolution.jsx'
import VisionSection from './VisionSection.jsx'
import FounderSection from './FounderSection.jsx'


function App() {
 
  return (
    <>
      <HeroSection/>
      <SecondPage/>
      <PreviewForm/>
      <PowerfulModules/>
      <CaseStudySlider/>
      <VisionSection/>
      <FounderSection/>
      <WhyDMISection/>
      <DesignRevolution/>
    </>
  )
}

export default App
