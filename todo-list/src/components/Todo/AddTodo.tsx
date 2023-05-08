import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useStore } from "../../stores/todoStore";

type Props = {
  projectId: string;
  setNewTodo: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
};

const AddTodo = ({ projectId, setNewTodo }: Props) => {
  let { addTodo } = useStore();
  const formik = useFormik({
    initialValues: {
      description: "",
      due: "",
    },
    onSubmit: (values, { resetForm }) => {
      addTodo(projectId, values.description, values.due);
      resetForm();
      setNewTodo.off();
    },
    validationSchema: Yup.object({
      description: Yup.string().required(),
      due: Yup.string().required(),
    }),
  });

  const cancelTodo = () => {
    formik.resetForm();
    setNewTodo.off();
  };

  return (
    <Box width="100%">
      <form onSubmit={formik.handleSubmit}>
        <Box borderWidth="1px" borderRadius="8px" p={4}>
          <VStack alignItems="flex-start">
            <FormControl
              isInvalid={
                formik.touched.description && !!formik.errors.description
              }
            >
              <Input
                id="description"
                type="text"
                placeholder="e.g. Family lunch on Sunday at 11am"
                {...formik.getFieldProps("description")}
              />
              <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.due && !!formik.errors.due}>
              <Input
                width="auto"
                id="due"
                type="date"
                {...formik.getFieldProps("due")}
              />
              <FormErrorMessage>{formik.errors.due}</FormErrorMessage>
            </FormControl>
          </VStack>
        </Box>
        <Flex gap={2} m={2} justify="flex-end">
          <Button onClick={cancelTodo}>Cancel</Button>
          <Button type="submit" colorScheme="red">
            Add task
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default AddTodo;
