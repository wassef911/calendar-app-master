import React, { useState } from "react";
import Calendar from "react-calendar";
import Get from "./helpers/Get";
import Today from "./component/Today";

import "./assets/calendar.css";
import "react-calendar/dist/Calendar.css";

function App() {
  const [date, onChange] = useState(new Date());
  const [tasks, AddTasks] = useState([]);
  const [task, SetTask] = useState("");
  const [input, showInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.length) AddTasks([...tasks, { name: task }]);
    SetTask("");
  };
  const handleChange = (e) => {
    e.preventDefault();
    SetTask(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row overflow">
        <div className="col-12 col-sm-7 p-4 bg-tasks">
          <div className="d-flex justify-content-between align-items-center px-1">
            <h4>{Get.normalizedDate(date)}</h4>
            <form
              onSubmit={handleSubmit}
              className="d-flex justify-content-center align-items-center"
            >
              <input
                type="text"
                class="form-control form-rounded mx-2"
                placeholder="Add Task"
                onChange={handleChange}
                value={task}
                style={{ opacity: input ? 1 : 0 }}
              />
              <button
                type="submit"
                onClick={() => showInput(!input)}
                className="btn btn-primary rounded-circle "
              >
                <b>+</b>
              </button>
            </form>
          </div>
          <hr className="text-muted" />
          <Today addedTasks={tasks} />
        </div>
        <div className="col bg-dark Calendar d-flex justify-content-center align-items-center pt-4">
          <Calendar onChange={onChange} value={date} />
        </div>
      </div>
    </div>
  );
}

export default App;
