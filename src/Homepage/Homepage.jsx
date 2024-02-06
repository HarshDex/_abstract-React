import React, { useState,useRef } from 'react';
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

  const fullscreenRef = useRef();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const element = fullscreenRef.current;

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <div className="home-page-container" ref={fullscreenRef}>
        <button className = 'fullScreenButton' onClick={toggleFullscreen}>
          {isFullscreen ? (<i className="ri-contract-left-right-line"></i>) : (<i className="ri-expand-left-right-line"></i>)}
        </button>
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
