import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="text">Hey Cutie!</div>
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif" alt="gif" className="gif" />
            <button className='btn' onClick={() => { navigate('/nextpage') }}>Yes</button>
        </div>
    )
}

export default Home
