import React from 'react'
import logo from './public/image/logo.svg'

export const Score = ({score}) => {
  return (
    <div className='flex justify-between max-w-3xl mx-auto border-2 border-slate-500 rounded-xl p-5 '>
      <div className='font-bold text-3xl leading-none text-white'>
        <img src={logo} alt="logo" />
      </div>
      <div className='bg-white px-9 rounded-lg flex flex-col justify-center items-center leading-none'>
        <p className='text-sm tracking-widest text-indigo-700 font-semibold'>SCORE</p>
        <p className='font-bold text-5xl text-slate-600'>{score}</p>
      </div>
    </div>
  )
}