import React from 'react'

const getScore = (userAnswers, questionBank) => {
    let score = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === questionBank[i].answer) {
            score++;
        }
    }
    return score;
}

function Results({ userAnswers = [], questionBank = [] }) {
    const finalScore = getScore(userAnswers, questionBank)
    return (
        <div>
            <h2>Quiz Complete!</h2>
            <p>Thanks for taking the quiz.</p>
            <p>Your Score: {finalScore}/{questionBank.length}</p>
            <button className='restart-button' onClick={() => window.location.reload()}>
                Restart Quiz
            </button>
        </div>
    )
}

export default Results