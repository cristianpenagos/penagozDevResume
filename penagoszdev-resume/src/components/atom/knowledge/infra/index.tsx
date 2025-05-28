import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const index = () => {
  return (
    <div className='w-60 h-46 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-around'>
       
        <Icon icon="mdi:server" width="64" height="64" color='#FFB400'/>
         <span className='font-bold'>Infraestructure</span>
         <span className=''>Server, Linux, Proxmox</span>
    </div>
  )
}
export default index