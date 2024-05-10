import OptionButton from "../components/OptionButton";
import { clsx } from "clsx";
import ContinueButton from "../components/ContinueButton";

const QuestionPage = () => {
  const isNormaldirectory = false;

  return (
    <div className="flex h-full w-full flex-col gap-5 px-10">
      <div className="flex h-full w-full flex-col gap-5">
        {/* Pregunta */}
        <div
          className={clsx("w-full rounded-lg bg-fuchsia-700", {
            "h-3/5": isNormaldirectory,
            "h-4/5": !isNormaldirectory,
          })}
        >
          a
        </div>
        {/* Respuestas */}
        <div
          className={clsx("w-full gap-4", {
            "flex flex-shrink-0 flex-col": isNormaldirectory,
            "grid grid-cols-2": !isNormaldirectory,
          })}
        >
          <OptionButton text="a" onClick={() => {}} />
          <OptionButton text="a" onClick={() => {}} />
          <OptionButton text="a" onClick={() => {}} />
          <OptionButton text="a" onClick={() => {}} />
        </div>
      </div>
      <div className="disabled: mr-20 flex items-center justify-end">
        <ContinueButton destinyRoute="../" />
      </div>
    </div>
  );
};

export default QuestionPage;
