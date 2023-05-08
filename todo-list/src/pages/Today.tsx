import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  useBoolean,
  VStack,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { AiOutlinePlus } from "react-icons/ai";
import AddTodo from "../components/Todo/AddTodo";
import Todo from "../components/Todo/Todo";
import TodoContainer from "../components/Todo/TodoContainer";
import { useStore } from "../stores/todoStore";

export default function Today() {
  let { todos } = useStore();

  return (
    <TodoContainer
      heading="Today"
      todos={todos.filter((todo) => {
        !todo.completed &&
          format(parseISO(todo.due), "yyyy-MM-dd") ===
            format(new Date(), "yyyy-MM-dd");
      })}
    />
  );
}
