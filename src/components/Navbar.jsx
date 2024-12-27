import  { useState } from 'react'

const Navbar = () => {

    const [isShowNav, setIsShowNav] = useState(false)

    const handleShowNav = () => {
        setIsShowNav(!isShowNav)
    }


  return (
    <header className="flex justify-between py-4 px-2 text-xl text-white bg-black items-center relative md:px-4 md:py-0 z-30">
        <h1 className="font-bold">Portfolio</h1>
        <i onClick = {handleShowNav} className='bx bx-menu-alt-right text-gray-300 text-3xl cursor-pointer md:hidden'></i>

        <nav className={`text-white absolute top-full bg-black ${isShowNav ? "left-0" : "-left-full"} w-full grid text-lg  gap-2 duration-200 md:static md:flex md:w-auto`}>
            <a className='hover:bg-violet-700 p-2 duration-200 pl-2' href="#" >Experience</a>
            <a className='hover:bg-violet-700 p-2 duration-200 pl-2' href="#" >Work</a>
            <a className='hover:bg-violet-700 p-2 duration-200 pl-2' href="#" >Photography</a>
            <a className='hover:bg-violet-700 p-2 duration-200 pl-2' href="#" >Contact</a>    
        </nav>
    </header>
  )
}

export default Navbar