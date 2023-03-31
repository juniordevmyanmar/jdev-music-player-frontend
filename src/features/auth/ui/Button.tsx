import React from 'react'

interface buttonProps {
    text: string
    width?: string
}

function Button({text,width}: buttonProps) {
  return (
    <button className= {`bg-yellow-400 ${width ? width : 'w-full'} p-4 text-center rounded-md`}>
        {text}
    </button>
  )
}

export default Button