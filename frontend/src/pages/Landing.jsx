import React from 'react'
import Url from '../components/Url'
import Appbar from '../components/Appbar'
import { useRecoilValue } from 'recoil'
import { darkModeState } from '../store/atoms/atom'

const Landing = () => {
  const darkMode = useRecoilValue(darkModeState)
  return (
    <div className={`h-screen ${darkMode?"bg-[#17212B]": "bg-white"}`}>
        <Appbar/>
        <Url/>
    </div>
  )
}

export default Landing
