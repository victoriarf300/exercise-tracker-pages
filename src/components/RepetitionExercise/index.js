import React, { useState } from "react";

export default function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h1>{name}</h1>

      <p style={{ fontSize: 24 }}>Reps: {count}</p>

      <button onClick={() => setCount((prev) => prev + 1)} style={{ marginRight: 10 }}>
        +1
      </button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
