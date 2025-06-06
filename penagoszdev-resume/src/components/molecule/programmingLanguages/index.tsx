import React from 'react'
import Java from '@/components/atom/programmingLanguages/java'
import Python from '@/components/atom/programmingLanguages/python'
import HTML from '@/components/atom/programmingLanguages/html'
import CSS from '@/components/atom/programmingLanguages/css'
import JavaScript from '@/components/atom/programmingLanguages/javascript'

const index = () => {
  return (
    <div className='bg-white w-60 h-72'>
        <span className='pl-3 text-lg font-bold'>Programming Languages</span>
        <Java />
        <Python />
        <HTML />
        <JavaScript />
        <CSS />
        
    </div>
  )
}

export default index