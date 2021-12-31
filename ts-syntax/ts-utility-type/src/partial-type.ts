interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo10: Partial<Todo> = {
  title: "Hello",
  // @ts-ignore
  what: "World", // error
};

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
updateTodo(todo1, todo10);
updateTodo(todo1, todo1);

const todo2 = {};
updateTodo(todo1, todo2);

const todo3 = {
  description: "Hello",
};
updateTodo(todo1, todo3);

const todo4 = {
  title: "hello",
};
updateTodo(todo1, todo4);

const todo5 = {
  title: "Hello",
  description: "World",
};
updateTodo(todo1, todo5);

const todo6 = {
  description: "World",
  more: "More Thing",
};
updateTodo(todo1, todo6);

const todo7 = {
  title: "Hello",
  description: "World",
  more: "More Thing",
  title2: "Hellllllo",
};
updateTodo(todo1, todo7);

const todo8 = updateTodo(todo1, {
  description: "throw out trash",
});
updateTodo(todo1, todo8);

const todo9 = {
  more: "More Thing",
  title2: "Hellllllloo",
};
// updateTodo(todo1, todo9); // error
