import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { darkModeState, handleUrl } from '../store/atoms/atom'

const Input = ({onChange, shortenUrl,placeholder, label,isUrlEmpty}) => {
    const darkMode = useRecoilValue(darkModeState)
    const handlekeyDown = (event) => {
      if(event.key==='Enter' && !event.shiftKey && !isUrlEmpty){
        event.preventDefault();
          shortenUrl();
      }
    }
  return (
    <>
      <div className={`flex flex-start ${darkMode?"text-white":"text-gray-900"}`}>
      <label htmlFor={label} className='text-md font-semibold'>{label}</label>
      </div>
      <input onKeyDown={handlekeyDown} onChange={onChange} type="text" id="text" className={`focus:outline-none bg-white border border-gray-800 text-gray-900 text-sm rounded-lg  block w-full p-2.5 mt-2 ${darkMode?"bg-slate-700 border-gray-200 placeholder-gray-400 text-white":""}`} placeholder={placeholder} required />
    </>
  )
}

export default Input
