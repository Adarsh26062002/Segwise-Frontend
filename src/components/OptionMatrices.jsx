// import React from 'react'

// const OptionMatrices = () => {
//     return (

//         <ul className='absolute z-60 left-[-10px] rounded-xl px-[10px] py-[10px] justify-between border border-gray-300 bg-white flex flex-col h-[144px] w-[124px]'>
//             <li className=' px-[5px] rounded-xl hover:text-gray-800 flex items-center justify-center  h-[40px] cursor-pointer hover:bg-[#F6F8FA]'><p>Lesser than</p></li>
//             <li className=' px-[5px] rounded-xl  hover:text-gray-800 flex items-center justify-center h-[40px] cursor-pointer hover:bg-[#F6F8FA]'><p>Greater than</p></li>
//             <li className=' px-[5px] rounded-xl hover:text-gray-800 flex items-center justify-center h-[40px] cursor-pointer hover:bg-[#F6F8FA]'><p>Equals</p></li>
//         </ul>


//     )
// }

// export default OptionMatrices


                                                       // CSS



import React from 'react';
import '../styles/OptionMatrices.css'; // Import the CSS file

const OptionMatrices = () => {
    return (
        <ul className="option-matrix">
            <li className="option-matrix-item"><p>Lesser than</p></li>
            <li className="option-matrix-item"><p>Greater than</p></li>
            <li className="option-matrix-item"><p>Equals</p></li>
        </ul>
    );
}

export default OptionMatrices;
