import React from 'react'
import AboutHeroSection from '../components/about/AboutHeroSection'
import WhoWeAreSection from '../components/about/WhoWeAreSection'
import VisionMissionSection from '../components/about/VisionMissionSection'
import CoreValuesSection from '../components/about/CoreValuesSection'
import OurJourneyExperienceSection from '../components/about/OurJourneyExperienceSection'
import LeadershipSection from '../components/about/LeadershipSection'

const About = () => {
  return (
    <div>
      <AboutHeroSection/>
      <WhoWeAreSection/>
      <VisionMissionSection/>
      <CoreValuesSection/>
      <OurJourneyExperienceSection/>
      <LeadershipSection/>
    </div>
  )
}

export default About
