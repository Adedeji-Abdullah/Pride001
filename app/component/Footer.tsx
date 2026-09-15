import React from 'react'

const Footer = () => {
  return (
    <section>
    <div className='bg-slate-800 min-h-[40vh]'>
        <div className='text-3xl text-center text-white pt-10 semi-bold'>
            <p>Pride Garment also trains apprentice in sewing different type of cloth.</p>
            <p>For more information you can message the CEO.</p>
        </div>
        <p className='text-center text-white text-xl'>The email is <span className='underline'>adedejiabdullah26@gmail.com</span></p>
        <button className='text-white mt-28 flex pb-8 justify-center text-center text-2xl mx-auto'>We will be waiting for you orders</button>
    </div>
    <div className='bg-slate-950 pt-10 min-h-[20vh]'>
      <p className='text-white text-center text-3xl'>You can contact us via whatsapp, Tiktok and Instagram</p>
    </div>
    </section>
  )
}

export default Footer