interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo2, "title" | "completed">;

const todo11: TodoPreview = {
  title: "Clean room",
  completed: false,
};
