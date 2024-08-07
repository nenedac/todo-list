import React from 'react';
import { HiMenu } from 'react-icons/hi';

const Navbar: React.FC = () => {
 return (
  <div className="bg-[hsl(263,90%,53%)] p-4 w-full">
   <div className="container mx-auto flex items-center">
    {/* Flex container for left-aligned items */}
    <div className="flex items-center space-x-4">
     {/* Menu Icon */}
     <a href="/" className="text-white text-2xl cursor-pointer">
      <HiMenu />
     </a>
     {/* Text */}
     <span className="text-white font-extrabold tracking-tight text-2xl">
      React Todos
     </span>
    </div>
   </div>
  </div>
 );
};

export default Navbar;
