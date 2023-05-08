import {
  Box,
  Button,
  Flex,
  Heading,
  useBoolean,
  VStack,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { Todo as TodoType } from "../../types/Todo";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

type TodoDetails = {
  todos: TodoType[];
  heading: string;
  projectId?: string;
};

export default function TodoContainer(props: TodoDetails) {
  const [newTodo, setNewTodo] = useBoolean(false);
  return (
    <Box width="800px" m={8}>
      <Flex direction="column" align="flex-start" gap={8}>
        <Heading size="lg">{props.heading}</Heading>
        <Box width="100%">
          <VStack width="auto">
            {props.todos.map((todo) => {
              if (todo.projectId === props.projectId && !todo.completed) {
                return <Todo key={todo.id} {...todo} />;
              }
            })}
          </VStack>
          <Box m={2}>
            {newTodo ? (
              <AddTodo
                projectId={props.projectId as string}
                setNewTodo={setNewTodo}
              />
            ) : (
              <Button
                aria-label="Add task"
                leftIcon={<AiOutlinePlus />}
                variant="link"
                _hover={{
                  background: "white",
                  color: "red.500",
                }}
                onClick={setNewTodo.on}
              >
                Add task
              </Button>
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
