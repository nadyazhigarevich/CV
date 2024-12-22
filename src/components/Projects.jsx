import React from 'react'
import { motion } from 'framer-motion'
import { upAnimation } from '../animation'

const Projects = () => {
  return (
    <motion.div
      className='block projects'
      initial="hidden"
      whileInView="visible"
      transition={{
        ease: "linear",
        duration: 0.5,
        x: { duration: 0.5 }
      }}
      variants={upAnimation}
      viewport={{ amount: 0.5, once: true }}>
      <h3>
        PROJECTS
      </h3>
      <div className="content">
        <div className="project">
          <div className="project-top">
            <h4>Notion</h4>
            <span>November, 2024</span>
          </div>
          <div className="project-center">
            <p>  Built on the React framework and utilizing the Redux library for state management, this project offers a seamless user experience. Users can sign up using their credentials and gain access to a personalized dashboard where they can create, edit, and delete notes.</p>
          </div>
          <div className="project-bottom">
            <div className="technologies">
              <p>ReactJS</p>
              <p>Redux</p>
            </div>
            <a href="https://github.com/nadyazhigarevich/notion-redux">Code</a>
          </div>
        </div>
        <div className="project">
          <div className="project-top">
            <h4>API & SPA</h4>
            <span>November, 2024</span>
          </div>
          <div className="project-center">
            <p> The application provides an intuitive user interface where users can view their albums and browse through the photos within each album.</p>
          </div>
          <div className="project-bottom">
            <div className="technologies">
              <p>ReactJS</p>
            </div>
            <a href="https://github.com/nadyazhigarevich/API-SPA">Code</a>
          </div>
        </div>
        <div className="project">
          <div className="project-top">
            <h4>TODO List</h4>
            <span>October, 2024</span>
          </div>
          <div className="project-center">
            <p>  The To-Do List application is a user-friendly tool designed to help you organize and manage your tasks effectively. Whether you're keeping track of daily chores, project deadlines, or personal goals, this app provides a simple interface to help you stay focused and productive.</p>
          </div>
          <div className="project-bottom">
            <div className="technologies">
              <p>ReactJS</p>
            </div>
            <a href="https://github.com/nadyazhigarevich/todo-list">Code</a>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default Projects