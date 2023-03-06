import React from 'react'
import  papier  from "./public/image/papier.svg";
import './public/css/papier.css'
export const Papier = ({setUserChoix,  winLose }) => {
  return (
    <div onClick={()=>setUserChoix({selected: true, choice:"papier"})} className={`choixPapier ${winLose === "YOU WIN" ? "winner" : winLose === "YOU LOOSE" ? "looser" : ""}`}>
        <img src={papier} alt="" />
    </div>
  )
}