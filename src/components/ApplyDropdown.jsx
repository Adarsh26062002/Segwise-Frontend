// import React from 'react'
// import { IoIosSearch } from "react-icons/io";
// import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";

// const ApplyDropdown = () => {
//     return (
//         <div className='h-auto  w-[340px] absolute top-[215px] left-[-100px] mb-[10px]  border border-gray-200 rounded-xl bg-white'>
//             <div className='border-b-[1px]  p-[5px] w-full flex items-center '>
//                 <IoIosSearch className='text-gray-400 mx-[5px] text-[26px]' />
//                 <input type="text" placeholder='Search' className='outline-none caret-green-500 text-[15px] font-light ' /></div>

//             <ul className='p-2 '>
//                 <li className=' rounded-lg px-[5px] h-[40px] cursor-pointer  hover:bg-[#F6F8FA] flex items-center text-gray-600 text-[15px] gap-[12px]'> <input type="checkbox" name="" id="" /> <p>Select All</p></li>
//                 <li className='rounded-lg mt-[6px] px-[5px] h-[40px] cursor-pointer hover:bg-[#F6F8FA]  flex items-center text-gray-600 text-[15px] gap-[12px]'><input type="checkbox" name="" id="" /><p>Pumpkin</p></li>
//                 <li className=' rounded-lg mt-[6px] px-[5px] h-[40px] cursor-pointer hover:bg-[#F6F8FA]  flex items-center text-gray-600 text-[15px]  gap-[12px]'><input type="checkbox" name="" id="" /><p>Cat</p></li>
//                 <li className=' rounded-lg mt-[6px] px-[5px] h-[40px] cursor-pointer hover:bg-[#F6F8FA]  flex items-center text-gray-600 text-[15px]  gap-[12px]'><input type="checkbox" name="" id="" /><p>Ghost</p></li>
//                 <li className=' rounded-lg mt-[6px] px-[5px] h-[40px] cursor-pointer  hover:bg-[#F6F8FA]  flex items-center text-gray-600 text-[15px] gap-[12px] '><input type="checkbox" name="" id="" /><p>Egg</p></li>
//                 <button className='flex h-[40px]  items-center justify-center bg-[#333333] w-full rounded-md'><p className='text-white '>Apply</p><MdOutlineSubdirectoryArrowLeft className='text-white' /></button>
//             </ul>

//         </div>
//     )
// }

// export default ApplyDropdown



                                                       // CSS


import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import '../styles/ApplyDropdown.css'; 

const ApplyDropdown = () => {
    return (
        <div className="apply-dropdown">
            <div className="search-bar">
                <IoIosSearch className="search-icon" />
                <input type="text" placeholder="Search" className="search-input" />
            </div>

            <ul className="dropdown-list">
                <li className="dropdown-item">
                    <input type="checkbox" /><p>Select All</p>
                </li>
                <li className="dropdown-item"><input type="checkbox" /><p>Pumpkin</p></li>
                <li className="dropdown-item"><input type="checkbox" /><p>Cat</p></li>
                <li className="dropdown-item"><input type="checkbox" /><p>Ghost</p></li>
                <li className="dropdown-item"><input type="checkbox" /><p>Egg</p></li>
                <button className="apply-button">
                    <p>Apply</p>
                    <MdOutlineSubdirectoryArrowLeft className="apply-icon" />
                </button>
            </ul>
        </div>
    );
}

export default ApplyDropdown;


