import React from 'react'
import './Nextpage.css'
import { useNavigate } from 'react-router-dom'

const Nextpage = () => {
  const navigate = useNavigate()


  return (
    <div>
      <div className="text2">Can We Go Out For A Movie Date?</div>
      <img className='gif2' src="https://media.tenor.com/SwQT4BBJS0oAAAAi/peach-and-goma-peach-goma.gif" alt="logo" />
      <div className="button">
        <button className='btn1' id='noButton' onClick={() => navigate('/ifyes')}>Yes</button>
        <button className='btn2'>NO</button>
      </div>
    </div>
  )
}

export default Nextpage
