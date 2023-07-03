import { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/react';
import DividerMobile from '../assets/images/pattern-divider-mobile.svg';
import DividerDesktop from '../assets/images/pattern-divider-desktop.svg';

const Divider = () => {

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
  
      useEffect(() => {
        const handleWindowSize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', handleWindowSize);

        return () => {
            window.removeEventListener('resize', handleWindowSize)
        }
      }, [])
console.log(windowSize)
      if (windowSize[0] < 1440) return <DividerMobile/> ;
return <DividerDesktop/> ;
  
};

export default Divider;
