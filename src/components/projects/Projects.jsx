import React from 'react'
import projects from './projects.css'

export const Projects = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <section id='projects'>
    
    <h2 class="card">Projects</h2>

    <div class="grid-container">
      <div class="item1 texth"  className="texth">Project 1
      <div className="projectwork" class="textt"> <a className='ahreff' href="https://github.com/Atulgupta04/blog-app"target="_blank">
      <button class="web-btn" onClick={() => openInNewTab('https://github.com/Atulgupta04/blog-app')}> Blog App </button></a>  </div>
      </div>
      <div className="texth">Project 2
      <div className="projectwork  " class="textt"> <a className='ahreff' href="https://github.com/Atulgupta04/e-commerce" target="_blank" >
      <button class="web-btn" onClick={() => openInNewTab('https://github.com/Atulgupta04/e-commerce')}> Php e-commerce  </button></a> </div>
      </div>
      <div className="texth">Project 3
      <div className="projectwork" class="textt"> <a className='ahreff' href="" target="_blank" > 
      <button class="web-btn"  onClick={() => openInNewTab('https://github.com/Atulgupta04/modern-responsive-design')}>Modern Responisve Desgin</button></a> </div>
      </div>
      
    </div>    
    
    </section>
  )
}

export default Projects
