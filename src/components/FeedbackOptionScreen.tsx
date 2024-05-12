import clsx from "clsx";

const FeedbackOptionScreen = () => {
  const answerCorrect = false;
  return (
    <div
      className={clsx("absolute z-10 h-full w-full", {
        flex: answerCorrect,
        hidden: !answerCorrect,
      })}
    >
      <div className="absolute z-10 h-full w-full flex items-center justify-center bg-slate-600 opacity-80"></div>
      <div className="absolute z-20 h-full w-full flex items-center justify-center">
        <img
          className="opacity-100 rounded-full h-80 w-80 object-fill"
          src="https://i.makeagif.com/media/2-02-2023/RR35Ne.gif"
          alt="amungus"
        />
      </div>
    </div>
  );
};

export default FeedbackOptionScreen;
