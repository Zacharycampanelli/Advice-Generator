import { Flex } from '@chakra-ui/react';
import Advice from './Advice';
import Divider from './Divider';
import { useEffect, useState } from 'react';

const AdviceBox = () => {
    const [adviceText, setAdviceText] = useState("");
    const [adviceId, setAdviceId] = useState(0);

  const url = 'https://api.adviceslip.com/advice';

  useEffect(() => {

    const fetchAdvice = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();

            await setAdviceText(json.slip.advice);
            await setAdviceId(json.slip.id)
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
        <Advice adviceText={adviceText} adviceId={adviceId} />
        <Divider />
      </Flex>
    </div>
  );
};

export default AdviceBox;
