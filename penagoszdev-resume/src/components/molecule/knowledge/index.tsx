import React from 'react'
import WebDev from '@/components/atom/knowledge/webdev'
import Backend from '@/components/atom/knowledge/backend'
import Db from '@/components/atom/knowledge/db'
import Infra from '@/components/atom/knowledge/infra'
import AI from '@/components/atom/knowledge/AI'
import Testing from '@/components/atom/knowledge/testing'


const index = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <div>
          <span>Knowledge</span>
        </div>
        <div className='flex flex-row'>
          <WebDev />
          <Backend />
          <Db />
        </div>
        <div className='flex flex-row'>
          <Infra />
          <AI/>
          <Testing />
        </div>
    </div>
  )
}

export default index