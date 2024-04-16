import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { darkModeState, handleTag, handleUrl } from '../store/atoms/atom'
import Input from './Input'
import axios from 'axios'
import {QRCodeCanvas} from 'qrcode.react';
import Spinner from './Spinner'

const Url = () => {
    const darkMode = useRecoilValue(darkModeState)
     const [url,setUrl] = useRecoilState(handleUrl)
     const [tag, setTag] = useRecoilState(handleTag)
     const [shortUrl, setShortUrl] = useState("")
     const [loading, setLoading] = useState(false)
     const [showQr, setShowQr] = useState(false)

     const shortenUrl = async() => {
        try {
            setLoading(true)
            console.log(url)
            console.log(tag)
            const response = await axios.post("https://short-pc.onrender.com/short", {
                url: url,
                tag: tag
            })
            setShortUrl(`https://short-pc.onrender.com/${response.data.shortenUrl}`)
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }finally{
            setLoading(false)
        }
     }
     const isUrlEmpty = url.trim() === '';
  return (
    <div className={`flex justify-center text-center mt-32 ${darkMode?'dark':''}`} >
        <div className={`w-[350px] md:w-[650px] lg:w-[1100px] ${darkMode?'dark':''}`}>
        <h1 className={`text-4xl font-regular ${darkMode?"text-white":"text-black   "}`}>Copy your url here</h1>
        <div>
            <div className='mt-8'>
                <Input shortenUrl={shortenUrl} isUrlEmpty={isUrlEmpty} onChange={(e)=> setUrl(e.target.value)} placeholder={"https://google.com"} label={"URL"}/> 
            </div>
            <div className='mt-8'>
                <Input shortenUrl={shortenUrl} isUrlEmpty={isUrlEmpty} onChange={(e)=> setTag(e.target.value)} placeholder={"Try to think of a unique one"} label={"Tag"}/>  
            </div>

           <div className='flex justify-between'>
           <button onClick={()=> {
            shortenUrl()
            setShowQr(false)
        }} disabled={isUrlEmpty}
            className={` w-full m-8  rounded h-10 ${darkMode?"bg-gray-500 text-white hover:bg-gray-400": "bg-gray-700 hover:bg-gray-900 text-white"}`}>
                Shrink URL
            </button>
            <button onClick={()=> setShowQr(true)} disabled={shortUrl.length===0}
            className={` w-full m-8 rounded h-10 ${darkMode?"bg-gray-500 text-white hover:bg-gray-400": "bg-gray-700 hover:bg-gray-900 text-white"}`}>
                Generate QR
            </button>
           </div>
        </div>
        <div  className={`mt-6 ${darkMode?"text-white":""}`}>
        {loading?<Spinner/>:showQr?<div className='flex justify-center'><QRCodeCanvas value={shortUrl} size={180} /></div>:<a href={shortUrl} target='_blank'>{shortUrl}</a>}
        </div>
        </div>
    </div>
    

  )
}

export default Url
