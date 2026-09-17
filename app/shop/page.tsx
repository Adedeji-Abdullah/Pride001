"use client"
import React from 'react'
import { useState, useEffect } from 'react'

const page = () => {
  const [cloths, setCloths] = useState<any[]>([])
  const [cloths2, setCloths2] = useState([])
  
  useEffect(() => {
    const cloth = async() => {
      try {
       const clothToPost = await fetch('http://localhost:5000/clothings')
       const result = await clothToPost.json()
        
        setCloths(result)
        console.log(cloths)
        setCloths(result)
        localStorage.setItem('cloth', JSON.stringify(result))
    } catch (error) {
      console.log("postin of cloth error>>>> " + error)
    }
    }
    cloth()
  }, [])


  const local = (localStorage.getItem("cloth"))
  const main = local[0]
  const value = [main]
  if(!local){
    return []
  }

  console.log('local ' + local)
  return (
    <div>
      {/* {cloths.map((cloth: any) => {
        <ul className="bg-red-900 h-12 text-black" key={cloth._id}>
          <li>{cloth.style}</li>
        </ul>
      })} */}
      {value.map<[]>((cloth: any): any => {
        <ul className="bg-red-900 h-12 text-black" key={cloth._id}>
          <li>{cloth.style}</li>
        </ul>
      })}
    </div>
  )
}

export default page