import React from 'react'
import  papier  from "./public/image/papier.svg";
import './public/css/papier.css'
export const Papier = ({setUserChoix,  winLose }) => {
  return (
    // le clique declenche la fontion setUserChoix pour etre à jour les propriete
    <div onClick={()=>setUserChoix({selected: true, choix:"papier"})} className={`choixPapier ${winLose === "YOU WIN" ? "winner" : winLose === "YOU LOOSE" ? "looser" : ""}`}>
        <img src={papier} alt="" />
    </div>
  )
}