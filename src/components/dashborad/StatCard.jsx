import { motion } from "framer-motion";
import bgCard from "/bg-card.png";

const StatCard = ({ name, icon: Icon, value, color, profValue, valueIcon: ValueIcon }) => {
  return (
    <motion.div
      className="relative bg-base-100 rounded-[8px] hover:bg-secondary overflow-hidden group"
      whileHover={{ scale: 1.02 }}
    >
      {/* bg Crad */}
      <img
        src={bgCard}
        alt="bg-card"
        className="absolute right-0 top-0 w-24 pointer-events-none select-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10 px-4 py-5 group-hover:text-white">
        <div className="text-secondary group-hover:text-white"> 
          <Icon size={32} className="mb-3 group-hover:text-white" />
          <span className={`flex items-center text-xl font-normal ${color} group-hover:text-white`}>
            {name}
          </span>
        </div>
        <div className="text-black group-hover:text-white">
          <div className="flex flex-row justify-between items-center mt-3.5 gap-2 ">
            <p className="text-xl font-semibold group-hover:text-white">{value}</p>
            <div className="flex flex-row justify-end items-center gap-2 ">
              <p className="flex text-xs font-light group-hover:text-white">
                <span>Last Week&nbsp;</span>
                {profValue >= 20 ? (
                  <span className="text-[#08F66D] ">+{profValue}%</span>
                ) : (
                  <span className="text-[#D20013] ">-{profValue}%</span>
                )}
              </p>
              <ValueIcon size={12} className="group-hover:text-white" style={{ color }} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default StatCard;