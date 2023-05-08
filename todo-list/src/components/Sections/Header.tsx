import { Flex, Heading } from "@chakra-ui/react";
const Header = () => {
  return (
    <Flex
      align="center"
      justify="center"
      align-content="center"
      p={3}
      w="100%"
      basis="10%"
      background="red.500"
    >
      <Heading color="whiteAlpha.900">Todoism</Heading>
    </Flex>
  );
};

export default Header;
