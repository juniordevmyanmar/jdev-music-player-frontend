import React, { useEffect, useState } from 'react'
import { sideMenuData } from '../contents/sideMenuData'
import Row from './Row'
import Divider from '../../common/ui/Divider'
import { useNavigate } from 'react-router-dom'
import { BsFillDoorClosedFill, BsFillGearFill } from 'react-icons/bs'

function SideMenu() {
 const navigate = useNavigate()
 const [current,setCurrent] = useState('');

 useEffect(() => {
    const currentRoute = window.location.pathname
    setCurrent(currentRoute.slice(1))
 },[])

 function logOut() {
    localStorage.clear()
    navigate(0)
 }
  return (
    <div className='bg-bg2 text-text2 h-full px-10 pt-12 text-sm'>
        <div className='flex flex-col justify-between h-full'>
        <div>
        {sideMenuData.slice(0,5).map(el => 
            <div className='mb-8' onClick={() => navigate(el.route)} key={el.id}>
                <Row icon={el.icon} text={el.name} current={current}/>
            </div>
        )}
        </div>

        <Divider />
        <div>
        
            <div className='mb-8' onClick={() => navigate('/setting')}>
                <Row icon={<BsFillGearFill />} text='Setting' current={current}/>
            </div>
            <div className='mb-8' onClick={() => logOut()}>
            <Row icon={<BsFillDoorClosedFill />} text='Log out' current={current}/>
            </div>
    
        </div>
        </div>
    </div>
  )
}

export default SideMenu