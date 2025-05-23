
import { NavLink, useLocation } from 'react-router'
import { motion } from 'framer-motion';

import Add from '/add-square.svg'
import Sort from '/sort.svg'

function AppointmentTabs() {
  const location = useLocation()
  const currentPath = location.pathname.split('/').pop() || 'request'

  const tabs = [
    { id: 'request', label: 'Appointments Request', path: '/appointments/request' },
    { id: 'list', label: 'Appointments List', path: '/appointments/list' },
    { id: 'doctors', label: 'Doctor List', path: '/appointments/doctors' },
    { id: 'schedule', label: 'Doctor Schedule', path: '/appointments/schedule' },
  ]

  return (
    <div className="flex gap-4 bg-base-100 rounded-[8px] mx-4 h-[82px] ">
      <div className="flex flex-row justify-around items-center flex-nowrap gap-80">
        <div className='flex flex-row gap-4 mx-5'>
          {tabs.map((tab) => (
            <NavLink
              key={tab.id}
              to={tab.path}
              className={({ isActive }) =>
                (isActive
                  ? 'active text-secondary font-semibold border-b-2 border-secondary flex items-center '
                  : 'text-primary-content flex items-center border-b-2 border-primary/40') +
                ' transition-all duration-200 px-2  pb-1'
              }
            >
              <span className='mb-1 px- '>
                {tab.label}
              </span>


            </NavLink>
          ))}
        </div>
        <div className='flex flex-row gap-2'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-outline border-secondary text-primary hover:bg-base-100" onClick={() => alert('Sort by')}>
            Sort by <img src={Sort} alt="sort" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-secondary text-white text-xs font-semilight"
            onClick={() => alert('Add New')}
          >
            <img src={Add} alt="add-new" />
            Add New
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default AppointmentTabs