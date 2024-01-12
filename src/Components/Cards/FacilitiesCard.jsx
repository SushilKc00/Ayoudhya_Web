import React from 'react'

function FacilitiesCard({icon,title,description}) {
  return (
    <>
    {/* animate-pulse */}
    <div className='flex flex-col items-center self-stretch gap-8 p-3 shadow-md md:animate-pulse sm:animate-pulse animate-pulse lg:animate-none rounded-2xl group hover:scale-105 duration-1000 bg-slate-50'>
        <div className='flex items-start p-7 rounded-full border-indigo-700 border-2 overflow-hidden'>
            <img src={icon} alt={`${title}-img`} className='group-hover:scale-110 duration-1000'/>
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