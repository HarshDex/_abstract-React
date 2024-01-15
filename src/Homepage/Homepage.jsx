import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
const Homepage = () => {
  return (
    <div className="home-page-container">
        <div className="home-page-container-heading">
            <p>_ABSTRACT</p>
        </div>
        <div className="home-page-container-levels">
            <Link to={'/passSafe'}>
                <button>
                    <p>Pass Safe Challenge</p>
                    <i className="ri-play-fill"></i>
                </button>
            </Link>
            <Link to={'/dataBreach'}>
                <button>
                    <p>Data Breach</p>
                    <i className="ri-play-fill"></i>
                </button>
            </Link>
            <Link to={'/decentralisedIdentifiers'}>
                <button>
                    <p>Decentralised Identifiers</p>
                    <i className="ri-play-fill"></i>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Homepage