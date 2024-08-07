import React, { useState } from 'react';

interface TodoFormProps {
 addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
 const [text, setText] = useState('');

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (text.trim()) {
   addTodo(text);
   setText('');
  }
 };

 return (
  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mt-6 w-full">
   <input
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    className="p-2 border border-gray-300 rounded-l flex-1"
    placeholder="Add todo"
   />
   <button
    type="submit"
    className="p-2 bg-[hsl(263,90%,53%)] text-white rounded-r flex-shrink-0"
   >
    Add
   </button>
  </form>
 );
};

export default TodoForm;
