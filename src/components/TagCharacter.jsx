// import React from 'react'
// import { FaPlus } from "react-icons/fa6";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import ApplyDropdown from './ApplyDropdown';


// const TagCharacter = () => {
//     return (<>

//         {/* Step 2 UI  */}


//         <div className='absolute left-[400px]'>

//             <div className='relative'>
//                 <div className='h-auto cursor-default  absolute top-[30px] left-[-110px]  flex-col  w-[360px] p-[15px]  flex items-center justify-center bg-white border border-gray-200 rounded-xl'>
//                     <div className='  w-full bg-[#F6FDED] p-[10px]  rounded-xl border border-gray-200 font-light text-black flex items-center  shadow-sm '><FaPlus className='bg-[#E3FA99] border text-gray-500 border-gray-300 p-[2px] rounded-md mr-[5px]' /> Add Filter </div>

//                     <div className='p-[10px] w-full border rounded-lg mt-[10px] border-gray-200' >
//                         <div className='flex gap-[10px] mt-[8px]'>
//                             <div className='flex items-center justify-center'> <p>Tag</p> <MdKeyboardArrowRight className='text-2xl text-gray-400' /></div>
//                             <div className='flex items-center justify-center '> <p className='text-gray-900'>Character</p><IoMdArrowDropdown className='text-2xl text-gray-400' /> </div>
//                             <button><RiDeleteBin6Line className='text-gray-300 text-[25px] hover:cursor-pointer hover:text-orange-600  p-[3px] ml-[125px] shadow-sm' /></button>
//                         </div>

//                         <div className='flex items-center mt-[8px] gap-[25px]'>
//                             <p>is</p>
//                             <button className='bg-[#F6F8FA] rounded-md py-[5px] px-[10px] w-[290px] h-[45px] text-gray-500 text-start '>Select Value</button>

//                         </div>




//                     </div>





//                 </div>


//                 <ApplyDropdown />
//             </div >
//         </div>
//     </>
//     )
// }

// export default TagCharacter




                                                       // CSS


import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import ApplyDropdown from './ApplyDropdown';
import '../styles/TagCharacter.css'; // Import the CSS file

const TagCharacter = () => {
    return (
        <>
            <div className="tag-character-container">
                <div className="tag-character-wrapper">
                    <div className="filter-box">
                        <div className="add-filter">
                            <FaPlus className="add-filter-icon" /> Add Filter
                        </div>

                        <div className="filter-content">
                            <div className="filter-header">
                                <div className="filter-tag">
                                    <p>Tag</p>
                                    <MdKeyboardArrowRight className="icon" />
                                </div>
                                <div className="filter-character">
                                    <p>Character</p>
                                    <IoMdArrowDropdown className="icon" />
                                </div>
                                <button className="delete-button">
                                    <RiDeleteBin6Line className="delete-icon" />
                                </button>
                            </div>

                            <div className="filter-selection">
                                <p>is</p>
                                <button className="select-value">Select Value</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ApplyDropdown />
            </div>
        </>
    );
}

export default TagCharacter;


