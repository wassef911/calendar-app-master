import React from "react";

function getRandomColor() {
  const items = [
    "rgba(110, 157, 219, 0.489)",
    "rgba(203, 110, 219, 0.489)",
    "rgba(219, 154, 110, 0.489)",
    "rgba(100, 178, 110, 0.489)",
    "rgba(157, 154, 110, 0.489)",
    "rgba(100, 184, 110, 0.489)",
    "rgba(245, 234, 110, 0.489)",
  ];
  return items[Math.floor(Math.random() * items.length)];
}

function Task({ task }) {
  const color = getRandomColor();
  const [opacity, setOpacity] = React.useState(1);
  return (
    <div
      className="task m-1 d-flex justify-content-between align-items-center px-4"
      style={{
        height: task.hours * 10 * 5,
        borderColor: color,
        backgroundColor: color,
        opacity,
      }}
    >
      <div>{task.name}</div>
      <button
        type="button"
        class="btn remove rounded-circle"
        onClick={() => setOpacity(0)}
      >
        &#10006;
      </button>
    </div>
  );
}

export default Task;
