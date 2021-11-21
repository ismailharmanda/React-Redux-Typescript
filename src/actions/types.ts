import { FetchTodosAction, DeleteTodoAction, deleteTodo } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
