import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FilePlus, MoreVertical, X, Check } from 'lucide-react';

import PaitentsPres from './PaitentsPres';

const appointmentsData = [
    {
        id: 1,
        day: 23,
        dayName: 'MON',
        date: '26.12.2020',
        type: 'Examine',
        specialist: 'John Albert',
        status: 'confirmed'
    },
    {
        id: 2,
        day: 19,
        dayName: 'THU',
        date: '26.12.2020',
        type: 'Follow-Up',
        specialist: 'John Albert',
        status: 'canceled'
    },
    {
        id: 3,
        day: null,
        dayName: null,
        date: '26.12.2020',
        type: 'Follow-Up',
        specialist: 'John Albert',
        status: 'pending'
    },
    {
        id: 4,
        day: null,
        dayName: null,
        date: '26.12.2020',
        type: 'Examine',
        specialist: 'John Albert',
        status: 'confirmed'
    },
    {
        id: 5,
        day: null,
        dayName: null,
        date: '26.12.2020',
        type: 'Examine',
        specialist: 'John Albert',
        status: 'confirmed'
    }
];

const PatientsAppointment = () => {
    const [activeTab, setActiveTab] = useState('upcoming');

    return (
        <div className='flex flex-row justify-start items-start px-8 py-4 gap-[24px]'>
            <div className='bg-base-100 flex flex-col rounded-[8px] w-[100%] h-[479px]'>
                <div className="flex flex-row justify-between items-center w-full h-[48px] mt-[23px] px-[24px]">
                    <div className='flex flex-row items-center gap-2 rounded-[4px] bg-base-300 p-1'>
                        <button
                            className={`py-2 px-4 text-sm transition-all rounded-[4px]
                ${activeTab === 'upcoming' ? 'bg-base-100 text-secondary font-semibold' : 'text-primary'}`}
                            onClick={() => setActiveTab('upcoming')}
                        >
                            Upcoming Appointments
                        </button>
                        <button
                            className={`py-2 px-4 text-sm transition-all rounded-[4px]
                ${activeTab === 'past' ? 'bg-base-100 text-secondary font-semibold' : 'text-primary'}`}
                            onClick={() => setActiveTab('past')}
                        >
                            Past Appointments
                        </button>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex gap-2 text-secondary text-sm font-medium cursor-pointer"
                    >
                        <FilePlus size={18} className='text-secondary' />
                        Add Appointment
                    </motion.button>
                </div>

                <div className='mt-4 ml-4 flex-1 overflow-y-auto  bg-base-300 w-[768px]  custom-scrollbar'>
                    <div className="relative pl-8 py-4">
                        {/* Vertical line */}
                        <div className="absolute left-[48px] top-0 bottom-0 w-0.5 bg-primary/40"></div>
                        {appointmentsData.map((appointment, index) => (
                            <div key={appointment.id} className="mb-6 relative">
                                {/* Day marker */}
                                {appointment.day && (
                                    <div className="absolute left-[-24px] top-6 flex flex-col items-center">
                                        <div className="absolute left-[29px] bg-secondary w-6 h-6 rounded-full flex items-center justify-center ">
                                            <div className="bg-white w-2 h-2 rounded-full"></div>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                        <div className="text-sm font-bold">{appointment.day}</div>
                                        <div className="text-xs text-primary">{appointment.dayName}</div>
                                        </div>

                                    </div>
                                )}

                                {/* Appointment card */}
                                <div className="bg-base-100  w-[668px] p-4  mx-10 flex justify-center items-center rounded-[8px] ">
                                    <div className="grid grid-cols-3 gap-4 flex-1">
                                        <div>
                                            <div className="text-xs text-primary">Date</div>
                                            <div className="font-medium">{appointment.date}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-primary">Type</div>
                                            <div className="font-medium">{appointment.type}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-primary">Specialist</div>
                                            <div className="font-medium">{appointment.specialist}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        {appointment.status === 'confirmed' && (
                                            <span className="px-3 py-2 rounded-full bg-green-100 text-green-600 text-xs">
                                                Confirmed
                                            </span>
                                        )}
                                        {appointment.status === 'canceled' && (
                                            <span className="px-3 py-2 rounded-full bg-gray-100 text-primary text-xs">
                                                Canceled
                                            </span>
                                        )}
                                        {appointment.status === 'pending' && (
                                            <div className="flex gap-5">
                                                <button className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center cursor-pointer">
                                                    <Check className="w-5 h-5 text-green-600" />
                                                </button>
                                                <button className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center  cursor-pointer">
                                                    <X className="w-5 h-5 text-red-500" />
                                                </button>
                                            </div>
                                        )}
                                        <MoreVertical className="w-5 h-5 text-primary cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Patient Documents */}
            <div>
                <PaitentsPres />
            </div>
        </div>
    );
};

export default PatientsAppointment;