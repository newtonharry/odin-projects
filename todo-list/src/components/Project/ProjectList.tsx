import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosRemoveCircle, IoMdAdd } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores/todoStore";
import NavbarLink from "../UI/NavbarLink";
import RotatingArrow from "../UI/RotatingArrow";
import AddProject from "./AddProject";
import EditProject from "./EditProject";

const ProjectList = () => {
  const { projects, removeProject } = useStore();

  const addProjectModal = useDisclosure();
  const editProjectModal = useDisclosure();
  const projectList = useDisclosure();

  let [projectIdBeingEdited, setProjectIdBeingEdited] = useState("");
  let [projectNameBeingEdited, setProjectNameBeingEdited] = useState("");

  const navigate = useNavigate();
  return (
    <>
      <Flex width="100%" justify="space-between" align="center">
        <Box flex="1" onClick={projectList.onToggle}>
          <Flex align="center" gap={2}>
            <RotatingArrow isOpen={projectList.isOpen} />
            Projects
          </Flex>
        </Box>
        <IconButton
          aria-label="add"
          icon={<IoMdAdd />}
          onClick={addProjectModal.onOpen}
        />
      </Flex>
      <Box width="100%">
        <Collapse in={projectList.isOpen} animateOpacity>
          {projects
            .filter((project) => project.id !== "inbox")
            .map((project) => (
              <Flex justify="space-between" align="center">
                <Box flex={1}>
                  <Flex align="center" gap={2}>
                    <NavbarLink
                      icon={<FaCircle />}
                      text={project.name}
                      endpoint={`projects/${project.id}`}
                    />
                  </Flex>
                </Box>
                <Menu>
                  <MenuButton as={IconButton} icon={<HiDotsHorizontal />} />
                  <MenuList>
                    <MenuItem
                      icon={<IoIosRemoveCircle />}
                      onClick={() => {
                        removeProject(project.id);
                        navigate("/", { replace: true });
                      }}
                    >
                      Remove
                    </MenuItem>
                    <MenuItem
                      icon={<MdModeEditOutline />}
                      onClick={() => {
                        setProjectIdBeingEdited(project.id);
                        setProjectNameBeingEdited(project.name);
                        editProjectModal.onOpen();
                      }}
                    >
                      Edit
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            ))}
        </Collapse>
      </Box>
      <AddProject
        isOpen={addProjectModal.isOpen}
        onClose={addProjectModal.onClose}
      />
      <EditProject
        isOpen={editProjectModal.isOpen}
        onClose={editProjectModal.onClose}
        projectId={projectIdBeingEdited}
        projectName={projectNameBeingEdited}
      />
    </>
  );
};

export default ProjectList;
