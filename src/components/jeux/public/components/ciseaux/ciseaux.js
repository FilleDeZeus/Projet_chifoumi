import React from 'react'
import  ciseaux  from "./public/image/ciseaux.svg";
import './public/css/ciseaux.css'

export const Ciseaux = ({setUserChoix,  winLose }) => {
  return (
    // le clique declenche la fontion setUserChoix pour etre à jour les propriete
    <div onClick={()=>setUserChoix({selected: true, choix:"ciseaux"})} className={`choixCiseaux ${winLose === "YOU WIN" ? "winner" : winLose === "YOU LOOSE" ? "looser" : ""}`}>
        <img src={ciseaux} alt="" />
    </div>
  )
}