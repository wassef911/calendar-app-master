import React from "react";
import Task from "./Task";

const tasks = [
  { name: "Coutts persona appointement", hours: 1 },
  { name: "Board of directores meeting", hours: 3 },
  { name: "Design workshop with John Lewis", hours: 3 },
];
const time = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];
function Today() {
  return (
    <div className="row">
      <div className="time col-1 d-flex flex-column justify-content-between ">
        {time.map((i) => (
          <div className="time-text">{i}</div>
        ))}
      </div>
      <div className="col d-flex flex-column justify-content-between ">
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </div>
    </div>
  );
}

export default Today;
