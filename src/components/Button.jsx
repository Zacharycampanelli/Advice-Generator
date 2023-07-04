import { IconButton } from "@chakra-ui/react";
import Dice from '../assets/images/icon-dice.svg';

const Button = ({ fetchAdvice }) => {
  return (
    <div> 
      <IconButton pos="absolute" mx="auto" bottom="-32px" left="0" right="0" w="64px" height="64px" fontSize="124px"  aria-label='Get Advice' borderRadius="50%" bg='neonGreen' icon={<Dice />} onClick={fetchAdvice} />
    </div>
  )
}

export default Button
