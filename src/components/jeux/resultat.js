//importation de react, useState useEffect
import React, { useState, useEffect } from 'react';

//importation du css
import './public/css/resultat.css'

//importation des composant enfant
import { Papier } from './public/components/papier/papier.js'
import { Pierre } from './public/components/pierre/pierre.js'
import { Ciseaux } from './public/components/ciseaux/ciseaux.js'

//creation d'un tableau des différents choix
const choixTab = ["pierre", "ciseaux", "papier"];

//Composant Resultat et declaration de props
export const Resultat = ({setUserChoix,userChoix,score,setScore}) => {
  //creation des etats
  const [sec, setsec] = useState(3); //etat qui represente le decompte, iitialement à 3
  const [visible, setVisible] = useState(false); //etat qui represente affichage, initalement caché avec false
  const [winLose, setWinLose] = useState("");//etat qui represente le resultat entre gagnant, perdant et égalité
  const [ordiChoix, setOrdiChoix] = useState(""); //etat qui représente le choix de l'ordi

  // quand l'etat ordiChoix la fonction est appelé
  useEffect(() => {
    //creation d'un minuteur avec la fct setInterval qui sera appelé tte les 1sec
    const minuteur = setInterval(() => {
      //permet de mettre à jour sec --- verifie si sec > 0 si oui ca va enlever 1s sinon ca renvoie 0
      setsec(sec => sec > 0 ? sec - 1 : sec);
    }, 1000);

    //verifier que ordiChoix n'est pas defini
    if (!ordiChoix) {
      //fonction qui met à jour ordiChoix
      setOrdiChoix(
      //choix aleatoire selectionné dans le tabChoix
        choixTab[Math.floor(Math.random()*choixTab.length)]);
    }
    //creation de variable pour mettre à jours l"etat à 3.1s
    let againBtn = setTimeout(() => {
      //true est attribue à l'etat afin de rendre le btn again visible
        setVisible(true);
      }, 3100);

    return () => {
      //nettoyage 
        clearInterval(minuteur);
        clearTimeout(againBtn);}
  }, [ordiChoix]);

  //si changment de l'etat des choix de l'user et de l'ordi fonction appelé
  useEffect(() => {
    //creation de la variable gagnant
    const win = "YOU WIN";
    //creation de la variable perdante
    const loose = "YOU LOOSE";
    //si le choix de l'user et de l'ordi sont identiques
    if (userChoix.choice ===  ordiChoix ) {
      //l'etat de winLose renverra TIE
      setWinLose("TIE");
      //apres 3sec de jeu le score est mis à jours
      setTimeout(() => setScore(score), 3000);

    //si le choix de l'user est pierre
    } else if (userChoix.choice === "pierre") {
      //si le choix de l'ordi
      if (ordiChoix === "ciseaux") {
        setWinLose(win);
        setTimeout(() => setScore(score + 1), 3000);
      } else {
        setWinLose(loose);
        setTimeout(() => setScore(score - 1), 3000);
      }
    } else if (userChoix.choice === "ciseaux") {
      if (ordiChoix === "papier") {
        setWinLose(win);
        setTimeout(() => setScore(score + 1), 3000);
      } else {
        setWinLose(loose);
        setTimeout(() => setScore(score - 1), 3000);
      }
    } else if (userChoix.choice === "papier") {
      if (ordiChoix === "pierre") {
        setWinLose(win);
        setTimeout(() => setScore(score + 1), 3000);
      } else {
        setWinLose(loose);
        setTimeout(() => setScore(score - 1), 3000);
      }
    }
  }, [userChoix.choice, ordiChoix]);

  //fonction playAgain
  const playAgain = () => {
    //met à jour l'etat selected avec false
    setUserChoix({selected: false});
    //cache le resultat precedent grace à false
    setVisible(false);
  };



return (
  <div id='resultat'>
      <div className='flex justify-center items-center'>
          <div className='flex flex-col'>
              <p className='text-white font-bold text-center my-10'>YOU PICKED</p>
              {userChoix.choice === "pierre"? <Pierre winLose={winLose}/>: userChoix.choice === "ciseaux" ? <Ciseaux winLose={winLose}/> : userChoix.choice === "papier" ? <Papier winLose={winLose}/> : null}
          </div>

          {visible ? 
          <div className='flex flex-col justify-center'> 
              <p className='text-white font-bold text-center mt-10 mx-10 text-4xl'>{winLose}</p> 
              <button className='bg-white rounded-lg px-10 py-1 mx-10 my-5 font-bold text-gray-500 hover:text-red-400' onClick={playAgain}>PLAY AGAIN</button> 
          </div> : null}

          <div className='flex flex-col'>
              <p className='text-white font-bold text-center my-10'>THE HOUSE PICKED</p>

              {sec > 0 ? 
                <div className='minuteur'>
                  <p>{sec}</p>
                </div> 
                :
                ordiChoix === "pierre"
                ? 
                <Pierre/>
                :
                ordiChoix === "ciseaux" 
                ? 
                <Ciseaux /> 
                : 
                ordiChoix === "papier" 
                ? 
                <Papier/> 
                :
                null}
          </div>
      </div>
  </div>
)
}