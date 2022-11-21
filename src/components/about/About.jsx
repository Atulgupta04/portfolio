import React from 'react'
import about from './about.css'
import ME from '../../assets/img/me.jpg'


const About = () => {
  return (
    <section id='about'>
      
      <h5> Get to know </h5>
      <h2> About Me </h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__cards">
                <h5> Experience </h5>
                <small> Internships </small>
              </article>


              <p> 
              I am pssionate Front End Developer
            </p>
          </div>
            </div>

           

      </div>


    </section >
          /* Start from 1: 32:26   */

  )
}

export default About