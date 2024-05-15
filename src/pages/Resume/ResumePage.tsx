import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import useParticipantsLoading from "../../hooks/useParticipantsLoading";
import { useEffect } from "react";
import { ParticipantModel } from "../../models/participantModel";
import useGameRecordLoading from "../../hooks/useGameRecordLoading";

const ResumePage = () => {
  const [scores, loading] = useGameRecordLoading();
  const data = [JSON.parse(JSON.stringify(scores))];
  const columns = [
    { header: "Participante", accesoryKey: "participant_id" },
    { header: "Público", accesoryKey: "audience_help" },
    { header: "50/50", accesoryKey: "fifty_fifty_help" },
    { header: "Llamada", accesoryKey: "call_help" },
    { header: "Puntaje", accesoryKey: "score" },
  ];
  //const [participants, loading] = useParticipantsLoading();
  // const data = [{ name: "a", score: 2 }];
  // const columns = [
  //   {
  //     header: "Participante",
  //     accessorKey: "name",
  //   },
  //   {
  //     header: "Puntaje",
  //     accessorKey: "score",
  //   },
  // ];
  //JSON.parse(JSON.stringify(participants));
  // const table = useReactTable({
  //   data,
  //   columns,
  //   getCoreRowModel: getCoreRowModel(),
  // });
  return (
    <main className="">
      <table>
        <thead></thead>
        {/* <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{header.column.columnDef.header}</th>
              ))}
            </tr>
          ))}
        </thead> */}
      </table>
    </main>
  );
};

export default ResumePage;
