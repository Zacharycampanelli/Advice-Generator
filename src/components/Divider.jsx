import { Image } from '@chakra-ui/react';
import divider_mobile from '../assets/images/pattern-divider-mobile.svg'
import divider_desktop from '../assets/images/pattern-divider-desktop.svg'

const Divider = () => {
    let divider = divider_desktop;
  return (
   <Image src={divider} color="white"/>
  )
}

export default Divider
