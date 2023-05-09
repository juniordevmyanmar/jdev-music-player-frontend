import React from 'react'
import Album from './Album'

function AlbumLayout() {
  return (
    <div className='bg-bg1 h-[85vh] overflow-auto px-8'>
        <h1 className='text-white font-bold text-3xl my-8'>
            Latest Albums
        </h1>
        <div className='grid grid-cols-4 gap-4'>
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
        </div>
    </div>
  )
}

export default AlbumLayout