import React from 'react'

const Trust = () => {
  return (
    <div className='bg-[#f5f1eb] pt-24 pb-10 min-h-screen'>
        <div className='mx-auto text-center'>
            <p className='font-bold text-slate-800 text-4xl md:text-5xl pb-6 md:pb-12'>You can order for your cloths here.</p>
            <p className=' text-slate-800 text-2xl md:text-3xl font-semibold'>Delivery will be made without any delay.<span className='block text-2xl font-light'> Payments are made after you have confirmed the product.</span></p>
            <img className='mt-20' src="/replace.jpg" alt="" />
            <button  className='rounded-2xl backdrop-blur-3xl border px-6 text-white hover:bg-transparent bg-slate-900 flex justify-center items-center self-center mx-auto py-1 hover:text-slate-900'>Shop now</button>
        </div>
    </div>
  )
}

export default Trust