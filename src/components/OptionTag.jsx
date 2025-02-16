// import React from 'react'

// const OptionTag = () => {
//     return (
//         <div className=''>
//             <ul className='absolute z-10 left-[-10px] rounded-xl px-[10px] py-[10px] justify-between border border-gray-300 bg-white flex flex-col h-[188px] w-[163px]'>
//                 <li className=' px-[5px] hover:text-gray-800 flex items-center justify-center  h-[40px] cursor-pointer hover:bg-[#F6F8FA]'>is</li>
//                 <li className=' px-[5px] hover:text-gray-800 flex items-center justify-center  h-[40px] cursor-pointer hover:bg-[#F6F8FA]'>is not</li>
//                 <li className=' px-[5px] hover:text-gray-800 flex items-center justify-center  h-[40px] cursor-pointer hover:bg-[#F6F8FA]'>contains</li>
//                 <li className=' px-[5px] hover:text-gray-800 flex items-center justify-center  h-[40px] cursor-pointer hover:bg-[#F6F8FA]'>does not contain</li>
//             </ul>
//         </div>
//     )
// }

// export default OptionTag




                                                       // CSS


import React from 'react';
import '../styles/OptionTag.css'


const OptionTag = () => {
    return (
        <div className="option-container">
            <ul className="option-list">
                <li className="option-item">is</li>
                <li className="option-item">is not</li>
                <li className="option-item">contains</li>
                <li className="option-item">does not contain</li>
            </ul>
        </div>
    );
}

export default OptionTag;
