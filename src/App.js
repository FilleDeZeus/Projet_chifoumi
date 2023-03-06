import { useState } from 'react';
import './App.css';
import { Choix } from "./components/jeux/choix.js";
import { Score } from "./components/score/score.js";
import { Roles } from "./components/roles/roles.js";
import { Resultat } from "./components/jeux/resultat.js";

//Le composant principal le fameux APP
export const App = () => {
  //etat du score initialement à 0, modification de l'etat avec la focntion setScore
  const [score, setScore] = useState(0);


  const [userChoix, setUserChoix] = useState({
    selected: false,
    choice: ""
  });

  const [modal, setModal] = useState(false);

  return (
    <div className="App">
        <Score score={score}/>
        {userChoix.selected ? <Resultat setUserChoix={setUserChoix} userChoix={userChoix} score={score} setScore={setScore}/> : <Choix setUserChoix={setUserChoix}/>}
        <button
          className='text-white border rounded-lg px-8 py-2 tracking-widest absolute bottom-10 right-10' 
          type="button"
          onClick={() => setModal(true)}>RULES</button>
        {modal ? <Roles modal={setModal}/> : null}
    </div>
  );
}