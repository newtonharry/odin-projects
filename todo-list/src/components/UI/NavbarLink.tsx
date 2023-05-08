import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

type NavbarLinkProps = {
  text: string;
  endpoint: string;
  icon?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
};

const NavbarLink = ({ text, endpoint, icon }: NavbarLinkProps) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      _hover={{ background: "blackAlpha.100" }}
      to={`/${endpoint}`}
      as={NavLink}
      width="100%"
      borderRadius="8px"
      p={1}
    >
      <Flex justify="flex-start" align="center">
        {icon && <Box mr={2}>{icon}</Box>}
        {text}
      </Flex>
    </Link>
  );
};

export default NavbarLink;
