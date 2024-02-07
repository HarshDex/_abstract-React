import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
const Homepage = () => {
  const [scrollInterval, setScrollInterval] = useState(null);
  const handleScrollDown = () => {
    setScrollInterval(
      setInterval(() => {
        window.scrollBy({
          top: 2,
          behavior: 'smooth',
        });
      }, 16)
    );
  };

  const handleStopScroll = () => {
    clearInterval(scrollInterval);
  };

  return (
    <>
      <div className="home-page-container">
        <div className="scroll-down" onMouseEnter={handleScrollDown} onMouseLeave={handleStopScroll}>
          <i className="ri-arrow-down-double-line"></i>
        </div>
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
          <Link to={'/financialVigilance'}>
            <button>
              <p>Financial Vigilance</p>
              <i className="ri-play-fill"></i>
            </button>
          </Link>
          {/* <Link to={'/fishGuardian'}>
            <button>
              <p>Fish Guardian</p>
              <i className="ri-play-fill"></i>
            </button>
          </Link> */}
          <Link to={'/utopianPrivacy'}>
            <button>
              <p>Utopian Privacy Challenge</p>
              <i className="ri-play-fill"></i>
            </button>
          </Link>
          <Link to={'/secretVault'}>
            <button>
              <p>Secret Vault</p>
              <i className="ri-play-fill"></i>
            </button>
          </Link>
          <Link to={'/cryptalogue'}>
            <button>
              <p>Cryptalogue</p>
              <i className="ri-play-fill"></i>
            </button>
          </Link>
          <Link to={'/quantumIntrusion'}>
            <button>
              <p>Quantum Intrusion</p>
              <i className="ri-play-fill"></i>
            </button>
          </Link>
          <Link to={'/mysticMatrix'}>
            <button>
              <p>Mystic Matrix</p>
              <i className="ri-play-fill"></i>
            </button>
          </Link>
          <Link to={'/phantomAttack'}>
            <button>
              <p>Phantom Attack</p>
              <i className="ri-play-fill"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
