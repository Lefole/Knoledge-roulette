import { useEffect } from "react";

function range(n: number) {
  return Array.from({ length: n }).map((_, index) => index);
}

const QuestionsView = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mb-8 text-3xl font-semibold text-neutral-700">
        Preguntas
      </h3>
      <div className="grid h-fit max-h-96 grid-cols-5 gap-4 overflow-y-scroll">
        {range(200).map((value) => (
          <div className="w-auto rounded-sm bg-neutral-400 px-4 py-2 text-center text-xl text-white">
            {value + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsView;
