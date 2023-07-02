import { Divider, Flex } from '@chakra-ui/react';
import Advice from './Advice';
import { useEffect, useState } from 'react';

const AdviceBox = () => {
    const [advice, setAdvice] = useState("");
    const [adviceId, setAdviceId] = useState(0);

  const url = 'https://api.adviceslip.com/advice';

  useEffect(() => {

    const fetchAdvice = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
        } catch (err) {
            console.log('Error: ', err);
        }
    };

    fetchAdvice();
}, [])

  return (
    <div>
      <Flex
        textAlign="center"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg="darkGrayBlue"
        borderRadius="10px"
        h="40vh"
        mt="25vh"
      >
        <Advice />
        <Divider />
      </Flex>
    </div>
  );
};

export default AdviceBox;
