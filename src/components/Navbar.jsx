import React from 'react'

function Navbar() {
  return (
    <header className='my-5 mx-5 py-5 px-5 md:px-10 flex items-center justify-between bg-neutral-800 rounded-lg'>
        <a href="/">
          <h1 className='text-2xl md:text-4xl text-green-600 font-bold'>Krusi<span className='text-gray-400'>bandhu</span></h1>
        </a>
        <a href="/"
        className='text-md md:text-xl font-bold bg-lime-400 px-2 py-1 md:px-5 md:py-2 rounded-3xl border-2 border-black hover:bg-lime-500'>Profile</a>
    </header>
  )
}

export default Navbar