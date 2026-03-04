import React, { useState } from "react";
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";

const EXERCISES = [
  { name: "Push Ups", type: "repetition" },
  { name: "Running", type: "duration" },
  { name: "Plank", type: "duration" },
];

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  let screen = (
    <div style={{ padding: 20 }}>
      <h1>Exercise Tracker</h1>
      <p>Select an exercise:</p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {EXERCISES.map((ex) => (
          <button
            key={ex.name}
            onClick={() => setSelectedExercise(ex)}
            style={{ padding: "10px 14px" }}
          >
            {ex.name}
          </button>
        ))}
      </div>
    </div>
  );

  if (selectedExercise) {
    if (selectedExercise.type === "repetition") {
      screen = <RepetitionExercise name={selectedExercise.name} />;
    } else {
      screen = <DurationExercise name={selectedExercise.name} />;
    }
  }

  return screen;
}
