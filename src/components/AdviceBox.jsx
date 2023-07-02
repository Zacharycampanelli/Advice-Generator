import { Divider, Flex } from '@chakra-ui/react';

const AdviceBox = () => {
  return (
    <div>
      <Flex textAlign="center" flexDirection="column" alignItems="center" justifyContent="center" bg="darkGrayBlue" borderRadius="10px" h="40vh" mt="33%">
        <p>ADVICE #117</p>
        <h2 >“It is easy to sit up and take notice, what's difficult is getting up and taking action.”</h2>
        <Divider />
      </Flex>
    </div>
  );
};

export default AdviceBox;
