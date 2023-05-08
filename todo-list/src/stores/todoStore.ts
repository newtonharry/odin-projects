import { v4 as uuid } from "uuid";
import create from "zustand";

import { Project } from "../types/Project";
import { Todo } from "../types/Todo";

type TodoState = {
  projects: Project[];
  addProject: (name: string) => void;
  editProject: (id: string, newName: string) => void;
  removeProject: (id: string) => void;
  todos: Todo[];
  addTodo: (projectName: string, description: string, due: string) => void;
  removeTodo: (id: string) => void;
  toggleCompletedState: (id: string) => void;
};

export const useStore = create<TodoState>((set) => ({
  projects: [{ id: "inbox", name: "Inbox" }],
  addProject: (name: string) => {
    set((state) => ({ projects: [...state.projects, { id: uuid(), name }] }));
  },
  editProject: (id: string, newName: string) => {
    set((state) => {
      return {
        projects: state.projects.map((project) =>
          project.id !== id ? project : { id, name: newName }
        ),
      };
    });
  },
  removeProject: (id: string) => {
    set((state) => ({
      projects: state.projects.filter((project) => project.id !== id),
      todos: state.todos.filter((todo) => todo.projectId !== id),
    }));
  },
  todos: [],
  addTodo: (projectId: string, description: string, due: string) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          projectId: projectId,
          id: uuid(),
          description,
          completed: false,
          due: due,
        } as Todo,
      ],
    }));
  },
  removeTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  toggleCompletedState: (id: string) => {
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  },
}));
