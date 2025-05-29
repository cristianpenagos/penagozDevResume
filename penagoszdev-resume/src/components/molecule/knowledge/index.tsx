import React from 'react'
import WebDev from '@/components/atom/knowledge/webdev'
import Backend from '@/components/atom/knowledge/backend'
import Db from '@/components/atom/knowledge/db'
import Infra from '@/components/atom/knowledge/infra'
import AI from '@/components/atom/knowledge/AI'
import Testing from '@/components/atom/knowledge/testing'


const index = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 p-4'>
        <div>
          <span className='font-bold text-3xl'>Knowledge</span>
          <p>
            In my academic career I have worked in the following areas:</p>
        </div>
        <div className='flex flex-row p-4'>
          <WebDev />
          <Backend />
          <Db />
        </div>
        <div className='flex flex-row p-4'>
          <Infra />
          <AI/>
          <Testing />
        </div>
    </div>
  )
}

export default index