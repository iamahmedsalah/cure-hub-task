import React, { useState, useEffect } from 'react';
import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, addDays } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './doctor-shedule-custom.css';
import enUS from 'date-fns/locale/en-US';
import Avatar from '/public/dr.png';

import { doctorEvents } from '../../data/appointments';



const locales = {
    'en-US': enUS
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});



const DoctorScheduleCalendar = ({selectedDate = new Date(), selectedSpecialty = 'All' }) => {


     const [events, setEvents] = useState(() => {
    // Filter events based on selected specialty if one is chosen
    if (selectedSpecialty === 'All') {
      return doctorEvents;
    } else {
      return doctorEvents.filter(event => event.specialty === selectedSpecialty);
    }
  });

    useEffect(() => {
    if (selectedSpecialty === 'All') {
      setEvents(doctorEvents);
    } else {
      setEvents(doctorEvents.filter(event => event.specialty === selectedSpecialty));
    }
  }, [selectedDate, selectedSpecialty]);

    // Custom toolbar without navigation buttons
    const CustomToolbar = (toolbar) => {
        return null;
    };


    // Department/specialty color mapping
const specialtyColors = {
    'Dentist': '#FFDAB9', // Peach
    'GP': '#D0F0C0',      // Light green
    'GIT': '#ADD8E6',     // Light blue
    'ENT': '#E6E6FA',     // Lavender
    'Ortho': '#FFFACD'    // Light yellow
};

    // Custom event styling based on doctor specialty
    const eventStyleGetter = (event) => {
        const backgroundColor = specialtyColors[event.specialty];

        return {
            style: {
                backgroundColor,
                borderRadius: '4px',
                opacity: 0.9,
                color: '#333',
                border: '0px',
                display: 'block'
            }
        };
    };

    const darkenColor = (color, amount = 40) => {
        // Convert hex to RGB
        let r = parseInt(color.substring(1, 3), 16);
        let g = parseInt(color.substring(3, 5), 16);
        let b = parseInt(color.substring(5, 7), 16);

        // Darken each component
        r = Math.max(0, r - amount);
        g = Math.max(0, g - amount);
        b = Math.max(0, b - amount);

        // Convert back to hex
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };


    // Custom event component to show doctor image and info
    const EventComponent = ({ event }) => {
        const baseColor = specialtyColors[event.specialty];
        const textColor = darkenColor(baseColor, 80); 

        return (
            <div className="mt-2">
                <div className="flex flex-col items-start w-full">
                    <div className="mb-1 pl-2">
                        <img
                            src={Avatar}
                            alt={event.doctor}
                            className="rounded-full border-1 border-neutral-700 w-[32px] h-[32px]"
                        />
                    </div>
                    <div className="w-full text-left pl-2">
                        <div className="time text-sm " style={{ color: textColor }}>
                            {format(event.start, 'h:mm a')} - {format(event.end, 'h:mm a')}
                        </div>
                        <div className="font-semibold" style={{ color: textColor }}>
                            {event.title}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="calendar-container bg-white rounded-lg p-4 shadow-sm">
            <Calendar
                localizer={localizer}
                events={events}
                defaultView={Views.MONTH}
                views={['month']}
                step={60}
                defaultDate={selectedDate}
                date={selectedDate}
                showMultiDayTimes
                eventPropGetter={eventStyleGetter}
                components={{
                    event: EventComponent,
                    toolbar: CustomToolbar
                }}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 650 }}
                dayLayoutAlgorithm="no-overlap"
                className="doctor-calendar"
            />
        </div>
    );
};

export default DoctorScheduleCalendar;