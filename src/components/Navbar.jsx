import React, { useState } from 'react'



const Navbar = () => {

    const [isShowNav, setIsShowNav] = useState(false)

    const handleShowNav = () => {
        setIsShowNav(!isShowNav)
    }


  return (
    <header className="flex justify-between py-4 px-2 text-xl text-white bg-black items-center relative">
        <h1 className="font-bold">Victor Hugo Murcio Mansilla</h1>
        <i onClick = {handleShowNav} className='bx bx-menu-alt-right text-gray-300 text-3xl cursor-pointer'></i>

        <nav className={`text-white absolute top-full bg-black ${isShowNav ? "left-0" : "-left-full"} w-full grid text-lg px-2 gap-2`}>
            <a href="#" >Experience</a>
            <a href="#" >Work</a>
            <a href="#" >Photography</a>
            <a href="#" >Contact</a>    
        </nav>
    </header>
  )
}

export default Navbar