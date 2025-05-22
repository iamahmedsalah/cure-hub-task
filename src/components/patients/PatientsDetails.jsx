import React from 'react';
import Avatar from '/patient-avatar.png'

import { motion } from 'framer-motion';
const paitentsData = {
        id: 1,
        name: 'Sarah Larrson',
        gendar: 'Female',
        email: 'sarahlarrson1234@gmail.com',
        birthday: '23.7.1997',
        phone:'(555) 123-4567',
        insurance: 'Med Right',
        registered: '4 Nov.2020',
        maritailStatus: 'Single',
        address: '12 Loran, Alex.',
        postalCode: '5310002',
        }


import PaitentsDocs from './PatientsDocs';


const PatientsDetails = () => {
    return (
        <div className='flex flex-row justify-start items-start px-8 py-4 gap-[24px] '>
            <div className='bg-base-100 flex flex-row justify-start items-start rounded-[8px] w-[100%] h-[327px]  '>
                <div className='flex flex-col justify-center items-center py-5 w-[242px] '>
                    <div className="avatar flex-col justify-center items-center ">
                        <div className="w-24 rounded-full mb-3.5">
                            <img src={Avatar} />
                        </div>
                        <h2 className='text-lg'>{paitentsData.name}</h2>
                        <p className='text-sm text-primary' >{paitentsData.email}</p>
                    </div>
                    <div className="flex w-[194px] h-[49px] flex-row justify-evenly items-center mt-4 ml-4">
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex flex-col justify-center h-[49px] items-center text-secondary font-bold">12
                                <span className='text-sm text-primary font-light'>Post</span>
                            </div>
                            <div className="divider lg:divider-horizontal  px-5 h-[49px]"></div>
                            <div className="flex flex-col justify-center h-[49px] items-center text-secondary font-bold">1
                                <span className='text-sm text-primary font-light'>Upcom</span>
                            </div>
                        </div>
                    </div>
                    <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn bg-secondary text-white font-light text-md w-[194px] h-[38px] rounded-[4px] mt-4">Send Message</motion.button>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className='grid grid-cols-3 grid-rows-3 gap-4 pt-[24px] sm:gap-2 md:gap-4 lg:gap-[40px] xl:gap-[60px] '>
                    <div>
                        <p className='text-primary '>Gender</p>
                        <p className=' font-semibold pt-1 '>{paitentsData.gendar}</p>
                    </div>
                    <div>
                        <p className='text-primary'>Birthday</p>
                        <p className=' font-semibold pt-1'>{paitentsData.birthday}</p>
                    </div>
                    <div>
                        <p className='text-primary'>Phone Number</p>
                        <p className=' font-semibold pt-1'>{paitentsData.phone}</p>
                    </div>
                    <div>
                        <p className='text-primary'>Insurance</p>
                        <p className=' font-semibold pt-1'>{paitentsData.insurance}</p>
                    </div>
                    <div>
                        <p className='text-primary'>Register Date</p>
                        <p className=' font-semibold pt-1'>{paitentsData.registered}</p>
                    </div>
                    <div>
                        <p className='text-primary'>Marital Status</p>
                        <p className=' font-semibold pt-1'>{paitentsData.maritailStatus}</p>
                    </div>
                    <div>
                        <p className='text-primary'>Address</p>
                        <p className=' font-semibold pt-1 '>{paitentsData.address}</p>
                    </div>
                    <div>
                        <p className='text-primary '>Postal Code</p>
                        <p className=' font-semibold pt-1 '>{paitentsData.postalCode}</p>
                    </div>
                </div>
            </div>

            {/* Paitents Docs */}
            <div>
                <PaitentsDocs />
            </div>
        </div>
    );
};

export default PatientsDetails;