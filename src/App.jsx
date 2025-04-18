import { useState } from "react";
import { questions } from "./questions";

function App() {
  return (
    <div className="app">
      <h1 className="heading-primary">Frequently Asked Question</h1>
      <p className="heading-secondary">
        Here are some of th frequent asked questions :{" "}
      </p>
      <Accordion />
    </div>
  );
}

// div : accordion  =>  question => 2 div

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(i) {
    if (isOpen === i) setIsOpen(false);
    else setIsOpen(i);
  }

  return (
    <div className="accordion ">
      {questions.map((question, i) => (
        <div
          className="question-wrapper"
          key={i}
          onClick={() => handleClick(i)}
        >
          {" "}
          <div className="q">
            {" "}
            {question.question}{" "}
            <span className="collapse-sign"> {isOpen === i ? "-" : "+"}</span>
          </div>
          {isOpen === i && <div className="a"> {question.answer}</div>}
          {/*  */}
        </div>
      ))}
    </div>
  );
}
export default App;
