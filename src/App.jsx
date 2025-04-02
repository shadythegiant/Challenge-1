import { useState } from "react";
import { questions } from "./questions";

function App() {
  const [selected, setSelected] = useState(null);

  function toggle(i) {
    if (selected === i) return setSelected(null);

    setSelected(i);
  }
  return (
    <>
      <div className=" flex justify-center items-center w-[40rem] max-w-[40rem] ">
        <div className=" py-10 p-x10 bg-stone-200/50  rounded-2xl w-[100%]">
          <h1 className="font-semibold text-xl  text-center my-3">
            Frequently Questions{" "}
          </h1>
          <p className="text-md font-medium text-center text-stone-900">
            Here are some of your frequent answers
          </p>

          <div className="accordion">
            {questions.map((item, i) => (
              <div className="item flex flex-col mt-5  ">
                <div
                  className="title bg-stone-300 py-3 px-3 text-center text-md font-semibold capitalize tracking-widest text-gray-900 cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  {" "}
                  <h2 className="flex justify-between items-center">
                    <span>{item.question}</span>{" "}
                    <span>{selected === i ? "-" : "+"}</span>
                  </h2>
                </div>

                {/* content  */}
                {selected === i && (
                  <div className="title bg-stone-200/50 py-4 px-3 text-center text-sm  capitalize tracking-widest text-gray-900 transition-all duration-300 ease-in">
                    {" "}
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
