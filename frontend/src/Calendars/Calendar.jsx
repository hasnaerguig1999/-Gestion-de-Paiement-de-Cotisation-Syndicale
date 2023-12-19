// Calendar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Month from './Month';

const CalendarWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
`;

const Calendar = ({ onMonthChange }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const handleMonthChange = (newMonth) => {
    setSelectedMonth(newMonth);
    if (onMonthChange) {
      onMonthChange(newMonth);
    }
  };

  return (
    <CalendarWrapper>
      <Month selectedMonth={selectedMonth} onMonthChange={handleMonthChange} />
    </CalendarWrapper>
  );
};

export default Calendar;
