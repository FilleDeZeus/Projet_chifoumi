import React from 'react'
import roles from './public/image/roles.svg'
import close from './public/image/close.svg'
import './public/css/roles.css'

export const Roles = ({modal}) => {
  return (
    <div id='rules'>
        <div className='bgModal' onClick={() => modal(false)}></div>
        <div className='modal flex flex-col p-8'>
            <div className='flex justify-between'>
                <h2 className='font-bold text-2xl text-gray-600'>RULES</h2>
                <img src={close} onClick={() => modal(false)}/>
            </div>
            <img className='p-8' src={roles} alt="" />
        </div>
    </div>
  )
}