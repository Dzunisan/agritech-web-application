<<<<<<< HEAD
import React, {useState} from 'react'


export const Calendar = () => {
  // Get the current date
  const currentDate = new Date();

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
        className="px-4 py-2 border rounded-md text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none"
        onClick={handlePrevMonth}>Prev Month</button>
        <h2 className="text-lg font-medium text-gray-900">
            {selectedDate.toLocaleString("default", { month: "long", year: "numeric" })}
        </h2>
        <button 
        className="px-4 py-2 border rounded-md text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none"
        onClick={handleNextMonth}>Next Month</button>
      </div>
      <table className="w-full text-center mr-5">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="py-1">Sun</th>
            <th className="py-1">Mon</th>
            <th className="py-2">Tue</th>
            <th className="py-2">Wed</th>
            <th className="py-2">Thu</th>
            <th className="py-2">Fri</th>
            <th className="py-2">Sat</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {calendarRows.map((week, index) => (
            <tr key={index}>
              {week.map((day, index) => (
                <td key={index}>{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


=======
import React from "react";

const Calendar = () => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date();
  const monthDays = Array.from({ length: 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate() }, (_, i) => i + 1);
  const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() - 1;
  const prevMonthDays = firstDayIndex < 0 ? [] : Array.from({ length: firstDayIndex }, (_, i) => i - new Date(date.getFullYear(), date.getMonth(), 0).getDate() + 1);
  const nextMonthDays = lastDayIndex < 0 ? [] : Array.from({ length: 6 - lastDayIndex }, (_, i) => i + 1);

  const days = [...prevMonthDays, ...monthDays, ...nextMonthDays];

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-4">
      <div className="text-2xl font-bold mb-4">{date.toLocaleString("default", { month: "long" })} {date.getFullYear()}</div>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekdays.map((day) => (
          <div key={day} className="text-center text-gray-700 font-bold">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div key={index} className={`text-center font-bold ${index >= firstDayIndex && index < firstDayIndex + monthDays.length ? "text-gray-900" : "text-gray-500"}`}>{day > 0 ? day : ""}</div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
>>>>>>> 5501338 (Co-authored-by: LANGABOM <LANGABOM@users.noreply.github.com>)
