import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import DividerMobile from '../assets/images/pattern-divider-mobile.svg';
import DividerDesktop from '../assets/images/pattern-divider-desktop.svg';

const Divider = () => {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleWindowSize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowSize);

    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);

  return <Box mb={8} >{windowSize[0] < 1440 ? <DividerMobile /> : <DividerDesktop />}</Box>;

};

export default Divider;
