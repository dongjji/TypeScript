interface Todo3 {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

// @ts-ignore
type TodoPreview = Omit<Todo3, "description">;

// @ts-ignore
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  // @ts-ignore
  createdAt: 1615544252770,
};

todo;

// @ts-ignore
const todo: TodoPreview;

type TodoInfo = Omit<Todo3, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

todoInfo;
