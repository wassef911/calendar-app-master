import React from "react";
import Draggable from "react-draggable";
import Get from "../helpers/Get";

function Task({ task }) {
  const color = Get.color();
  const [opacity, setOpacity] = React.useState(1);

  return (
    <Draggable
      axis="y"
      handle=".task"
      defaultPosition={{ x: 0, y: 0 }}
      grid={[10, 10]}
      scale={1}
    >
      <div
        key={task.id ? task.id : 0}
        className="task m-1 d-flex justify-content-between align-items-center px-4 "
        style={{
          height: task.hours ? task.hours * 10 * 5 : 50,
          borderColor: color,
          backgroundColor: color,
          opacity,
        }}
      >
        <div>{task.name}</div>
        <button
          type="button"
          className="btn remove rounded-circle"
          onClick={() => setOpacity(0)}
        >
          &#10006;
        </button>
      </div>
    </Draggable>
  );
}

export default Task;
