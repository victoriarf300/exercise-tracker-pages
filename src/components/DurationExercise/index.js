import React, { useEffect, useState } from "react";

function pad2(n) {
  return String(n).padStart(2, "0");
}

export default function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [running]);

  const mm = Math.floor(seconds / 60);
  const ss = seconds % 60;

  return (
    <div style={{ padding: 20 }}>
      <h1>{name}</h1>

      <p style={{ fontSize: 24 }}>
        Time: {pad2(mm)}:{pad2(ss)}
      </p>

      {!running ? (
        <button onClick={() => setRunning(true)} style={{ marginRight: 10 }}>
          Start
        </button>
      ) : (
        <button onClick={() => setRunning(false)} style={{ marginRight: 10 }}>
          Stop
        </button>
      )}

      <button
        onClick={() => {
          setRunning(false);
          setSeconds(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
