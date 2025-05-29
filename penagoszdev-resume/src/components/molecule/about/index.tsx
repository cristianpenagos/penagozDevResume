import React from 'react'
import Age from '@/components/atom/about/age'
import Residence from '@/components/atom/about/residence'
import FreelanceStatus from '@/components/atom/about/freelanceStatus'
import Address from '@/components/atom/about/address'


const index = () => {
  return (
    <div className='bg-white w-56 h-32'>
        <Age />
        <Residence />
        <FreelanceStatus />
        <Address />
    </div>
  )
}

export default index