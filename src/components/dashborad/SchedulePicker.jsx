import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import './datepicker-custom.css'; 

const SchedulePicker = () => {
  const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    
    return (
        <div>
            <DatePicker
                swapRange
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                excludeDates={[addDays(new Date(), 1), addDays(new Date(), 6)]}
                selectsRange
                selectsDisabledDaysInRange
                inline
                calendarClassName="bg-base-100 custom-calendar-width"
                dayClassName={date => 
                    (date >= startDate && date <= (endDate || startDate)) 
                        ? "selected-day-custom" 
                        : undefined
                }
                monthClassName={() => "text-secondary font-medium"}
            />
        </div>
    );
};

export default SchedulePicker;