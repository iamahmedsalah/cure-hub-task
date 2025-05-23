import React, { useState, useRef } from 'react';
import { FilePlus, FileText, Download, EllipsisVertical,SquareX } from 'lucide-react';

import { motion } from 'framer-motion';

const PDFS = [
    { id: 1, name: 'X-Ray.pdf' },
    { id: 2, name: 'Hematology Report.pdf' },
    { id: 3, name: 'Ultrasound Report.pdf' },
    { id: 4, name: 'Calpsule Report.pdf' },
    { id: 5, name: 'Blood Test Report.pdf' },
    { id: 6, name: 'X-Ray.pdf' },
    { id: 7, name: 'Hematology Report.pdf' },
    { id: 8, name: 'Ultrasound Report.pdf' },
    { id: 9, name: 'Calpsule Report.pdf' },
    { id: 10, name: 'Blood Test Report.pdf' },
    { id: 11, name: 'X-Ray.pdf' },
    { id: 12, name: 'Hematology Report.pdf' },
    { id: 13, name: 'Ultrasound Report.pdf' },
    { id: 14, name: 'Calpsule Report.pdf' },
    { id: 15, name: 'Blood Test Report.pdf' },

];

const PatientsDocs = () => {
    const [pdfs, setPdfs] = useState(PDFS);
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleAddFilesClick = () => setShowModal(true);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        if (selectedFile) {
            setPdfs([...pdfs, { id: pdfs.length + 1, name: selectedFile.name }]);
            setSelectedFile(null);
            setShowModal(false);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedFile(null);
    };

    return (
        <div className='flex flex-col bg-base-100 w-[352px] h-[327px] rounded-[8px]'>
            <div className='flex flex-row justify-between items-center flex-nowrap mt-4 px-4'>
                <h2 className='text-lg font-semibold'>Documents</h2>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='text-secondary text-md font-semibold cursor-pointer flex items-center gap-2'
                    onClick={handleAddFilesClick}
                    type="button"
                >
                    <FilePlus size={18} /> Add Files
                </motion.button>
            </div>
            <div className="flex flex-col h-[197px] overflow-y-auto mt-4 custom-scrollbar ">
                {pdfs.map((pdf, id) => (
                    <React.Fragment key={id}>
                        <div className="flex flex-row items-center gap-2 px-5 py-1">
                            <FileText className="font-light flex-shrink-0" size={18} />
                            <div className="flex flex-col justify-start items-center flex-1 min-w-0">
                                <p className="font-semibold truncate">{pdf.name}</p>
                            </div>
                            <div className="flex gap-2 flex-shrink-0 w-14 justify-end  ">
                                <Download className="text-primary cursor-pointer hover:text-secondary  transition-all duration-75" size={18} />
                                <EllipsisVertical className="text-primary cursor-pointer hover:text-secondary transition-all duration-75" size={18} />
                            </div>
                        </div>
                        {id !== pdfs.length - 1 && (
                            <div className="flex justify-center">
                                <div className="divider my-0 w-[300px]" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <button className="flex flex-col mt-4 text-primary cursor-pointer">See All</button>

            {/* Modal */}
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#EBEAEACC] ">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-base-100 rounded-[8px] p-6 w-[425px] h-[382px] relative">
                        <h1 className='font-semibold'>Upload File</h1>
                        <p className='text-primary'>Attach the file below</p>
                        <button
                            className="absolute top-10 right-5  cursor-pointer "
                            onClick={handleCloseModal}
                        >
                            <SquareX className="text-secondary" size={20} />
                        </button>
                        <form onSubmit={handleUpload} className="flex flex-col items-center gap-4 mt-10 ">
                            <label className="w-full flex flex-col items-center px-4 py-6 bg-base-100 rounded-[8px] tracking-wide  border-2 border-dashed border-secondary cursor-pointer transition">
                                <span className="mt-2 text-center text-sm font-semibold leading-normal">
                                    <FilePlus className=" mx-auto mb-2.5 text-secondary" size={40} />
                                    {selectedFile ? selectedFile.name : "Drage file(s) here to upload"}
                                    <p className='text-xs text-primary'>Alternatively you can select the file by</p>
                                </span>
                                <input
                                    type="file"
                                    className="hidden"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                />
                                <span
                                    className="mt-2 px-4 py-2 text-secondary font-semibold text-sm cursor-pointer"
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    Clickling here
                                </span>
                            </label>
                        </form>
                        <div className='flex flex-row justify-end items-center mt-5 gap-[8px] '>
                            <button
                                type="button"
                                className=" w-[116px] h-[34px] bg-base-100 border-1  text-secondary rounded-[8px] font-semibold cursor-pointer "
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="w-[116px] h-[34px] bg-secondary text-white rounded-[8px] font-semibold disabled:opacity-50 cursor-pointer "
                                disabled={!selectedFile}
                            >
                                Upload File
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default PatientsDocs;