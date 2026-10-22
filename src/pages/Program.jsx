import React from 'react'
import ProgramsHero from '../components/program/ProgramsHero'
import TrainingCategories from '../components/program/TrainingCategories'
import FeaturedGDASection from '../components/program/FeaturedGDASection'
import GDALearningSection from '../components/program/GDALearningSection'
import GDAAdmissionProcess from '../components/program/GDAAdmissionProcess'
import ProgramCTA from '../components/program/ProgramCTA'

const Program = () => {
  return (
    <div>
      <ProgramsHero/>
      <TrainingCategories/>
      <FeaturedGDASection/>
      <GDALearningSection/>
      <GDAAdmissionProcess/>
      <ProgramCTA/>
    </div>
  )
}

export default Program
