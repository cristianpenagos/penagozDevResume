import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const index = () => {
  return (
    <div className='w-60 h-46 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-around'>
       
        <Icon icon="cib:java" width="64" height="64" color='#FFB400'/>
         <span className='font-bold'>Backend Deveplment</span>
         <span className=''>Spring</span>
    </div>
  )
}
export default index