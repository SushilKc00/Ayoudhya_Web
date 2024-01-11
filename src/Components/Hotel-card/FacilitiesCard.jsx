import React from 'react'

function FacilitiesCard() {
  return (
    <>
    <div className='flex flex-col items-center self-stretch gap-8'>
        <div className='flex items-start p-7 rounded-full border-indigo-700 border-b-2'>
            <img src={icon} alt="" />
        </div>
        <div className='card-content-wrap'>
            <div className='card-title'>
                <h5 className='text-center capitalize font-bold text-4xl'>{title}</h5>
            </div>
            <div className='card-description'>
                <p className='font-normal text-2xl'>{description}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default FacilitiesCard