import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerHeight, innerWidth } = window;
  return { innerHeight, innerWidth };
}


function useWindowDimension() {
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

export default useWindowDimension;