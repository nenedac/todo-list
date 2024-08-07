import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const data = localStorage.getItem('todos');
    if (data) {
      try {
        setTodos(JSON.parse(data) as Todo[]);
      } catch {
        setTodos([]);
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isMounted]);

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { text, id: crypto.randomUUID(), completed: false },
    ]);
  };

  return (
    <div className="flex flex-col items-center m-3">
      <h1 className="text-4xl font-bold mb-10 text-[hsl(172,60%,50%)]">Todos</h1>
      <div className="w-full max-w-m text-2xl font-bold mb-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            remove={removeTodo}
            toggle={() => toggleTodo(todo.id)}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default TodoList;
