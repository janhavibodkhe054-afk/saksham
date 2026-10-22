import React from 'react'
import ImpactHero from '../components/impact/ImpactHero'
import CSRProjectExperience from '../components/impact/CSRProjectExperience'
import SmartClassInitiative from '../components/impact/SmartClassInitiative'
import CommunityMobilization from '../components/impact/CommunityMobilization'
import ImpactNumbersSection from '../components/impact/ImpactNumbersSection'
import FutureCommitment from '../components/impact/FutureCommitment'

const Impact = () => {
  return (
    <div>
      <ImpactHero/>
      <CSRProjectExperience/>
      <SmartClassInitiative/>
      <CommunityMobilization/>
      <ImpactNumbersSection/>
      <FutureCommitment/>
    </div>
  )
}

export default Impact
