import React from 'react'
import English from '@/components/atom/languages/english'
import Spanish from '@/components/atom/languages/spanish'

const index = () => {
  return (
    <div className='bg-green-400 w-56 h-36'>
        <span className='pl-3 text-lg font-bold'>Languages</span>  {/* text-lg is a 18px size */}
        <English />
        <Spanish />
    </div>
  )
}

export default index