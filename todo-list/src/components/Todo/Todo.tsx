import {
  Box,
  Checkbox,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { enAU } from "date-fns/locale";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { useStore } from "../../stores/todoStore";
import { Todo as TodoModel } from "../../types/Todo";

const Todo = ({ id, description, due, completed }: TodoModel) => {
  const { toggleCompletedState } = useStore();
  return (
    <Box width="100%">
      <Flex direction="column" pb={2}>
        <Flex gap={3} align="center">
          <Checkbox
            checked={completed}
            onChange={() => toggleCompletedState(id)}
          />
          <Editable defaultValue={description}>
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Flex>
        <Flex align="center" gap={1} ml={8}>
          <BsFillCalendarEventFill />
          {`${format(parseISO(due), "LLL", { locale: enAU })} ${format(
            parseISO(due),
            "dd",
            { locale: enAU }
          )}`}
        </Flex>
      </Flex>
      <Divider />
    </Box>
  );
};

export default Todo;
