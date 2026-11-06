import React from 'react';

const Task2 = () => {
  const curryear = new Date().getFullYear()
  return (
    
      <h1 className="text-3xl font-bold text-blue-600 text-center">
        Current Year: {curryear}
      </h1>
    
  );
};

export default Task2;