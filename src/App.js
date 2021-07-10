import React, { useState } from "react";
import Calendar from "react-calendar";
import Today from "./component/Today";

import "./assets/calendar.css";
import "react-calendar/dist/Calendar.css";

const normalize = (input) => {
  return new Intl.DateTimeFormat("en-GB", {
    month: "long",
    day: "2-digit",
  }).format(input);
};

function App() {
  const [date, onChange] = useState(new Date());

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-7 p-4 bg-tasks">
          <div className="d-flex justify-content-between align-items-center px-1">
            <h4>{normalize(date)}</h4>
            <button type="button" class="btn btn-primary rounded-circle">
              <b>+</b>
            </button>
          </div>
          <hr className="text-muted" />
          <Today />
        </div>
        <div className="col bg-dark Calendar d-flex justify-content-center align-items-start pt-4">
          <Calendar onChange={onChange} value={date} />
        </div>
      </div>
    </div>
  );
}

export default App;
