import React from 'react'
import Face from '@/components/atom/social/face'
import Instagram from '@/components/atom/social/instagram'
import Youtube from '@/components/atom/social/youtube'
import Linkedin from '@/components/atom/social/linkedin'
import Github from '@/components/atom/social/github'
import Avatar from '@/components/atom/sidebar/avatar'
import Status from '@/components/atom/sidebar/status'
import NameDev from '@/components/atom/sidebar/nameDev'
import RolDev from '@/components/atom/sidebar/rolDev'
import AvatarMolecule from '@/components/molecule/avatar'
import RightMenu from '@/organism/rightMenu'
import About from '@/components/molecule/about'
import Languages from '@/components/molecule/languages'
import ProgrammingLanguages from '@/components/molecule/programmingLanguages'
import ExtraSkills from '@/components/molecule/extraSkills'


const index = () => {
  return (
    <div className='flex min-h-screen bg-gray-500 max-w-screen-xl mx-auto'>
      {/* LEFT BAR */}
      <div className='w-1/5 bg-orange-300 p-4 flex flex-col items-center'>                           
        <AvatarMolecule />

        <div className="w-[220px] h-[1.5px] bg-[#F0F0F6] mx-auto m-3" /> {/* m- aply magin around */}
        <About />

        <div className="w-[220px] h-[1.5px] bg-[#F0F0F6] mx-auto m-3" /> {/* m- aply magin around */}
        <Languages />
        <div className="w-[220px] h-[1.5px] bg-[#F0F0F6] mx-auto m-3" /> {/* m- aply magin around */}
        <ProgrammingLanguages />
        <div className="w-[220px] h-[1.5px] bg-[#F0F0F6] mx-auto m-3" /> {/* m- aply magin around */}
        <ExtraSkills />
      </div>
      

      {/* Main Bar */}
      <div className=' w-2/3 bg-blue-400'>
        Main Bar
      </div>
      <div className='w-1/6 bg-green-500 mx-auto flex flex-col items-center p-4'>
        Link
        <RightMenu />
      </div>
      
    </div>
  )
}


export default index
