import React from 'react'
import Logo from './components/Logo'
import TaskField from './components/TaskFiled'

const App = () => {
  return (
    <>
      <div className='relative '>

        <Logo />
        <TaskField />


        <p className='absolute bottom-[-400px] right-[70px]'>2025</p>


      </div>

    </>
  )
}

export default App
