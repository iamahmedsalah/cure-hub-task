import React from 'react';
import { motion } from 'framer-motion';

import { MoveDown, MoveUp ,  UsersRound ,UserRoundPlus ,  Stethoscope , UserRoundX  } from 'lucide-react';

import StatCard from '../components/dashborad/StatCard';
import Appointments from "../components/dashborad/AppChart";
import Patient from "../components/dashborad/PatientChart";

const Dashboard = () => {
    return (
		<div className='flex-1 overflow-auto relative z-10'>

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 bg-base-300'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 '
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Appointments' icon={ UsersRound} value='9200' profValue='32' valueIcon={MoveUp}  color='#08F66D' />
					<StatCard name='New Patients'  icon={UserRoundPlus}value='1200'  profValue='20' valueIcon={MoveUp} color='#08F66D' />
					<StatCard name='Total Doctors' icon={Stethoscope }  value='300'  profValue='12'  valueIcon={MoveDown}color='#D20013' />
					<StatCard name='Canceled Appointments' icon={UserRoundX} value='12' profValue='12'  valueIcon={MoveDown} color='#D20013' />
				</motion.div>

				{/* CHARTS */}

				<div className='grid grid-cols-2 grid-rows-1 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8'>
					<Appointments />
					<Patient />
				</div>
			</main>
		</div>
    );
};

export default Dashboard;