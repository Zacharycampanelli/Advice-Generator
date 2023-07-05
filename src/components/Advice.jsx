import { Flex } from "@chakra-ui/react";

const Advice = ({ adviceText, adviceId }) => {

  return (
    <Flex flexDirection='column' justifyContent='space-evenly' minHeight='28vh' >
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
