import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;

/*

    CODE FROM https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

*/