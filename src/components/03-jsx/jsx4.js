import React from "react";

const Jsx4 = () => {
  const names = ["Ali", "Veli", "Ayşe"];


  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Jsx4;
