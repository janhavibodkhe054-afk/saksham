import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import StudentRegistration from '../components/contact/StudentRegistration'
import CSRPartnershipEnquiry from '../components/contact/CSRPartnershipEnquiry'
import ContactInformation from '../components/contact/ContactInformation'
import GoogleMapSection from '../components/contact/GoogleMapSection'

const Contact = () => {
  return (
    <div>
      <ContactHero/>
      <StudentRegistration/>
      <CSRPartnershipEnquiry/>
      <ContactInformation/>
      <GoogleMapSection/>
    </div>
  )
}

export default Contact
