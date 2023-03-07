import React from 'react'
import  pierre  from "./public/image/pierre.svg";
import './public/css/pierre.css'
export const Pierre = ({setUserChoix,  winLose}) => {

  return (
    // le clique declenche la fontion setUserChoix pour etre à jour les propriete
    <div onClick={()=>setUserChoix({selected: true, choix:"pierre"})} className={`choixPierre ${winLose === "YOU WIN" ? "winner" : winLose === "YOU LOOSE" ? "looser" : ""}`}>
        <img src={pierre} alt="" />
    </div>
  )
}