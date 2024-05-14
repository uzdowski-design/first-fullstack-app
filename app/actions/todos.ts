// Mockup data
const INITIAL_TODOS = [
  { id: 1, task: 'Master Next.js' },
  { id: 2, task: 'Learn TypeScript' },
  { id: 3, task: 'Build a Next.js app' }
];

export async function getTodos() {
  // Ideally, fetch todos from a database
  // for now, return a mockup array
  return INITIAL_TODOS;
}

export async function addTodo(task: string) {
  // Logic to add a todo
  // Ideally, save the todo to a database
  return { id: Math.random(), task };
}

export function removeTodo(taskId: number) {
  // Logic to remove a todo
  // Ideally, remove the todo from a database
  return taskId;
}
