import React, { useState } from "react";
import { motion } from "framer-motion";

import { Routes, Route, Navigate } from 'react-router'
import Tabs from "../components//appointments/AppointmentTabs";
import AppointmentList from "../components/appointments/AppointmentList";
import DoctorScheduleCalendar from "../components/appointments/DoctorScheduleCalendar";
import MonthPickerButton from '../components/appointments/MonthPickerButton';
import { appointments } from '../data/appointments'


import { Edit ,Calendar } from "lucide-react";


function AppointmentRequests() {
  return (
    <div>
      <AppointmentList
        appointments={appointments.filter(a => a.status === 'Pending')}
      />
    </div>
  )
}

function AppointmentsList() {
  return (
    <div>
      <AppointmentList appointments={appointments.filter(a => a.status === 'Confirmed' || a.status === 'Canceled')} 
        />
    </div>
  )
}

function DoctorList() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Doctor List</h2>
      <div className="bg-white rounded-lg shadow-card p-4 dark:bg-gray-800">
        <p className="text-gray-500 dark:text-gray-400">Doctor list will be implemented here</p>
      </div>
    </div>
  )
}

function DoctorSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month'); // Default to month view

  const handleMonthChange = (date, mode) => {
    setSelectedDate(date);
    if (mode) {
      setViewMode(mode);
    }
  };


  return (
    <div>
      <div className='flex flex-row gap-2  mb-4'>
        <MonthPickerButton   
          selectedDate={selectedDate} 
          viewMode={viewMode}
          onChange={handleMonthChange}/>


        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-outline border-secondary text-neutral-800 " onClick={() => alert('Sort by')}>
          <Edit size={18}/> Edit 
        </motion.button>
      </div>
      <DoctorScheduleCalendar />
    </div>
  )
}

const Appointments = () => {
  return (
    <div className="flex flex-col gap-4 bg-base-300 pt-2">

      <Tabs />
      <div className="px-4">
        <Routes>
          <Route path="/" element={<Navigate to="request" replace />} />
          <Route path="request" element={<AppointmentRequests />} />
          <Route path="list" element={<AppointmentsList />} />
          <Route path="doctors" element={<DoctorList />} />
          <Route path="schedule" element={<DoctorSchedule />} />
        </Routes>
      </div>
    </div>

  )
};

export default Appointments;