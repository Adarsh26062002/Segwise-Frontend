// import React from 'react'
// import SegwiseLogo from '../assets/b2ea5436-3ee6-494c-b000-708aa526418a_removalai_preview.png';



// const Logo = () => {
//     return (


//         <>


//             <nav className='flex bg-red pt-8 px-12  '>
//                 <logo className='w-[100px] h-[80px]'><img src={SegwiseLogo} alt="Sewgwiselogo.png" /></logo>
//                 <div className='flex flex-col  ml-[10px] justify-center py-5 '>
//                     <h3 className='font-sans text-[25px] leading-normal font-semibold  text-gray-500'>Segwise</h3>
//                     <h5 className='font-sans text-[23px]  font-light leading-normal text-gray-500'>Front End Test</h5>
//                 </div>



               




//             </nav>




//         </>
//     )
// }

// export default Logo




                                                       // CSS



                                                       


import React from 'react';
import SegwiseLogo from '../assets/b2ea5436-3ee6-494c-b000-708aa526418a_removalai_preview.png';
import '../styles/Logo.css'; // Import the CSS file

const Logo = () => {
    return (
        <nav className="logo-container">
            <div className="logo">
                <img src={SegwiseLogo} alt="Segwise Logo" />
            </div>
            <div className="logo-text">
                <h3 className="logo-title">Segwise</h3>
                <h5 className="logo-subtitle">Front End Test</h5>
            </div>
        </nav>
    );
}

export default Logo;
