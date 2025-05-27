import React from 'react'

const index = () => {
  return (
    <div className='mb-4'>          {/* mb-4 is a margin bottom */ }
        <div className='flex flex-row justify-between pt-1 pr-4 pb-1 pl-4'>
            <span>CSS</span>
            <span>70%</span>
        </div>
        <div className='w-[220px] h-[4px] bg-white border border-yellow-400 rounded-full'>
            <div className='w-[70%] h-full bg-yellow-400 rounded-full'></div>

        </div>
    </div>
  )
}

export default index