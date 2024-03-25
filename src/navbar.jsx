import React from 'react'

function navbar() {
  return (
    <>
      <div className = 'bg-[#101628] flex-col flex items-end'>
        <ol className = 'flex p-2ss justify-end '>
          <a href = '#' className = 'm-4 font-semibold underline hover:text-red-400 text-white'>01. Home</a>
          <a href = '#' className = 'm-4 font-semibold underline hover:text-red-400 text-white'>02. Portfolio Projects</a>
          <a href = '#' className = 'm-4 font-semibold underline hover:text-red-400 text-white'>03. About Me!</a>
          <a href = '#' className = 'm-4 font-semibold underline hover:text-red-400 text-white'>04. Gallery Project!</a>
        </ol>
      </div>
    </>
  )
}

export default navbar
