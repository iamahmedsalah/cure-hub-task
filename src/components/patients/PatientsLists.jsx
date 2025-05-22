import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Printer, SquarePen, SquarePlus } from "lucide-react";
import LogoForm from "/Logo-from.png";


const PatientsLists = () => {

    const [patient, setPatient] = useState({
    id: 1,
    patientName: 'Sarah Lawson',
    gender: 'Female',
    department: 'GIT',
    age: 27,
    doctor: 'John Albert',
    time: '1:00 PM - 2:00 PM',
    date: '20 Nov, 2024',
    status: 'approved',
    diagnosis: 'Abdominal pain ',
    symtoms: 'nausea, vomiting',
    rx: 'Take 2 tablets of Omeprazole daily for 2 weeks',
        

    });
    const [showEdit, setShowEdit] = useState(false);
    const [editData, setEditData] = useState(patient);

    const handleEditOpen = () => {
        setEditData(patient);
        setShowEdit(true);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEditSave = (e) => {
        e.preventDefault();
        setPatient(editData);
        setShowEdit(false);
    };

    return (
        <div className="flex flex-row justify-between items-start pt-3 px-8">
            <div className="flex flex-row justify-start items-center flex-nowrap gap-2">
                <h2 className="text-lg  text-secondary ">Patients List</h2>
                <ChevronRight className=" text-secondary" size={16} />
                <p className="text-primary">{patient.pa}</p>
            </div>
            <div className="flex flex-row justify-center items-center flex-nowrap gap-2">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-secondary w-[34px] h-[34px] rounded-[4px] flex justify-center items-center"
                >
                    <Printer className="text-secondary cursor-pointer " size={21} />
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn bg-secondary h-[34px] w-[85px] text-md text-white flex items-center gap-1"
                    onClick={handleEditOpen}
                >
                    <SquarePen size={16} /> Edit
                </motion.button>
            </div>

            {/* Edit Modal */}
            {showEdit && (
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
                        className="bg-base-100 rounded-[8px] p-6 relative  "
                    >
                        <button
                            className="absolute top-10 right-15  cursor-pointer "
                            onClick={() => setShowEdit(false)}
                        >
                            <SquarePlus className="text-secondary" size={20} />
                        </button>
                        <div className="flex flex-col justify-start items-center gap-2 mb-4">
                            <img src={LogoForm} className="w-30" alt="logoform" />
                            <h2 className="text-xl font-semibold mb-4 ">
                                Medical Prescription Form
                            </h2>
                        </div>
                        <form onSubmit={handleEditSave} className="flex flex-col gap-4  w-[454px]">
                            <div className="flex flex-row justify-start items-start flex-nowrap gap-4">
                                <div className="flex-1 min-w-0">
                                    <label className="block text-xs font-bold mb-1">Paitents Name</label>
                                    <input
                                        type="text"
                                        name="patientName"
                                        className="input input-bordered border-secondary w-[310px] focus:outline-none"
                                        value={editData.patientName}
                                        onChange={handleEditChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold mb-1">Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        className="input input-bordered border-secondary focus:outline-none  "
                                        value={editData.date}
                                        onChange={handleEditChange}
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
                                        value={editData.department}
                                        className="input input-bordered border-secondary  focus:outline-none  w-[141px] "
                                        onChange={handleEditChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold mb-1">Age</label>
                                    <input
                                        type="number"
                                        name="age"
                                        className="input input-bordered border-secondary  focus:outline-none w-[141px] "
                                        value={editData.age}
                                        onChange={handleEditChange}
                                        min={0}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold mb-1">Gender</label>
                                    <select
                                        name="gender"
                                        className="input input-bordered border-secondary focus:outline-none w-[141px] "
                                        value={editData.gender}
                                        onChange={handleEditChange}
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
                                    value={editData.symtoms}
                                    className="input input-bordered w-full border-secondary focus:outline-none"
                                    onChange={handleEditChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold mb-1">Diagnosis</label>
                                <input
                                    type="text"
                                    name="diagnosis"
                                    value={editData.diagnosis}
                                    className="input input-bordered w-full border-secondary focus:outline-none"
                                    onChange={handleEditChange}
                                    required
                                />
                            </div>
                                                        <div>
                                <label className="block text-xs font-bold mb-1">RX</label>
                                <input
                                    type="text"
                                    name="rx"
                                    className="input input-bordered w-full border-secondary focus:outline-none h-[110px]"
                                    onChange={handleEditChange}
                                    value={editData.rx}
                                    required
                                />
                            </div>
                            <div className="flex justify-between gap-2 mt-2">
                                
                                <button
                                    type="submit"
                                    className="w-[116px] h-[34px] bg-secondary text-white rounded-[8px] font-semibold disabled:opacity-50 cursor-pointer"
                                    disabled={
                                        !editData.patientName||
                                        !editData.date ||
                                        !editData.age ||
                                        !editData.gender ||
                                        !editData.department ||
                                        !editData.symtoms ||
                                        !editData.diagnosis ||
                                        !editData.rx ||
                                        !editData.doctor
                                    }
                                >
                                    Save
                                </button>
                                <div>
                                    <label className="block text-xs font-bold mb-1">Doctor Signature</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="input input-bordered border-secondary  focus:outline-none"
                                        value={editData.doctor}
                                        onChange={handleEditChange}
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

export default PatientsLists;
