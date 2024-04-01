import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
            <Link href={"/"} className='text-white font-bold'>GT Coding</Link>
            <Link href={"/AddTopic"} className='bg-white p-2'>Add Topic</Link>
        </nav>
    </div>
  )
}

export default Navbar