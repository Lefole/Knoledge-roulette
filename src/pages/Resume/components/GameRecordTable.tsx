import React, { useEffect } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import useGameRecordLoading from "../../../hooks/useGameRecordLoading";
// import { useParticipantsLoading } from "../../../hooks/useParticipantsLoading";
import { GameRecordModel } from "../../../models/gameRecordModel";
import { getAllRecordsFromGame } from "../../../services/gameRecordService";
import { useGameStore } from "../../../state/gameStore";

const columnHelper = createColumnHelper<GameRecordModel>();

const columns = [
  columnHelper.accessor("participant_id", {
    cell: (info) => {
      return info.getValue();
    },
    header: "Participante",
  }),
  columnHelper.accessor("audience_help", {
    cell: (info) => (!info.getValue() ? "X" : ""),
    header: "Audiencia",
  }),
  columnHelper.accessor("fifty_fifty_help", {
    cell: (info) => (!info.getValue() ? "X" : ""),
    header: "50:50",
  }),
  columnHelper.accessor("call_help", {
    cell: (info) => (!info.getValue() ? "X" : ""),
    header: "Llamada",
  }),
  columnHelper.accessor("challenge_points", {
    cell: (info) => info.getValue(),
    header: "Reto",
  }),
  columnHelper.accessor("score", {
    cell: (info) => info.getValue(),
    header: "Puntaje",
  }),
];

const GameRecordTable = () => {
  const { gameId } = useGameStore();
  const [scores, scores_loading] = useGameRecordLoading();
  //   const [participants, participants_loading] = useParticipantsLoading();
  const [data, setData] = React.useState<GameRecordModel[]>([]);

  useEffect(() => {
    getAllRecordsFromGame(gameId).then((data) => {
      setData(data);
    });
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-10 border-2 rounded-xl border-slate-400 ">
      <table className="text-center text-2xl rounded-xl">
        <thead className="h-16">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="bg-violet-800 text-white font-semibold"
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-10 ">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="h-10">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameRecordTable;
