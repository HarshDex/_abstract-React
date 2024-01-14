// LoadingScreen.jsx
import React, { useState, useEffect } from 'react';
import './LoadingScreen.css'; // Import the CSS file for styling

const LoadingScreen = () => {
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
    }, 20); // Adjust the interval based on your loading time

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <p>Loading Hold tight!!...</p>
      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${loadingProgress}%` }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
