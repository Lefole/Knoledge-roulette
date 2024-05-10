import { FaPhone } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const ComodinSection = () => {
  return (
    <>
      <h3 className="mb-5 w-full text-xl font-semibold italic text-neutral-700">
        Comodines
      </h3>
      <div className="mb-5 flex h-fit w-full items-center justify-between gap-2 ">
        <FaPeopleGroup
          className="h-10 w-1/3 rounded-full bg-blue-800 py-1 text-white shadow-md
          hover:scale-110 hover:bg-blue-800 hover:shadow-lg active:bg-blue-950"
          size={40}
          onClick={() => {}}
        />
        <button
          className="h-10 w-1/3 rounded-full bg-blue-800  py-1 text-xl font-bold text-white
    shadow-md hover:scale-110 hover:bg-blue-800 hover:shadow-lg active:bg-blue-950"
          type="button"
          onClick={() => {}}
        >
          50:50
        </button>
        <FaPhone
          className="h-10 w-1/3 rounded-full bg-blue-800 py-1 text-white shadow-md
    hover:scale-110 hover:bg-blue-800 hover:shadow-lg active:bg-blue-950"
          size={40}
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default ComodinSection;
