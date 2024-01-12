import React from 'react'

function FacilitiesCard({icon,title,description}) {
  return (
    <>
    <div className='flex flex-col items-center self-stretch gap-8 p-3'>
        <div className='flex items-start p-7 rounded-full border-indigo-700 border-2'>
            <img src={icon} alt={`${title}-img`} />
        </div>
        <div className='card-content-wrap'>
            <div className='card-title'>
                <h5 className='text-center font-fl-lex capitalize font-bold text-3xl'>{title}</h5>
            </div>
            <div className='card-description'>
                <p className='font-normal text-center font-fl-lex text-2xl'>{description}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default FacilitiesCard