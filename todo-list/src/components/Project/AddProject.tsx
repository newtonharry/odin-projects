import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useStore } from "../../stores/todoStore";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddProject = ({ isOpen, onClose }: Props) => {
  const { addProject } = useStore();
  const formik = useFormik({
    initialValues: {
      projectName: "",
    },
    onSubmit: (values, { resetForm }) => {
      addProject(values.projectName);
      resetForm();
      onClose();
    },
    validationSchema: Yup.object({
      projectName: Yup.string().required("Required"),
    }),
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>Add Project</ModalHeader>
          <form onSubmit={formik.handleSubmit}>
            <ModalBody>
              <FormControl
                isInvalid={
                  formik.touched.projectName && !!formik.errors.projectName
                }
              >
                <FormLabel>Name</FormLabel>
                <Input
                  id="projectName"
                  name="projectName"
                  type="text"
                  placeholder="Project Name"
                  onChange={formik.handleChange}
                  value={formik.values.projectName}
                />
                <FormErrorMessage>{formik.errors.projectName}</FormErrorMessage>
              </FormControl>
            </ModalBody>
            <ModalFooter gap={4}>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
              <Button
                mt={4}
                colorScheme="blue"
                onClick={() => {
                  formik.resetForm();
                  onClose();
                }}
              >
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default AddProject;
