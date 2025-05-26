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

const index = () => {
  return (
    <div className='flex min-h-screen bg-gray-500'>
      {/* LEFT BAR */}
      <div className='w-1/4 bg-orange-300 p-4'>                           
        <AvatarMolecule />
      </div>

      {/* Main Bar */}
      <div className=' w-1/2 bg-blue-400'>
        Main Bar
      </div>
      <div className='w-1/4 bg-green-500'>
        Right Bar
      </div>
      
    </div>
  )
}

export default index
