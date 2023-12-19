
import React from 'react';
import styled from 'styled-components';
import { format, addMonths, subMonths } from 'date-fns';

const MonthWrapper = styled.div`
  margin: 20px;
`;

const MonthHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Month = ({ selectedMonth, onMonthChange }) => {
  const formattedMonth = format(selectedMonth, 'MMMM yyyy');

  const handleNextMonth = () => {
    onMonthChange(addMonths(selectedMonth, 1));
  };

  const handlePrevMonth = () => {
    onMonthChange(subMonths(selectedMonth, 1));
  };

  return (
    <MonthWrapper>
      <MonthHeader>
        <button onClick={handlePrevMonth} id="prev">&lt; Prev</button>
        <h3>{formattedMonth}</h3>
        <button onClick={handleNextMonth}id="next">Next &gt;</button>
      </MonthHeader>
    </MonthWrapper>
  );
};

export default Month;
