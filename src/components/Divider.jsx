import { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/react';
import divider_mobile from '../assets/images/pattern-divider-mobile.svg';
import divider_desktop from '../assets/images/pattern-divider-desktop.svg';

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


  let divider =windowSize[0] > 1440 ?  divider_desktop : divider_mobile;
 
  return (
  
  <Image src={divider} mt={4} />

  );
};

export default Divider;
