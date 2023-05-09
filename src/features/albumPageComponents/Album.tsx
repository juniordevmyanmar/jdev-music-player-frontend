import React from 'react'
import logo from '../../assets/media/logo.png';

function Album() {
  return (
    <div className='text-center w-52 space-y-2'> 
        <img src={logo} alt="logo" className="w-full h-30 rounded-lg" />
        <p className=' text-text2'>Artist Name lorem</p>
        <p className='text-sm text-text1'>The artist</p>
    </div>
  )
}

export default Album