import {
  Box,
  Button,
  Flex,
  Heading,
  useBoolean,
  VStack,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import AddTodo from "../components/Todo/AddTodo";
import Todo from "../components/Todo/Todo";
import TodoContainer from "../components/Todo/TodoContainer";
import { useStore } from "../stores/todoStore";

export default function Inbox() {
  let { todos } = useStore();

  return <TodoContainer heading="Inbox" projectId="inbox" todos={todos} />;
}
