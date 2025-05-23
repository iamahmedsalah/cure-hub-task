import React, { useState } from 'react';
import { appointments } from '../../data/appointments';
import { motion } from 'framer-motion';

import { SquareX, NotepadText } from 'lucide-react';
import LogoForm from "/Logo-from.png";

const PaitentsPres = () => {


    const [showAddNew, setShowAddNew] = useState(false);
    const [newPrescription, setNewPrescription] = useState(false);

    const handleAddNewOpen = () => {
        setShowAddNew(true);
    };

    const handleNewPrescriptionChange = (e) => {
        const { name, value } = e.target;
        setNewPrescription((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddPrescription = (e) => {
        e.preventDefault();
        setShowAddNew(false);
    };
    
    return (
        <div className='flex flex-col bg-base-100 w-[352px] h-[479px] rounded-[8px]'>
            <div className='flex flex-row justify-between items-center flex-nowrap mt-4 px-4'>
                <h2 className='flex justify-center items-center text-lg font-semibold'>Prescriptions</h2>
                <motion.button
                    className='flex justify-center items-center gap-2 text-secondary font-semibold cursor-pointer'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={handleAddNewOpen}
                >
                    <NotepadText className='flex' size={18} />
                    Add Prescriptions
                </motion.button>
            </div>
            <div className="flex flex-col overflow-y-auto mt-4 custom-scrollbar">
                {appointments.map((appointment, id) => (
                    <React.Fragment key={id}>
                        <div className="grid grid-cols-3 gap-2 px-4 py-2 w-full">
                            <div className='flex flex-col justify-start items-center'>
                                <p className='text-primary text-sm font-medium mb-1 w-full'>Date</p>
                                <p className='text-sm font-medium w-full '>{appointment.date}</p>
                            </div>
                            <div className='flex flex-col justify-start items-center'>
                                <p className='text-primary text-sm font-medium mb-1 w-full'>Doctor</p>
                                <p className='text-sm font-medium w-full '>{appointment.doctor}</p>
                            </div>
                            <div className='flex flex-col justify-start items-center'>
                                <p className='text-primary text-sm font-medium mb-1 w-full'>Department</p>
                                <p className='text-sm font-medium w-full '>{appointment.department}</p>
                            </div>
                        </div>
                        {id !== appointments.length - 1 && (
                            <div className="px-4">
                                <div className="divider my-0" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <button className="flex flex-col mb-2 text-primary cursor-pointer">See All</button>

            {/* Add New Modal */}
            {showAddNew && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#EBEAEACC]"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-base-100 rounded-[8px] p-6 relative"
                    >
                        <button
                            className="absolute top-10 right-15 cursor-pointer"
                            onClick={() => setShowAddNew(false)}
                        >
                            <SquareX className="text-secondary" size={20} />
                        </button>
                        <div className="flex flex-col justify-start items-center gap-2 mb-4">
                            <img src={LogoForm} className="w-30" alt="logoform" />
                            <h2 className="text-xl font-semibold mb-4">
                                New Medical Prescription
                            </h2>
                        </div>
                        <form onSubmit={handleAddPrescription} className="flex flex-col gap-4 w-[454px]">
                            <div className="flex flex-row justify-start items-start flex-nowrap gap-4">
                                <div className="flex-1 min-w-0">
                                    <label className="block text-xs font-bold mb-1">Paitents Name</label>
                                    <input
                                        type="text"
                                        name="patientName"
                                        className="input input-bordered border-secondary w-[310px] focus:outline-none"
                                        value={newPrescription.patientName}
                                        onChange={handleNewPrescriptionChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold mb-1">Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        className="input input-bordered border-secondary focus:outline-none"
                                        value={newPrescription.date}
                                        onChange={handleNewPrescriptionChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row justify-start items-start flex-nowrap gap-4">
                                <div>
                                    <label className="block text-xs font-bold mb-1">Speciailty</label>
                                    <input
                                        type="text"
                                        name="department"
                                        value={newPrescription.department}
                                        className="input input-bordered border-secondary focus:outline-none w-[141px]"
                                        onChange={handleNewPrescriptionChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold mb-1">Age</label>
                                    <input
                                        type="number"
                                        name="age"
                                        className="input input-bordered border-secondary focus:outline-none w-[141px]"
                                        value={newPrescription.age}
                                        onChange={handleNewPrescriptionChange}
                                        min={0}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold mb-1">Gender</label>
                                    <select
                                        name="gender"
                                        className="input input-bordered border-secondary focus:outline-none w-[141px]"
                                        value={newPrescription.gender}
                                        onChange={handleNewPrescriptionChange}
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold mb-1">Symptoms</label>
                                <input
                                    type="text"
                                    name="symtoms"
                                    value={newPrescription.symtoms}
                                    className="input input-bordered w-full border-secondary focus:outline-none"
                                    onChange={handleNewPrescriptionChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold mb-1">Diagnosis</label>
                                <input
                                    type="text"
                                    name="diagnosis"
                                    value={newPrescription.diagnosis}
                                    className="input input-bordered w-full border-secondary focus:outline-none"
                                    onChange={handleNewPrescriptionChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold mb-1">RX</label>
                                <input
                                    type="text"
                                    name="rx"
                                    className="input input-bordered w-full border-secondary focus:outline-none h-[110px]"
                                    onChange={handleNewPrescriptionChange}
                                    value={newPrescription.rx}
                                    required
                                />
                            </div>
                            <div className="flex justify-between gap-2 mt-2">
                                <button
                                    type="submit"
                                    className="w-[116px] h-[34px] bg-secondary text-white rounded-[8px] font-semibold disabled:opacity-50 cursor-pointer"
                                    disabled={
                                        !newPrescription.patientName ||
                                        !newPrescription.date ||
                                        !newPrescription.age ||
                                        !newPrescription.gender ||
                                        !newPrescription.department ||
                                        !newPrescription.symtoms ||
                                        !newPrescription.diagnosis ||
                                        !newPrescription.rx ||
                                        !newPrescription.doctor
                                    }
                                >
                                    Save
                                </button>
                                <div>
                                    <label className="block text-xs font-bold mb-1">Doctor Signature</label>
                                    <input
                                        type="text"
                                        name="doctor"
                                        className="input input-bordered border-secondary focus:outline-none"
                                        value={newPrescription.doctor}
                                        onChange={handleNewPrescriptionChange}
                                        required
                                    />
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default PaitentsPres;