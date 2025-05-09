import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full flex flex-row'>
        <nav className='w-full absolute top-0 left-0 right-0 px-4 py-2 flex flex-row h-20 justify-between w-full '>
            <ul className='flex flex-row justify-between w-full py-4 items-center px-4 rounded-md border  border-gray-500'>
                <li>
                    <a href=""><img className='w-12 h-12 rounded-full' src="/test.jpg" alt="" /></a>
                </li>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Allcourses</a>
                </li>
                <li>
                    <a href="">Page</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
                <li>
                    <a href="">signin</a>
                </li>
                <li>
                    <button className='h-10 px-4 border rounded-md'>signup</button>
                </li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
