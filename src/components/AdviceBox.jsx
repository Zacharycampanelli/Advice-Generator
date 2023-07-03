import { Flex } from '@chakra-ui/react';
import Advice from './Advice';
import Divider from './Divider';
import { useEffect, useState } from 'react';
import Button from './Button';

const AdviceBox = () => {
  const [adviceText, setAdviceText] = useState('');
  const [adviceId, setAdviceId] = useState(0);

  const url = 'https://api.adviceslip.com/advice';

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setAdviceText(json.slip.advice);
        setAdviceId(json.slip.id);
      } catch (err) {
        console.log('Error: ', err);
      }
    };

    fetchAdvice();
  }, []);

  return (
    <Flex
      textAlign="center"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="darkGrayBlue"
      borderRadius="10px"
      h="max-content"
      mt="15vh"
      py={10}
      px={1}
      pos="relative"
    >
      <Advice adviceText={adviceText} adviceId={adviceId} />
      <Divider />
      <Button />
    </Flex>
  );
};

export default AdviceBox;
