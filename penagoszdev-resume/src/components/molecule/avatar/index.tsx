import React from 'react'
import Avatar from '@/components/atom/sidebar/avatar'
import Status from '@/components/atom/sidebar/status'
import NameDev from '@/components/atom/sidebar/nameDev'
import RolDev from '@/components/atom/sidebar/rolDev'

const index = () => {
  return (
    <div className='bg-white w-36 h-60 flex flex-col'>

        <div className='relative'>
            <Avatar />
            <div className='absolute bottom-18 right-4'>
                <Status />
            </div>
            <div className='mt-4 text-center'>
                <NameDev />
                <RolDev />
            </div>
        </div>
        
        
        
    </div>
  )
}

export default index