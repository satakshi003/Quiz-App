import { useState } from 'react'
import './App.css'
import {quizQuestions} from './questions'
import MainMenu from './components/mainMenu.jsx';
import Quiz from './components/Quiz.jsx';
import EndScreen from './components/endScreen.jsx';
import { QuizContext } from './helpers/context.jsx';

function App() {
  const [gameState,setGameState]= useState("menu");
  const[score,setScore]=useState(0);
  return (
    <>
      <div className="App">
        <h1>Quiz App</h1>
<QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
        {gameState == "menu" && <MainMenu />}
        {gameState == "quiz" && <Quiz />}
        {gameState == "endScreen" && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </>
  )
}

export default App
