import React from "react";

function Day(props) {
  return (<div className="day" onClick={props.clickHandler}>
    <span className="day-number">{props.day.num}</span>
    <span>{props.day.count}</span>
  </div>);
}

export default Day;