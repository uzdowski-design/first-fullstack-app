'use client';
import { useState } from 'react';
import { getTodos, addTodo, removeTodo } from '@/app/actions/todos';
import { Button } from '@/components/button';
import { Todo } from '@/components/todo';

export type Todo = {
  id: number;
  task: string;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  async function fetchTodos() {
    const todosFromServer = await getTodos();
    setTodos(todosFromServer);
  }

  async function handleAddTodo(task: string) {
    const newTodo = await addTodo(task);
    setTodos([...todos, newTodo]);
    setNewTask('');
  }

  async function handleRemoveTodo(taskId: number) {
    await removeTodo(taskId);
    setTodos(todos.filter((todo) => todo.id !== taskId));
  }

  async function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <div className="flex flex-col max-w-2xl mx-auto gap-4 p-12">
      <h1 className="text-center">Welcome to Your Next.js To-Do App</h1>
      <Button
        text="Load Todos"
        variant="success"
        onClick={() => fetchTodos()}
      />
      <div className="flex gap-4">
        <input
          className="px-4 py-2 bg-gray-700 rounded-lg"
          type="text"
          placeholder="Add todo"
          value={newTask}
          onChange={(event) => handleInputChange(event)}
        />
        <Button text="Add Todo" onClick={() => handleAddTodo(newTask)} />
      </div>
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} handleRemoveTodo={handleRemoveTodo} />
        ))}
      </ul>
    </div>
  );
}
