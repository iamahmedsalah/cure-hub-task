import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { addDays, format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

const MonthPickerButton = ({ selectedDate = new Date(), viewMode = 'month', onChange }) => {
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const [startDate, setStartDate] = useState(selectedDate);
    const [endDate, setEndDate] = useState(null);
    const [currentViewMode, setCurrentViewMode] = useState(viewMode); 

    const pickerRef = useRef(null);


    useEffect(() => {
        setStartDate(selectedDate);
    }, [selectedDate]);

    // Format the display 
    const getDisplayText = () => {
        if (currentViewMode === 'day') {
            if (endDate) {
                return `${format(startDate, 'MMM d')} - ${format(endDate, 'MMM d')}`;
            }
            return format(startDate, 'MMM d, yyyy');
        } else {
            return format(startDate, 'MMMM yyyy');
        }
    };

    const handleChange = (dates) => {
        if (currentViewMode === 'day') {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
            if (onChange) {
                onChange(start, currentViewMode, end);
            }
        } else {
            setStartDate(dates);
            if (onChange) {
                onChange(dates, currentViewMode);
            }
        }
    };

    const handleViewModeChange = (mode) => {
        setCurrentViewMode(mode);
    };

    // Close the picker when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                setIsPickerOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={pickerRef}>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-secondary text-white text-sm font-medium flex gap-4"
                onClick={() => setIsPickerOpen(!isPickerOpen)}
            >
                <div className="flex items-center space-x-2">
                    <span>{getDisplayText()}</span>
                    <Calendar size={18} />
                </div>
            </motion.button>

            {isPickerOpen && (
                <div className="absolute top-full left-0 mt-1 z-50 bg-white rounded-lg shadow-lg p-4 ">
                    <div className="flex justify-between items-center mb-4 ">
                        <h3 className="font-medium text-sm text-primary">
                            {currentViewMode === 'day' ? 'Select Day(s)' : 'Select Month'}
                        </h3>
                        <div >
                            <a
                                className={`tab tab-sm text-white ${currentViewMode === 'day' ? 'bg-secondary rounded-[8px] text-white' : ''}`}
                                onClick={() => handleViewModeChange('day')}
                            >
                                Day
                            </a>
                            <a
                                className={`tab tab-sm text-white ${currentViewMode === 'month' ? 'bg-secondary rounded-[8px] text-white' : ''}`}
                                onClick={() => handleViewModeChange('month')}
                            >
                                Month
                            </a>
                        </div>
                    </div>

                    {currentViewMode === 'day' ? (
                        <DatePicker
                            selected={startDate}
                            onChange={handleChange}
                            startDate={startDate}
                            endDate={endDate}
                            excludeDates={[addDays(new Date(), 1), addDays(new Date(), 6)]}
                            selectsRange
                            selectsDisabledDaysInRange
                            inline
                            calendarClassName="bg-base-100 "
                            dayClassName={date =>
                                (date >= startDate && date <= (endDate || startDate))
                                    ? "selected-day-custom"
                                    : undefined
                            }
                            monthClassName={() => "text-secondary font-medium"}
                        />
                    ) : (
                        <DatePicker
                            selected={startDate}
                            onChange={handleChange}
                            dateFormat="MMMM yyyy"
                            showMonthYearPicker
                            inline
                            calendarClassName="bg-base-100 "
                            monthClassName={() => " py-2 bg-primary/30 rounded-[8px] font-medium"}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default MonthPickerButton;