import React from 'react'
import CSRPartnershipHero from '../components/csr/CSRPartnershipHero'
import WhyPartnerSection from '../components/csr/WhyPartnerSection'
import CSRCapabilitiesSection from '../components/csr/CSRCapabilitiesSection'
import CSRFocusAreas from '../components/csr/CSRFocusAreas'
import FeaturedCSRProposal from '../components/csr/FeaturedCSRProposal'
import CollaborationOpportunities from '../components/csr/CollaborationOpportunities'
import MonitoringTransparency from '../components/csr/MonitoringTransparency'
import CSREnquiryCTA from '../components/csr/CSREnquiryCTA'
import CSRImplementationPartner from '../components/csr/CSRImplementationPartner'

const CSR = () => {
  return (
    <div>
      <CSRPartnershipHero/>
      <WhyPartnerSection/>
      <CSRImplementationPartner/>
      <CSRCapabilitiesSection/>
      {/* <CSRFocusAreas/> */}
      <FeaturedCSRProposal/>
      <CollaborationOpportunities/>
      {/* <MonitoringTransparency/> */}
      <CSREnquiryCTA/>
    </div>
  )
}

export default CSR
