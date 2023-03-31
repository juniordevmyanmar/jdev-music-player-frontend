import React from 'react'

function Error({errorText} : {errorText: string | undefined}) {
  return (
    <span className='text-red-100 text-sm mb-1'>{errorText}</span>
  )
}

export default Error