import React from 'react'
import  pierre  from "./public/image/pierre.svg";
import './public/css/pierre.css'
export const Pierre = ({setUserChoix,  winLose}) => {

  return (
    <div onClick={()=>setUserChoix({selected: true, choice:"pierre"})} className={`choixPierre ${winLose === "YOU WIN" ? "winner" : winLose === "YOU LOOSE" ? "looser" : ""}`}>
        <img src={pierre} alt="" />
    </div>
  )
}