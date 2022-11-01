import React from "react";
import "./App.css";
import { questions } from "./questions";
import { AiOutlineArrowLeft } from "react-icons/ai";


export default function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  const handleBack=()=>{
    if(currentQuestion>0){
      setCurrentQuestion(currentQuestion-1)
    }
  }
  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };


  return (
    <div className="app">
      {showScore ? (
        <section className="showScore-section">
          Your score is {score} out of {questions.length}
        </section>
      ) : (
        <>
          <section className="question-section">
            <h1 style={{textAlign:'left', marginLeft:'-10%'}}>
              {currentQuestion + 1}/{questions.length}
            </h1>
            <img src={questions[currentQuestion].questionImg} alt="" />
            <p>{questions[currentQuestion].questionText}</p>
          </section>

          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((item) => (
               <button className="buttonM" onClick={() => handleClick(item.isCorrect)}>
                <img className="optionsImg" src={item.answerText} alt="img"/>
              </button> 
              
              

            ))}
        
          </section>
          <button  className="buttonM" onClick={()=>handleBack()}
           style={{border:'0.5px solid grey',marginLeft:'10px'}}>
          <AiOutlineArrowLeft className="back-btn"/> 
           </button>
        </>
      )}
    </div>
  );
}
