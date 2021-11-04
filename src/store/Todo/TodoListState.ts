import { TodoListData } from "data/todoListData";
import { atom } from "recoil";
import { Todo } from "types/Todo";

export const todoListState = atom<Todo[]>({
  key: "todoList",
  // 初期値として3件のタスクを持つ配列を宣言
  default: TodoListData,
});
