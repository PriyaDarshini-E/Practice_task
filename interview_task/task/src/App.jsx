import React, { useState } from "react";

const App = () => {
  const [grid, setGrid] = useState([
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
  ]);

  const handleClick = (value) => {
    if (value === 5) {
      // Rotate left
      const newGrid = [...grid.slice(1), grid[0]];
      setGrid(newGrid);
    }
  };

  return (
    <div style={{ width: "120px", display: "grid", gridTemplateColumns: "repeat(3, 40px)" }}>
      {grid.map((num, index) => (
        <button
          key={index}
          onClick={() => handleClick(num)}
          style={{ height: "40px" }}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default App;