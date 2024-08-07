import React from 'react';
import { HiTrash } from 'react-icons/hi';
import { FaCheckSquare, FaRegCheckSquare } from 'react-icons/fa';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  remove: (id: string) => void;
  toggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, remove, toggle }) => {
  return (
    <section>
      <div className="relative container mx-auto mb-1 py-6 px-6 break-words bg-[#ffffffdc] border-2 border-black rounded hover:bg-cyan-100 transition-colors duration-200">
        <button
          onClick={toggle}
          className="absolute top-6 left-4 flex items-center justify-center w-8 h-8 text-gray-500"
        >
          {todo.completed ? (
            <FaCheckSquare className="text-green-500" />
          ) : (
            <FaRegCheckSquare className="text-gray-500" />
          )}
        </button>
        <span className={`ml-12 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
        <button
          onClick={() => remove(todo.id)}
          className="absolute bottom-4 right-4 text-red-500 hover:text-red-700"
        >
          <HiTrash />
        </button>
      </div>
    </section>
  );
};

export default TodoItem;
