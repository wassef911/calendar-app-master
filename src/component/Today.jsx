import React from "react";

import Get from "../helpers/Get";
import Task from "./Task";

function Today({ addedTasks = [] }) {
  let tasks = [...Get.tasks(), ...addedTasks];
  return (
    <div className="row today">
      <div className="time col-1 d-flex flex-column justify-content-between">
        {Get.time().map((i) => (
          <div className="time-text text-right">{i}</div>
        ))}
      </div>
      <div className="col d-flex flex-column justify-content-between overflow">
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </div>
    </div>
  );
}

export default Today;

/*
row
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
*/
