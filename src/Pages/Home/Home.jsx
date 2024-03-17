import React from 'react'
import MiddelComponent from '../../Components/HomeMidelComponent/MiddelComponent'
import LastCompOfhome from '../../Components/LastCompoOfHome/LastCompOfhome'
import Skills from '../Skiles/Skills'
import HireIng from '../HireMe/HireIng'

const Home = () => {
  return (
    <div>
      <div className='w-full h-[100vh]'>
          <MiddelComponent/>
          <LastCompOfhome/>
      </div>
      <Skills/>
      <HireIng/>
    </div>
  )
}

export default Home