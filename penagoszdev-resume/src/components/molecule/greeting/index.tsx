import React from 'react'
import Photo from '@/components/atom/greeting/photo'
import Name from '@/components/atom/greeting/name'
import Description from '@/components/atom/greeting/description'
import Button from '@/components/atom/greeting/button'

const index = () => {
  return (
    <div className='flex flex-row-reverse items-center justify-center h-screen bg-white'>
        <div>
            <Photo />
        </div>
        <div>
            <div className=''>
                <Name />
            </div>
                <Description />
                <Button />
        </div>
    </div>
  )
}

export default index