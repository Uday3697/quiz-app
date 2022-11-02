import React, { useState } from "react";
import "./App.css";
import { questions } from "./questions";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Header from "./Components/Header/Header";
//mui
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


// footer image logo
import watsapp from './assets/images/watsapp.png'
import fb from './assets/images/fb.png'
import telegram from './assets/images/telegram.png'
import twiter from './assets/images/twiter.png'
import pin from './assets/images/pin.png'


export default function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  //mui
  const [value, setValue] = useState(2);


  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
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
        <div className="body-container">
          <Header />
          <section className="showScore-section">
            <div className="ans-container">
              <div className="result-container">
                <p1>Your Score :</p1> <br />
                Your score is {score} out of {questions.length}
                <div className="star-container">
                  <div className="st-left">
                  <h3>You iq level score  is {score}  upon rating of 5  </h3>
                  </div>
                  <div className="st-right">
                    <Box
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                      <Typography component="legend">{score}</Typography>

                    </Box>
                  </div>
                </div>


                <div>
                  yhgtfredwsergthjhgtrfed <br />
                  jtyhtgrfedrfgthyjjyuhygtf <br />
                  tujhyrtgrfergtyjukjyhtgrfe<br />
                  retyuii<br /><br />
                  uytretyuiuytr<br /><br />
                  htgrfrhjhgfdghjgfdertyutrtyutre<br />
                </div>
                <div className="footer-items">
                  <span>Share Result:</span>
                  <div className="footer-icons">
                    <img className="ftDP" src={watsapp} alt="" />
                    <img className="ftDP" src={telegram} alt="" />
                    <img className="ftDP" src={fb} alt="" />
                    <img className="ftDP" src={twiter} alt="" />
                    <img className="ftDP" src={pin} alt="" />
                    <span>....</span>
                  </div>
                </div>
              </div>
            </div>

          </section>

        </div>
      ) : (
        <div className="body-container">
          <section className="question-section">

            <h1 style={{ textAlign: 'left', marginLeft: '-10%' }}>
              {currentQuestion + 1}/{questions.length}
            </h1>
            <img src={questions[currentQuestion].questionImg} alt="" />
            <p>{questions[currentQuestion].questionText}</p>
          </section>

          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((item) => (
              <button className="buttonM" onClick={() => handleClick(item.isCorrect)}>
                <img className="optionsImg" src={item.answerText} alt="img" />
              </button>



            ))}

          </section>
          <button className="buttonM" onClick={() => handleBack()}
            style={{ border: '0.5px solid grey', marginLeft: '10px' }}>
            <AiOutlineArrowLeft className="back-btn" />
          </button>
        </div>
      )}
    </div>
  );
}

