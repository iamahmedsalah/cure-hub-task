
import { useState } from 'react'

import { motion } from "framer-motion";


import { X, Check, EllipsisVertical } from 'lucide-react';

function AppointmentList({ appointments }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  // Calculate pagination
  const totalPages = Math.ceil(appointments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const current = appointments.slice(startIndex, startIndex + itemsPerPage);


  // Get current appointments
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentAppointments = appointments.slice(indexOfFirstItem, indexOfLastItem)




  return (
    <div className="bg-base-100 rounded-[8px] transition-colors duration-200  ">
      <div className="overflow-x-auto pt-7 px-7 ">
        <div className="overflow-x-auto ">
          <table className="min-w-full  ">
            <thead className='bg-secondary text-white '>
              <tr>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider rounded-tl-[8px] rounded-bl-[8px]">
                  Patient Name
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                  Doctor
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                  Date
                </th>

                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider rounded-tr-[8px] rounded-br-[8px]">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              {currentAppointments.map((appointment) => (
                <motion.tr
                  key={appointment.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="">
                        <div className="text-sm font-medium">{appointment.patientName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{appointment.gender}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold ">
                      {appointment.department}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold ">
                      {appointment.doctor}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold ">
                      {appointment.time}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold ">
                      {appointment.date}
                    </span>
                  </td>

                  <td className="flex justify-center items-center px-6 py-4  whitespace-nowrap">
                    <span
                      className={` w-[98px] h-[30px] inline-flex text-xs justify-center items-center leading-5 font-semibold rounded-full ${appointment.status === "Confirmed"
                        ? "bg-green-100 text-green-800"
                        : appointment.status === "Pending"
                          ? "bg-yellow-100 text-yellow-500"
                          : "bg-[#F7F7F7] text-primary"
                        }`}
                    >
                      {appointment.status}
                    </span>
                    
                  <td className="flex items-center justify-center px-2 py-4 whitespace-nowrap text-sm text-gray-300">
                    {appointment.status === "Confirmed" || appointment.status === "Canceled" ? (
                      <button
                        className="flex items-center justify-center cursor-pointer w-6 h-6"
                      >
                        <EllipsisVertical className="text-primary"size={24} />
                      </button>
                    ) : (
                      <>
                        <button
                          className="flex items-center justify-center text-green-500 hover:text-green-500 bg-green-100 rounded-full mr-3 cursor-pointer w-6 h-6"
                        >
                          <Check size={18} />
                        </button>
                        <button
                          className="flex items-center justify-center text-red-500 hover:text-red-500 bg-red-100 rounded-full cursor-pointer w-6 h-6"
                        >
                          <X size={18} />
                        </button>
                        <button
                          className="flex items-center justify-center cursor-pointer w-6 h-6 ml-3"
                        >
                          <EllipsisVertical size={24} />
                        </button>
                      </>
                    )}
                  </td>
                  </td>

                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mb-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 mx-1 rounded-[8px] mb-4 cursor-pointer ${currentPage === index + 1
              ? "bg-secondary text-white"
              : "bg-base-300 text-gray-500"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default AppointmentList