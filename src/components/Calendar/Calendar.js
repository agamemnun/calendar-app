import React from "react";
import Day from '../Day';

function Calendar(props) {


  const [days, setDays] = React.useState(() => {
    var date = props.date;
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);

    var daysArr = Array.from({ length: date.getDate() + 1 }, (v, i) => {
      return {
        num: i,
        count: 0
      }
    });

    daysArr.shift();

    return daysArr;
  });

  function handleClick(num) {
    const nextDays = days.map(day => {
      if (day.num != num) {
        return day;
      } else {
        return {
          ...day,
          count: day.count + 1
        };
      }
    });

    setDays(nextDays);
  }



  return (<div className="calendar-wrap">
    {days.map((day) => {
      return <Day key={day.num} day={day} clickHandler={() => handleClick(day.num)} />;
    })}
  </div>);
}

export default Calendar;