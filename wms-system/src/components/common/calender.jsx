import React from "react";
import Calendar from 'react-calendar';
function Calender(){
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <>
      <Calendar onChange={handleDateChange} value={date} />
    </>
  );
};

export default Calender;
