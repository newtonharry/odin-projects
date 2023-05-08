import { useParams } from "react-router-dom";
import TodoContainer from "../components/Todo/TodoContainer";
import { useStore } from "../stores/todoStore";

const Project = () => {
  let { projectId } = useParams();
  let { projects, todos } = useStore();
  const project = projects.filter((project) => project.id === projectId)[0];

  return (
    <TodoContainer
      heading={project.name}
      projectId={projectId as string}
      todos={todos}
    />
  );
};

export default Project;
