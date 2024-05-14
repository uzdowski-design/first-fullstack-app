import { Todo as TodoType } from '@/app/page';
import { Button } from './button';

type TodoProps = {
  todo: TodoType;
  handleRemoveTodo: (taskId: number) => void;
};

export const Todo = ({ todo, handleRemoveTodo }: TodoProps) => {
  return (
    <div className="flex flex-row gap-4">
      <li key={todo.id}>{todo.task}</li>
      <Button
        text="X"
        variant="danger"
        onClick={() => handleRemoveTodo(todo.id)}
      />
    </div>
  );
};
