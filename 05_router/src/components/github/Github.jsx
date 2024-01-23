import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
//  const [data,setData] = useState('')
//   useEffect(()=>{
//     fetch('https://api.github.com/users/dammar093')
//     .then(res=>res.json())
//     .then(data=>{
//       console.log(data);
//       setData(data)
//     })
//   },[])
  
const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-grey-500 text-white p-4 text-3xl'>
        <img src={data.avatar_url} alt="" />
        <h1 className='text-black'>Name: {data.name}</h1>
        <h3 className='text-black'>Followers: {data.followers}</h3>
        <p className='text-black'>{data.bio}</p>
    </div>
  )
}

export default Github

export const gihubLoader = async () =>{
   return (await fetch('https://api.github.com/users/dammar093')).json()
} 

