import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, SquarePlus } from "lucide-react";

import SchedulePicker from "./SchedulePicker";
import { appointments } from '../../data/appointments'

import DR from "/dr.png";

// Example data for week and month
const weekData = [
	{ name: "Sat.", men: 600, women: 800 },
	{ name: "Sun.", men: 650, women: 400 },
	{ name: "Mon.", men: 310, women: 600 },
	{ name: "Tues.", men: 720, women: 800 },
	{ name: "Wed.", men: 800, women: 900 },
	{ name: "Thurs.", men: 200, women: 100 },
	{ name: "Friday", men: 1000, women: 850 },
];
const monthData = [
	{ name: "January", men: 12000, women: 11000 },
	{ name: "February", men: 13500, women: 12000 },
	{ name: "March", men: 14200, women: 13000 },
	{ name: "April", men: 15000, women: 14000 },
];


const CustomLegend = ({ payload, data }) => {
	const totals = data.reduce(
		(acc, cur) => {
			acc.men += cur.men;
			acc.women += cur.women;
			return acc;
		},
		{ men: 0, women: 0 }
	);
	const total = totals.men + totals.women;
	const menPercent = total ? ((totals.men / total) * 100).toFixed(1) : 0;
	const womenPercent = total ? ((totals.women / total) * 100).toFixed(1) : 0;

	return (
		<ul className="flex justify-center gap-8 mb-4">
			{payload.map((entry, index) => (
				<li key={`item-${index}`} className="flex items-center gap-2">
					<span
						className="inline-block w-4 h-4 rounded"
						style={{ backgroundColor: entry.color }}
					></span>
					<span className="font-semibold text-sm text-primary">
						{entry.value}
						{entry.dataKey === "men" && (
							<span className="ml-1 text-xs text-gray-500">({menPercent}%)</span>
						)}
						{entry.dataKey === "women" && (
							<span className="ml-1 text-xs text-gray-500">({womenPercent}%)</span>
						)}
					</span>
				</li>
			))}
		</ul>
	);
};



const AppChart = () => {
	const [filter, setFilter] = useState("week");
	const salesData = filter === "week" ? weekData : monthData;


	const legendContent = useMemo(
		() => (props) => <CustomLegend {...props} data={salesData} />,
		[salesData]
	);

	return (
		<div className="flex flex-col justify-start items-start flex-nowrap gap-4">
			<motion.div
				className='bg-base-100 bg-opacity-50 w-[720px] h-[310px] rounded-[8px]'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
			>
				<div className="flex justify-evenly items-center pt-4">
					<h2 className='flex text-lg font-medium text-primary '>Appointments By Gender</h2>
					<div className="flex justify-center w-[94px] border-3 border-secondary rounded-[8px] text-secondary">
						<select
							className="relative bg-base-100 text-sm w-[94px] h-[29px] text-center text-secondary rounded-[4px] cursor-pointer focus:outline-none"
							value={filter}
							onChange={e => setFilter(e.target.value)}
						>

							<option value="week">Weekly</option>
							<option value="month">Month</option>

						</select>
					</div>
				</div>
				<div className='h-60 w-[680px]'>
					<ResponsiveContainer width={"100%"} height={"100%"}>
						<BarChart data={salesData}>
							<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
							<XAxis dataKey={"name"} stroke='#9ca3af' />
							<YAxis stroke='#9ca3af' />
							<Tooltip
								contentStyle={{
									backgroundColor: "#00A8B580",
									borderColor: "#4B5563",
								}}
								itemStyle={{ color: "#E5E7EB" }}
							/>
							<h2>dasdsad</h2>
							<Legend content={legendContent} verticalAlign="top" align="center" />
							<Bar
								dataKey='men'
								fill='#00A8B580'
								barSize={10}
								radius={[8, 8, 0, 0]}
								name="Men"
							/>
							<Bar
								dataKey='women'
								fill='#FFA246'
								barSize={10}
								radius={[8, 8, 0, 0]}
								name="Women"
							/>
						</BarChart>
					</ResponsiveContainer>
				</div>
			</motion.div>
			{/* Doctor Schedule */}
			<div className='bg-base-100 bg-opacity-50 w-[720px] h-[360px] rounded-[8px]'>
				<div className="flex flex-row justify-between items-center flex-nowrap gap-2 mx-10 mt-2.5">
					<h2 className='text-lg font-medium  text-primary'>Doctor Schedule</h2>
					<p className="font-bold text-primary cursor-pointer">See More</p>
				</div>
				<div className="flex flex-row justify-between items-center flex-nowrap gap-2 mx-10 mt-2.5">
					<div>
						<SchedulePicker />
					</div>
					<div className="flex flex-col justify-center items-center mr-12">
						<h2 className="text-secondary text-xl mb-10 ">Activity Details</h2>
						<div className="flex flex-col gap-2 h-40 overflow-y-auto pr-2 custom-scrollbar">
							{appointments.map((app, idx) => (
								<div
									key={idx}
									className="flex flex-row items-end gap-2 mr-4"
								>
									<img src={DR} alt="img" />
									<div className="flex flex-col justify-start items-start flex-1 min-w-0 gap-1">
										<p className="font-semibold truncate">{app.doctor}</p>
										<p className="text-xs text-primary">{app.time}</p>
									</div>
									<div className="flex-shrink-0 w-12 flex justify-end">
										<p className="text-amber-500 text-xs">+ {app.department}</p>
									</div>
								</div>
							))}
						</div>
						<div className="mt-5">
							<button className="flex flex-row justify-center items-center w-[117px] h-[33px] border-1 rounded-[4px] cursor-pointer border-secondary bg-base-100">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-plus-icon lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="4" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
								<span className="ml-3">Add New </span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

};
export default AppChart;