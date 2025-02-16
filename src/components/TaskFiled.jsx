// import React from 'react'

// import { CiFilter } from "react-icons/ci";
// import { IoMdArrowDropdown } from "react-icons/io";
// import CategoryDropdown from './CategoryDropdown';
// import TagCharacter from './TagCharacter';
// import MultipleFilter from './MultipleFilter';
// import MatriceSpends from './MatriceSpends';



// const TaskFiled = () => {
//   return (<>

//     <div className='flex items-center relative justify-center mt-[40px]'>    <div className='w-[1300px] border-dashed border-[4px] px-[200px] py-[60px] height-[181px] flex items-center justify-center'>


//       <div className='w-[943px] heihgt-[70px] px-[20px] py-[15px] flex items center bg-[#F6F8FA] border-gray-200 border rounded-xl'>
//         <button className='cursor-pointer flex items-center gap-[5px] bg-white shadow-md px-[5px] py-[7px] rounded-lg '><CiFilter className='text-[20px] text-gray-500' />
//           <p className='text-[16px] tracking-wider font-light'>Filters</p> <IoMdArrowDropdown className='text-2xl text-gray-400' /> </button>
//       </div>




//     </div>


//       {/* <CategoryDropdown/> */}
//       {/* <TagCharacter/> */}
//       {/* <MultipleFilter /> */}
//       {/* <MatriceSpends/> */}



//     </div>

//   </>



//   )
// }

// export default TaskFiled



                                                       // CSS



import React, { useState } from 'react'

import { CiFilter } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import CategoryDropdown from './CategoryDropdown';
import TagCharacter from './TagCharacter';
import MultipleFilter from './MultipleFilter';
import MatriceSpends from './MatriceSpends';
import '../styles/TaskFiled.css';

const TaskFiled = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="task-container">
        <div className="task-box">
          <div className="task-filter">
            <button className="filter-button" onClick={toggleDropdown}>
              <CiFilter className="filter-icon" />
              <p className="filter-text">Filters</p>
              <IoMdArrowDropdown className="dropdown-icon" />
            </button>
          </div>
        </div>
      </div>

     
      <CategoryDropdown isOpen={isOpen} toggleDropdown={toggleDropdown} />
      {/* <TagCharacter/> */}
      {/* <MultipleFilter /> */}
      {/* <MatriceSpends /> */}

    </>
  );
};

export default TaskFiled;
