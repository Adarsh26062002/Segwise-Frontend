// import React from 'react'
// import { FaPlus } from "react-icons/fa6";

// import { IoIosSearch } from "react-icons/io";

// const CategoryDropdown = () => {
//     return (
//         <>

//             {/* Step  UI  */}

//             <div className='absolute bottom-[100px] left-[400px]' >    <div className='relative '>
//                 <div className='h-auto cursor-default  absolute top-[30px] left-[-110px]  flex-col  w-[360px] p-[15px]  flex items-center justify-center bg-white border border-gray-200 rounded-xl'>
//                     <div className='  w-full bg-[#F6FDED] p-[10px]  rounded-xl border border-gray-200 font-light text-black flex items-center  shadow-sm '><FaPlus className='bg-[#E3FA99] border text-gray-500 border-gray-300 p-[2px] rounded-md mr-[5px]' /> Add Filter </div>



//                 </div>


                
//                             <div className='absolute top-[-55px]'>
//                                 <div className='h-auto  w-[340px] absolute top-[155px] left-[-100px] mb-[10px]  border border-gray-200 rounded-xl bg-white'>
//                                     <div className='border-b-[1px]  p-[5px] w-full flex items-center '>
//                                         <IoIosSearch className='text-gray-400 mx-[5px] text-[26px]' />
//                                         <input type="text" placeholder='Search' className='outline-none caret-green-500 text-[15px] font-light ' />
//                                     </div>
                
//                                     <div className='flex gap-[20px] px-[8px]  border-b-2 pt-[15px]  '>
//                                         <p className='hover:border-b-2 border-black hover:text-black ' >Dimensions</p>
//                                         <p className='hover:border-b-2 border-black  hover:text-black ' >Tags</p>
//                                         <p className='hover:border-b-2 border-black hover:text-black ' >Matrics</p>
//                                     </div>
                
                
                
//                                     <ul className='p-2 '>
//                                         <li className=' rounded-lg px-[5px] h-[40px] cursor-pointer  hover:bg-[#F6F8FA] flex items-center text-gray-600 text-[15px] gap-[12px]'>Character</li>
//                                         <li className=' rounded-lg px-[5px] h-[40px] cursor-pointer  hover:bg-[#F6F8FA] flex items-center text-gray-600 text-[15px] gap-[12px]' >Background</li>
//                                         <li className=' rounded-lg px-[5px] h-[40px] cursor-pointer  hover:bg-[#F6F8FA] flex items-center text-gray-600 text-[15px] gap-[12px]'>Elements</li>
//                                         <li className=' rounded-lg px-[5px] h-[40px] cursor-pointer  hover:bg-[#F6F8FA] flex items-center text-gray-600 text-[15px] gap-[12px]'>CTA Position</li>
//                                         <li className=' rounded-lg px-[5px] h-[40px] cursor-pointer  hover:bg-[#F6F8FA] flex items-center text-gray-600 text-[15px] gap-[12px]'>CTA Text</li>
//                                     </ul>
                
//                                 </div>
                
                
                
//                             </div >
//             </div ></div></>



//     )
// }

// export default CategoryDropdown

// // 




// STEP 1




                                                       // CSS



import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import '../styles/CategoryDropdown.css'; // Import the CSS file

const CategoryDropdown = () => {
    return (
        <div className="category-dropdown-container">
            <div className="category-dropdown-wrapper">
                <div className="category-dropdown">
                    <div className="add-filter">
                        <FaPlus className="add-filter-icon" />
                        Add Filter
                    </div>
                </div>

                <div className="category-container">
                    <div className="category-dropdown-box">
                        <div className="search-bar">
                            <IoIosSearch className="search-icon" />
                            <input type="text" placeholder="Search" className="search-input" />
                        </div>

                        <div className="category-tabs">
                            <p className="category-tab">Dimensions</p>
                            <p className="category-tab">Tags</p>
                            <p className="category-tab">Matrics</p>
                        </div>

                        <ul className="category-list">
                            <li className="category-item">Character</li>
                            <li className="category-item">Background</li>
                            <li className="category-item">Elements</li>
                            <li className="category-item">CTA Position</li>
                            <li className="category-item">CTA Text</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryDropdown;
