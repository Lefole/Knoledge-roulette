import { FaPhone } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import LifelineButton from "./LifelineButton";
import { useLifelinePressed } from "../state/lifelinePressed";

const ComodinSection = () => {
  const { fifthy_fifthy, setFiftyPressed } = useLifelinePressed();
  return (
    <>
      <h3 className="mb-5 w-full text-xl font-semibold italic text-neutral-700">
        Comodines
      </h3>
      <div className="mb-5 flex h-fit w-full items-center justify-between gap-2 ">
        <LifelineButton>
          <FaPeopleGroup size={40} />
        </LifelineButton>
        <LifelineButton
          onClick={() => {
            if (!fifthy_fifthy) setFiftyPressed(true);
          }}
        >
          50:50
        </LifelineButton>
        <LifelineButton>
          <FaPhone size={30} />
        </LifelineButton>
      </div>
    </>
  );
};

export default ComodinSection;
