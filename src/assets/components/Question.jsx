export default function Question({ questions, clicked, onClick }) {
  console.log(clicked);
  if (clicked)
    return (
      <>
        <div
          className="bg-gray-100 my-2 py-4 px-6 rounded-2xl   "
          onClick={onClick}
        >
          {questions.question}
        </div>
        <div
          className="bg-gray-100 my-2 py-4 px-6 rounded-2xl   "
          onClick={onClick}
        >
          {questions.answer}
        </div>
      </>
    );
  else {
    <div
      className="bg-gray-100 my-2 py-4 px-6 rounded-2xl   "
      onClick={onClick}
    >
      {questions.question}
    </div>;
    return;
  }
}
