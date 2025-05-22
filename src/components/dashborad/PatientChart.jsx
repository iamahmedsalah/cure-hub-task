import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import { ChevronRight } from "lucide-react";

import Body from '/body.png'
import A from '/1.svg'
import B from '/2.svg'
import C from '/3.svg'
import D from '/4.svg'
import F from '/5.svg'


const data = [
	{ name: 'General Physician', value: 35, img: <img src={B} alt="stethoscope" /> },
	{ name: 'ENT', value: 15, img: <img src={D} alt="ent" /> },
	{ name: 'Orthopedic', value: 10, img: <img src={A} alt="Orthopedic" /> },
	{ name: 'Dentist', value: 25, img: <img src={F} alt="Dentist" /> },
	{ name: 'Cardiology', value: 5, img: <img src={C} alt="Cardiology" /> },
];
const COLORS = ['#00A8B5', '#9747FF', '#76CAD1', '#F7912C', '#FFCC00'];

const PatientChart = () => {
	return (
		<motion.div
			className='bg-base-100 bg-opacity-50 ml-36 w-[446px] h-[689px] rounded-[8px]'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<div className="flex flex-row justify-around items-end flex-nowrap gap-4 mt-2.5">
				<h2 className='text-lg font-medium  text-primary
				'>Top Patient Department</h2>
				<p className="font-bold text-primary cursor-pointer">See More</p>
			</div>
			<div className='h-80 relative'>
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={800} height={400}>
						<Pie
							data={data}
							cx="50%"
							cy="50%"
							innerRadius={60}
							outerRadius={80}
							fill="#8884d8"
							paddingAngle={0.1}
							dataKey="value"
						>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
				<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none animate-pulse bg-base-300 rounded-full">
					<img src={Body} alt="body" />
				</span>
			</div>
			{/* Custom Legend */}
			<div className="flex flex-col justify-evenly items-start gap-4 mt-6 mx-9 w-full">
				{data.map((item, index) => (
					<div key={item.name} className="flex items-center gap-2 w-full relative">
						<div
							className="inline-flex items-center justify-center w-10 h-10 rounded-full"
							style={{ backgroundColor: COLORS[index % COLORS.length] }}
						>
							{item.img}
						</div>
						<div>
							<p className="text-sm text-primary font-medium">{item.name}</p>
							<span className="text-xs text-gray-500">{item.value}%</span>
						</div>
						<span className="absolute right-20 cursor-pointer">
							<ChevronRight className="text-primary" />
						</span>
					</div>
				))}
			</div>
		</motion.div>
	);
};
export default PatientChart;