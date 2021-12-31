interface TodoList {
  title: string;
}

const todoList: Readonly<TodoList> = {
  title: "Study Hard and Eat Hard",
};

// @ts-ignore
todoList.title = "Do not study hard";
