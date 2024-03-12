import React from 'react'
import Navbar from '../../navbar/Navbar'
import teacherImage from '../../../assets/teacher-clipart.jpeg';
import './home.css'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <img className="teacher-image" src={teacherImage} alt='teacher'/>
            <h1 className='mongol-test'>Монгол IQ тэст</h1>
        </div>
    </div>
  )
}

export default Home