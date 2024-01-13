import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
const Homepage = () => {
  return (
    <div className="home-page-container">
        <div className="home-page-container-levels">
            <Link to={'/passSafe'}>
                <button>
                    <p>Go to level 1</p>
                    <i class="ri-play-fill"></i>
                </button>
            </Link>
            <Link to={'/dataBreach'}>
                <button>
                    <p>Go to level 2</p>
                    <i class="ri-play-fill"></i>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Homepage