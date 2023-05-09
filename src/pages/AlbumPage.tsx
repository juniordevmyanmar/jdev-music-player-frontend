import React from 'react'
import MainLayout from '../features/layout/MainLayout'
import AlbumLayout from '../features/albumPageComponents/AlbumLayout'

function AlbumPage() {
  return (
    <> 
      <MainLayout>
        <AlbumLayout />
      </MainLayout>
    </>
  )
}

export default AlbumPage