import React, {useState} from 'react'

const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat"]

export const Calendar = () => {
  // Get the current date
  const currentDate = new Date();
  const currentDay =  currentDate.getDate();
  // Initialize state for the selected date
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // Calculate the number of days in the selected month
  const numDaysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  // Calculate the first day of the month
  const firstDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay();

  // Initialize an array to hold the days of the month
  const daysOfMonth = [];

  // Loop through the days of the month and add them to the array
  for (let i = 1; i <= numDaysInMonth; i++) {
    daysOfMonth.push(i);
  }

  // Create an array to hold the calendar rows
  const calendarRows = [];

  // Create an array to hold the current week
  let currentWeek = [];

  // Add blank cells for the days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    currentWeek.push(null);
  }

  // Add the days of the month to the current week
  for (let i = 0; i < daysOfMonth.length; i++) {
    currentWeek.push(daysOfMonth[i]);

    // If the current week is complete, add it to the calendar rows and start a new week
    if (currentWeek.length === 7) {
      calendarRows.push(currentWeek);
      currentWeek = [];
    }
  }

  // Add blank cells for the remaining days in the last week
  while (currentWeek.length < 7) {
    currentWeek.push(null);
  }

  // Add the final week to the calendar rows
  calendarRows.push(currentWeek);

  // Handle the previous month button click
  const handlePrevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  };

  // Handle the next month button click
  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  };

  // Render the calendar
  return (
    <div className="max-w-xl mx-auto bg-gray-100 rounded-lg ">
      <div className="flex items-center justify-between mb-4">
        <button
        className="px-4 ml-10 py-2 mt-2 text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none hover:text-xl"
        onClick={handlePrevMonth}>{"<"}</button>
        <h2 className="text-lg font-medium text-gray-900">
            {selectedDate.toLocaleString("default", { month: "long", year: "numeric" })}
        </h2>
        <button 
        className="px-4 mr-10 py-2 mt-2 text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none hover:text-xl"
        onClick={handleNextMonth}>{">"}</button>
      </div>
      <table className="w-full text-center mr-5">
        <thead>
          <tr className="text-gray-500 text-sm">
          {dayOfWeek.map((v,i) => (
            <th className="py-1" key={i}>{v}</th>
          ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {calendarRows.map((week, index) => (
            <tr key={index}>
              {week.map((day, index) => (
                <td className={`${currentDay === day ? "bg-blue-500 text-white rounded-full" : ""}`} key={index}
                onClick={""}>{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




