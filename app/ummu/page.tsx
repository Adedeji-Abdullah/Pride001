"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
    const [file, setFile] = useState<any>()
    const [file2, setFile2] = useState<any>()
    const [style, setStyle] = useState("")
    const [amount, setAmount] = useState<number | any>(0)
    
    const submit = async() => {
        const formData = new FormData()
    formData.append('cloth', file)
    formData.append('style', style)
    formData.append('amount', amount)
        const upload = await fetch("http://localhost:5000/upload", {
            method: 'POST',
            body: formData
        })
        const result = await upload.json()
        console.log(result)
    }
    
    const handlePhoto = (e) => {
        const photo = e.target.files[0]
        if (photo) {
            setFile(photo)
            setFile2(URL.createObjectURL(photo))
            console.log(file2)
            console.log( file)  
        }
console.log(photo)
    }

  return (
    <section>
        <div className='bg-[#faf7f4] pb-6 m-5 mt-16 md:m-20 rounded-4xl'>
            <p className='text-4xl text-center pt-12 pb-6'>You can upload Images here</p>
            <input onChange={(e) => setStyle(e.target.value)} type="text" className='md:w-1/3 w-3/4 flex items-center rounded-2xl border border-slate-600 h-12 pl-2 justify-center mx-auto mt-5' placeholder='Name of the style' />
            <input onChange={(e) => setAmount(e.target.value)} type="number" className='md:w-1/3 w-3/4 flex items-center rounded-2xl border border-slate-600 h-12 pl-2 justify-center mx-auto mt-5' placeholder='Amount in Naira' />
            <input accept='image/*' onChange={handlePhoto} className='h-32 w-4/5 md:w-1/5 mx-auto py-auto mt-12 border- border-dotted border-2 border-black  flex items-center justify-center' type="file" />
            {file2 &&  (
                <img src={file2} className='w-32 h-32 rounded-full object-cover mx-auto mt-12' alt="" />
            )}
            <button onClick={submit} className='px-5 py-1 bg-slate-900 cursor-pointer text-white text-2xl rounded-2xl flex justify-center mt-10 items-center mx-auto'>upload</button>
        </div>
    </section>
  )
}

export default page