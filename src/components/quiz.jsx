import { useState } from "react";
import Results from "./results";
function Quiz() {
    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Jupiter"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
            answer: "Harper Lee"
        }
    ];

    const [userAnswers, setUserAnswers] = useState([null, null, null]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const isLastQuestion = currentQuestion === questionBank.length - 1;

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        setUserAnswers(newUserAnswers);
    }

    function nextQuestion() {
        if (!isLastQuestion) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizFinished(true);
        }
    }

    function prevQuestion() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    // Conditional rendering belongs here,
    // NOT inside nextQuestion()
    if (quizFinished) {
        return (
            <div>
                <Results userAnswers={userAnswers} questionBank={questionBank} />
            </div>
        );
    }

    return (
        <div>
            <h2>Question {currentQuestion + 1}</h2>

            <p>{questionBank[currentQuestion].question}</p>

            <ul>
                {questionBank[currentQuestion].options.map((option, index) => (
                    <li key={index}>
                        <button
                            className="option"
                            onClick={() => handleSelectOption(option)}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="nav-buttons">
                <button
                    onClick={prevQuestion}
                    disabled={currentQuestion === 0}
                >
                    Previous
                </button>

                <button
                    onClick={nextQuestion}
                    disabled={!userAnswers[currentQuestion]}
                >
                    {isLastQuestion ? "Finish Quiz" : "Next"}
                </button>
            </div>
        </div>
    );
}

export default Quiz;