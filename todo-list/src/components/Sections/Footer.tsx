import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      background="blackAlpha.900"
      justify="center"
      align="center"
      basis="10%"
      width="100%"
    >
      <Text fontSize="1.5rem" color="gray.50">
        Todo App ©2022
      </Text>
    </Flex>
  );
};

export default Footer;
