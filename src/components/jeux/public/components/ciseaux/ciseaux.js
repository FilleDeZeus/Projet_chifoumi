import React from 'react'
import  ciseaux  from "./public/image/ciseaux.svg";
import './public/css/ciseaux.css'

export const Ciseaux = ({setUserChoix,  winLose }) => {
  return (
    <div onClick={()=>setUserChoix({selected: true, choice:"ciseaux"})} className={`choixCiseaux ${winLose === "YOU WIN" ? "winner" : winLose === "YOU LOOSE" ? "looser" : ""}`}>
        <img src={ciseaux} alt="" />
    </div>
  )
}