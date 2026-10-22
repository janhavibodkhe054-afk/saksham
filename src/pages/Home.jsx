import React from 'react'
import HeroSlider from '../components/home/HeroSlider'
import AboutSakshamSection from '../components/home/AboutSakshamSection'
import KeyFocusAreasSection from '../components/home/KeyFocusAreasSection'
import TrainingProgramsDarkSection from '../components/home/TrainingProgramsDarkSection'
import FeaturedGDASection from '../components/home/FeaturedGDASection'
import OurImpactSection from '../components/home/OurImpactSection'
import WhyChooseSakshamSection from '../components/home/WhyChooseSakshamSection'
import TrainingToEmploymentSection from '../components/home/TrainingToEmploymentSection'
import CSRPartnershipCTA from '../components/home/CSRPartnershipCTA'

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <AboutSakshamSection/>
      <KeyFocusAreasSection/>
      <TrainingProgramsDarkSection/>
      <FeaturedGDASection/>
      <OurImpactSection/>
      <WhyChooseSakshamSection/>
      <TrainingToEmploymentSection/>
      <CSRPartnershipCTA/>
    </div>
  )
}

export default Home
