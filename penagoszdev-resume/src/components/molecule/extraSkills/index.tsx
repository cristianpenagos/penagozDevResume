import React from 'react'
import GitHub from '@/components/atom/extraSkills/github'
import Docker from '@/components/atom/extraSkills/docker'
import Tailwind from '@/components/atom/extraSkills/tailwind'
import Scrum from '@/components/atom/extraSkills/scrum'

const index = () => {
  return (
    <div className='bg-fuchsia-400 w-56 h-56'>
        <span className='font-bold p-4'>Extra Skills</span>
        <GitHub />
        <Docker />
        <Tailwind />
        <Scrum />
    </div>
  )
}

export default index