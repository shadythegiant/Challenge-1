import Heading from "./Heading";
import Questions from "./Questions";

const questions = [
  {
    question: "what is roadmap.sh",
    answer:
      " roadmap.sh is a community effort to create learning paths quides, project ideas and other similar content  to help developers in their careers ",
  },
  {
    question: " what are the plan projecs for roadmap.sh",
    answer: " dunnno ",
  },
  {
    question: " how is  roadmap.sh built ?",
    answer: " dunnno ",
  },
  {
    question: " can i use roadmap.sh in my team ",
    answer: " dunnno ",
  },
  {
    question: " How can i create custome roadmaps ?",
    answer: " dunnno ",
  },
  {
    question: " Done with these questions ?",
    answer: " dunnno ",
  },
];

export default function Acoordion() {
  return (
    <div className=" text-stone-600  my-auto mx-0 py-auto px-0 ">
      <Heading />
      {questions.map((question) => (
        <Questions questions={question} />
      ))}
    </div>
  );
}
