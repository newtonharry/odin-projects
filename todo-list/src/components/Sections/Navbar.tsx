import { Divider, Flex } from "@chakra-ui/react";
import { AiOutlineInbox } from "react-icons/ai";
import { MdOutlineToday, MdOutlineUpcoming } from "react-icons/md";
import ProjectList from "../Project/ProjectList";
import NavbarLink from "../UI/NavbarLink";

const Navbar = () => {
  return (
    <Flex
      direction="column"
      basis="20%"
      align="center"
      background="gray.100"
      p={8}
      gap={2}
    >
      <NavbarLink text="Inbox" endpoint="inbox" icon={<AiOutlineInbox />} />
      <Divider />
      <NavbarLink text="Today" endpoint="today" icon={<MdOutlineToday />} />
      <Divider />
      <NavbarLink
        text="Upcoming"
        endpoint="upcoming"
        icon={<MdOutlineUpcoming />}
      />
      <Divider />
      <ProjectList />
    </Flex>
  );
};

export default Navbar;
