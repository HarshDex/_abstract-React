// LoadingScreen.jsx
import React, { useState, useEffect } from 'react';
import './LoadingScreen.css'; 
const LoadingScreen = ({dataline}) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        clearInterval(interval);
        return 100;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <p>Loading Hold tight!!...{dataline}</p>
      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${loadingProgress}%` }}></div>
      </div>
    </div>
  );``
};

export default LoadingScreen;
