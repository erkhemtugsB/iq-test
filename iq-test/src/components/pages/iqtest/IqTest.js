import React from 'react'
import './iqtest.css'
import Navbar from '../../navbar/Navbar'
import Quiz from './iqquiz/Quiz'

const IqTest = () => {

  return (
    <div>
        <center>
            <Navbar/>
        <div className='iq-test-container'>
        <Quiz/>
        </div>
        </center>
    </div>
  )
}

export default IqTest