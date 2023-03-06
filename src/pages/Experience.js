import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Experience.css';
import CV from "../components/CV"

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor='#604f71'>
        
      <VerticalTimelineElement className='vertical-timeline-element--education'
      date="2007 - 2011" dateClassName='date-fix' iconStyle={{background:'#604f71', color:'#fcfcfb'}} icon={<FontAwesomeIcon icon={faGraduationCap}/>}
      >
      <h3 className="vertical-timeline-element-title">The University of Manchester</h3>
      <p className='vertical-timeline-element-subtitle'>BSc Chemistry</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--work'
      date="2011 - 2014" iconStyle={{background:'#f7bea9', color:'#fcfcfb'}} icon={<FontAwesomeIcon icon={faBriefcase}/>}
      >
      <h3 className="vertical-timeline-element-title">VRS Recruitment</h3>
      <p className='vertical-timeline-element-subtitle'>Scientific Recruitment Consultant</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--work'
      date="2014 - 2020" dateClassName='date-fix' iconStyle={{background:'#f7bea9', color:'#fcfcfb'}} icon={<FontAwesomeIcon icon={faBriefcase}/>}
      >
      <h3 className="vertical-timeline-element-title">Hologic Ltd</h3>
      <p className='vertical-timeline-element-subtitle'>Laboratory Technician</p>
      <p className='vertical-timeline-element-subtitle'>Laboratory Supervisor</p>
      <p className='vertical-timeline-element-subtitle'>Operations Manager</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
      date="2020 - 2021"  iconStyle={{background:'#604f71', color:'#fcfcfb'}} icon={<FontAwesomeIcon icon={faGraduationCap}/>}
      >
      <h3 className="vertical-timeline-element-title">Manchester Metropolitan University</h3>
      <p className='vertical-timeline-element-subtitle'>MSc Industrial Digitalisation</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--work'
      date="2021 - 2023" dateClassName='date-fix' iconStyle={{background:'#f7bea9', color:'#fcfcfb'}} icon={<FontAwesomeIcon icon={faBriefcase}/>}
      >
      <h3 className="vertical-timeline-element-title">Eco-I</h3>
      <p className='vertical-timeline-element-subtitle'>Lead Research Analyst</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
      date="2022 - 2023" iconStyle={{background:'#604f71', color:'#fcfcfb'}} icon={<FontAwesomeIcon icon={faGraduationCap}/>}
      >
      <h3 className="vertical-timeline-element-title">EdX Bootcamp</h3>
      <p className='vertical-timeline-element-subtitle'>Front-End Web Development</p>
      </VerticalTimelineElement>
      
    </VerticalTimeline>
    <h1>My Curriculum Vitae</h1>
    <CV/>
    </div>
  )
}

export default Experience