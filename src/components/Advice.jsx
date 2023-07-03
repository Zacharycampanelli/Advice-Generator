import { Flex } from "@chakra-ui/react";

const Advice = ({ adviceText, adviceId }) => {

  return (
    <Flex flexDirection='column' justifyContent='space-evenly' height='30vh' >
      <p>ADVICE # {adviceId}</p>
      <h2>
        {' '}
        &quot;
        {adviceText}
        &quot;
      </h2>
    </Flex>
  );
};

export default Advice;
