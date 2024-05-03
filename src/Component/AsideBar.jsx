import React from 'react'
import { Logo } from '../Shared/Logo'
import { AsideBarLinks } from './AsideBarLinks'

export const AsideBar = () => {
  return (
    <div className='col-span-2 py-8 bg-[#FBFBFB] pl-8'>
      <div className='flex items-center'>
        <Logo/><h1 className='text-black font-[700] text-[28px]'>Lilies</h1>
      </div>

      <div>
       <AsideBarLinks/>
      </div>
    </div>
  )
}
