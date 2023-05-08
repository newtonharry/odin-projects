import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "../Sections/Footer";
import Header from "../Sections/Header";

type Props = {
  children: ReactNode;
};

const LandingLayout = ({ children }: Props) => {
  return (
    <Flex direction="column" align="center" height="100vh">
      <Header />
      <Flex basis="80%" width="100%">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default LandingLayout;
