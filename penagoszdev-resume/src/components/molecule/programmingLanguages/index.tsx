import React from 'react'
import Java from '@/components/atom/programmingLanguages/java'
import Python from '@/components/atom/programmingLanguages/python'

const index = () => {
  return (
    <div className='bg-green-400 w-60 h-36'>
        <span className='pl-3 text-lg font-bold'>Programming Languages</span>
        <Java />
        <Python />
    
        
    </div>
  )
}

export default index