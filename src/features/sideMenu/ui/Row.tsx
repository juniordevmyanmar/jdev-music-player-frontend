import React from 'react'

interface RowType{
    icon: React.ReactNode
    text: string;
    current: string;
}

function Row({icon,text,current}: RowType) {
  console.log(current)
  return (
    <div className={`flex justify-start items-center hover:text-text3 cursor-pointer ${current === text.toLowerCase() && 'text-primary'}`}>
        <span className='mr-4'>{icon}</span>
        <span>{text}</span>
    </div>
  )
}

export default Row