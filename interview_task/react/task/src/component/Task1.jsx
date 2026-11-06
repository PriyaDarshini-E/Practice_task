const Task1 = () => {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(num => num * 2);

  return (
      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Doubled Values
        </h1>

        <div className="flex gap-3 justify-center">
          {doubled.map((num, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg" >
              {num}
            </span>
          ))}
        </div>
      </div>
    
  );
};

export default Task1;
