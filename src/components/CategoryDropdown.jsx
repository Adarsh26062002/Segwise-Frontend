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

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import "../styles/CategoryDropdown.css"; // Import the CSS file
import ApplyDropdown from "./ApplyDropdown";
import TagCharacter from "./TagCharacter";

const CategoryDropdown = ({ isOpen, toggleDropdown }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dimensions");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showTagCharacter, setShowTagCharacter] = useState(false);

  const mockData = {
    dimensions: [
      { id: 1, name: "Country", values: ["IN", "BR", "ID"] },
      { id: 2, name: "Ad Network", values: ["meta"] },
      {
        id: 3,
        name: "Campaign",
        values: [
          "App promotion campaign - New Creatives",
          "App promotion campaign - OG Creatives",
          "Bubblewise CPI Test Campaign",
        ],
      },
      {
        id: 4,
        name: "Ad Group",
        values: ["New Creatives", "OG Creatives", "OG Creatives – Revised"],
      },
    ],
    tags: [
      { id: 1, name: "Concept", values: ["UGC", "Gameplay"] },
      {
        id: 2,
        name: "CTA Position",
        values: ["Bottom-Center", "Middle-Center", "Middle-Right"],
      },
      {
        id: 3,
        name: "Background Setting",
        values: ["fantasy", "forest", "bedroom", "game", "purple"],
      },
      {
        id: 4,
        name: "Objects",
        values: ["bubbles", "wand", "crystals", "mushrooms", "magnet"],
      },
    ],
    metrics: [
      { id: 1, name: "IPM", range: "0 - 2.70", values: ["0-1", "1-2", "2-3"] },
      {
        id: 2,
        name: "CTR",
        range: "0 - 0.84",
        values: ["0-0.3", "0.3-0.6", "0.6-0.9"],
      },
      {
        id: 3,
        name: "CPM",
        range: "0 - 0.62",
        values: ["0-0.2", "0.2-0.4", "0.4-0.7"],
      },
      {
        id: 4,
        name: "Spend",
        range: "0 - 7.01",
        values: ["0-2", "2-5", "5-8"],
      },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory({
      column: activeTab,
      value: category.name,
      possibleValues: category.values,
    });
    setShowTagCharacter(true);
    setIsFilterOpen(false);
  };

  const renderTabContent = () => {
    const data = mockData[activeTab];
    return (
      <ul className="category-list">
        {data.map((item) => (
          <li
            key={item.id}
            className="category-item"
            onClick={() => handleCategoryClick(item)}
          >
            {item.name}
            {item.values && (
              <span className="text-xs text-gray-400 ml-2">
                ({item.values.length})
              </span>
            )}
            {item.range && (
              <span className="text-xs text-gray-400 ml-2">{item.range}</span>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="category-dropdown-container">
      <div className="category-dropdown-wrapper">
        {isOpen && (
          <>
            <div
              className="category-dropdown"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <div className="add-filter">
                <FaPlus className="add-filter-icon" />
                Add Filter
              </div>
            </div>

            {isFilterOpen && (
              <div className="category-container">
                <div className="category-dropdown-box">
                  <div className="search-bar">
                    <IoIosSearch className="search-icon" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="search-input"
                    />
                  </div>

                  <div className="category-tabs">
                    <p
                      className={`category-tab ${
                        activeTab === "dimensions" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("dimensions")}
                    >
                      Dimensions
                    </p>
                    <p
                      className={`category-tab ${
                        activeTab === "tags" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("tags")}
                    >
                      Tags
                    </p>
                    <p
                      className={`category-tab ${
                        activeTab === "metrics" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("metrics")}
                    >
                      Metrics
                    </p>
                  </div>

                  {renderTabContent()}
                </div>
              </div>
            )}

            {showTagCharacter && selectedCategory && (
              <TagCharacter
                selectedColumn={selectedCategory.column}
                columnValue={selectedCategory.value}
                possibleValues={selectedCategory.possibleValues}
                onClose={() => setShowTagCharacter(false)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryDropdown;
