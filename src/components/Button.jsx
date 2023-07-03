import { IconButton } from "@chakra-ui/react";
import Dice  from '../assets/images/icon-dice.svg';
const Button = () => {
  return (
    <div>
      
      <IconButton aria-label='Get Advice' icon={<Dice />} />
    </div>
  )
}

export default Button
