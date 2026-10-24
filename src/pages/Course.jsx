import React from 'react'
import CourseHero from '../components/course/CourseHero'
import CourseCategories from '../components/course/CourseCategories'
import TrainingPlacementSection from '../components/course/TrainingPlacementSection'

const Course = () => {
  return (
    <div>
      <CourseHero/>
      <CourseCategories/>
      <TrainingPlacementSection/>
    </div>
  )
}

export default Course
