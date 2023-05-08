import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Content = ({ children }: Props) => {
  return (
    <Flex justify="center" align="flex-start" basis="80%">
      {children}
    </Flex>
  );
};

export default Content;
