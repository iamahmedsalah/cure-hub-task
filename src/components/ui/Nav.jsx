import { Mail, Bell, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {

	return (
		<nav className='bg-base-100 w-full h-[96px]  '>
			<div className="flex flex-row justify-around items-end flex-nowrap gap-1 mt-5">
				<div>
					<label className="input w-[496px]">
						<svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<g
								strokeLinejoin="round"
								strokeLinecap="round"
								strokeWidth="2.5"
								fill="none"
								stroke="currentColor"
							>
								<circle cx="11" cy="11" r="8"></circle>
								<path d="m21 21-4.3-4.3"></path>
							</g>
						</svg>
						<input className='text-primary' type="search" required placeholder="Search Here...." />
					</label>

				</div>
				<div className="flex flex-row justify-around items-center flex-nowrap gap-7">
					<motion.span
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
						className='text-primary cursor-pointer hover:text-secondary'><Mail /></motion.span>
					<motion.span
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
						className='text-primary cursor-pointer hover:text-secondary'><Bell /></motion.span>
					<div className="avatar flex justify-center items-center flex-nowrap gap-3">
						<div className="w-12 rounded-full ">
							<img src="/Rectangle119.png" />
						</div>
						<span>Dr.Oliver Widson
							<div className='text-sm text-primary'>Manager</div>
						</span>

					</div>
					<div className="dropdown dropdown-center ">
						<div tabIndex={0} role="button" className="btn-base-100 m-1 cursor-pointer text-primary hover:text-secondary"> <ChevronDown /></div>
						<ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
							<li><a>Profile</a></li>
							<li><a>Log Out</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Header;