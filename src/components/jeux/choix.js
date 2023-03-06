import React from 'react'
import './public/css/choix.css'
import { Papier } from './public/components/papier/papier.js'
import { Pierre } from './public/components/pierre/pierre.js'
import { Ciseaux } from './public/components/ciseaux/ciseaux.js'
import triangle from "./public/image/triangle.svg";

export const Choix = ({setUserChoix}) => {
  return (
    <div id='choix' className="flex justify-center items-center mx-auto mt-20">
        <Papier setUserChoix={setUserChoix}/>
        <Pierre setUserChoix={setUserChoix}/>
        <Ciseaux setUserChoix={setUserChoix}/> 
        <img src={triangle} className="w-2/3 h-2/3" alt="" />
    </div>
  )
}