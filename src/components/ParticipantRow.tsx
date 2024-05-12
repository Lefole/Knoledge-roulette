import clsx from "clsx";
import React from "react";
import { FaCrown } from "react-icons/fa";

interface ParticipantRowProps {
  name: string;
  score: number;
  first?: boolean;
}

const ParticipantRow: React.FC<ParticipantRowProps> = ({
  name,
  score,
  first,
}) => {
  return (
    <div
      className={clsx("flex justify-between px-1", {
        "bg-green-200 rounded-sm": first,
      })}
    >
      <div className="flex items-center gap-2">
        <div className="w-5">
          {first && <FaCrown color="#ffc107" size={18} />}
        </div>
        <p>{name}</p>
      </div>
      <p>{score}</p>
    </div>
  );
};

export default ParticipantRow;
