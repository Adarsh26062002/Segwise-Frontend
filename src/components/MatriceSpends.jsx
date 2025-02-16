// import React from 'react'
// import { FaPlus } from "react-icons/fa6";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import OptionMatrices from './OptionMatrices';


// const MetricsSpends = () => {
//     return (
//         <>
//             <div className='relative'>
//                 <div className='h-auto cursor-default  absolute top-[30px] left-[-120px]  flex-col  w-[360px] p-[15px]  flex items-center justify-center bg-white border border-gray-200 rounded-xl'>
//                     <div className='  w-full bg-[#F6FDED] p-[10px]  rounded-xl border border-gray-200 font-light text-black flex items-center  shadow-sm '><FaPlus className='bg-[#E3FA99] border text-gray-500 border-gray-300 p-[2px] rounded-md mr-[5px]' /> Add Filter </div>

//                     <div className=' relative p-[10px] w-full border rounded-lg mt-[10px] border-gray-200' >
//                         <div className='flex gap-[10px] mt-[8px] rounded-xl  border-gray-200'>
//                             <div className='flex items-center justify-center'> <p>Metrics</p> <MdKeyboardArrowRight className='text-2xl text-gray-400' /></div>
//                             <div className='flex items-center justify-center '> <p className='text-gray-900'>Spends</p><IoMdArrowDropdown className='text-2xl text-gray-400' /> </div>
//                             <button><RiDeleteBin6Line className='text-gray-300 text-[25px] hover:cursor-pointer hover:text-orange-600  p-[3px] ml-[105px] shadow-sm' /></button>
//                         </div>

//                         <div className='flex items-center justify-center mt-[8px] gap-[10px]'>
//                             <button className='flex h-[40px] bg-[#F6F8FA] p-[10px] w-auto'><p className='text-black'>Equals</p><IoMdArrowDropdown className='text-2xl  text-gray-400' /> </button>
//                             <input type="text" placeholder='Enter Value' className='bg-[#F6F8FA] w-[240px] h-[40px] p-[10px] rounded-md focus:outline-[#d3ef63]  ' />

//                         </div>



//                         {/* <OptionMatrices/> */}



//                     </div>



//                 </div>



//             </div ></>
//     )
// }

// export default MetricsSpends



                                                       // CSS



import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import '../styles/MatriceSpends.css'; // Import the CSS file
import OptionMatrices from './OptionMatrices';

const MetricsSpends = () => {
    return (
        <>
            <div className="metrics-container">
                <div className="metrics-box">
                    <div className="add-filter">
                        <FaPlus className="add-filter-icon" /> Add Filter
                    </div>

                    <div className="filter-item">
                        <div className="filter-header">
                            <div className="filter-tag">
                                <p>Metrics</p>
                                <MdKeyboardArrowRight className="icon" />
                            </div>
                            <div className="filter-character">
                                <p>Spends</p>
                                <IoMdArrowDropdown className="icon" />
                            </div>
                            <button className="delete-button">
                                <RiDeleteBin6Line className="delete-icon" />
                            </button>
                        </div>

                        <div className="filter-selection">
                            <button className="selection-button">
                                <p>Equals</p>
                                <IoMdArrowDropdown className="icon" />
                            </button>
                            <input type="text" placeholder="Enter Value" className="input-field" />
                        </div>

                         {/* <OptionMatrices/> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MetricsSpends;

