import React, { useEffect, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { GameRecordModel } from "../../../models/gameRecordModel";
import { getAllRecordsFromGame } from "../../../services/gameRecordService";
import { useGameStore } from "../../../state/gameStore";
import { useParticipantsLoading } from "../../../hooks/useParticipantsLoading";
import { CircularProgress } from "@mui/material";

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
  const [data, setData] = React.useState<GameRecordModel[]>([]);
  const [participants, participants_loading] = useParticipantsLoading();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (participants_loading) return;

    getAllRecordsFromGame(gameId).then(async (data) => {
      const fixedData: GameRecordModel[] = await data.map(
        (game_record: GameRecordModel) => {
          const participant = participants.find(
            (participant) =>
              game_record.participant_id == participant.participant_id
          );
          game_record.participant_id = "";
          if (participant) game_record.participant_id = participant.name;
          setLoading(false);
          return game_record;
        }
      );
      setData(fixedData);
    });
  }, [gameId, participants, participants_loading]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex p-10 border-2 rounded-xl border-slate-400 w-full justify-center items-center">
      {!loading && (
        <table className="text-center text-2xl rounded-xl w-full h-full">
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
              <tr key={row.id} className="h-10 border-2 border-slate-400">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {loading && <CircularProgress size={100} />}
    </div>
  );
};

export default GameRecordTable;
