import React, { useEffect } from 'react'
import SideMenu from '../sideMenu/ui/SideMenu';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/slice/authSlice';

interface mainLayoutType {
    children: React.ReactNode;
}

function MainLayout({children}: mainLayoutType) {
  
  return (
    <>
    <div className='flex'>
        <div className='w-2/12 h-[85vh]'>
            <SideMenu />
        </div>
        <div className='w-10/12'>
            {children}
        </div>
    </div>
    <div className='bg-teal-200 h-[15vh] absolute bottom-0 left-0 right-0'>
        fff 
    </div>
    </>
  )
}

export default MainLayout