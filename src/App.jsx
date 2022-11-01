import React from "react";
import "./App.css";
import { questions } from "./questions";


export default function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

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
  const btImages=[questions[currentQuestion].answerOptions]

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
               <button onClick={() => handleClick(item.isCorrect)}>
                {item.answerText} 
              </button> 
              
              

            ))}
            {questions[currentQuestion].answerOptions.map((e,index)=> ( 
              <div>
              {console.log("jiiiiiiiiii" ,e.answerText)}
              <img className="optionsImg" src={e.answerText} alt="img"/>
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
}
