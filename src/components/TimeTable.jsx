import React from "react";
import Styled from "styled-components";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TimeTable = () => {
    const tableInfo = [
        {
          name: "주일예배",
          time: "오전9시",
          location: "본당",
          user: "ㅇㅇㅇ목사님",
        },
        {
          name: "수요예배",
          time: "오전9시",
          location: "본당",
          user: "ㅇㅇㅇ목사님",
        },
        {
          name: "금요철야",
          time: "오전9시",
          location: "본당",
          user: "ㅇㅇㅇ목사님",
        },
        {
          name: "어린이예배",
          time: "오전9시",
          location: "본당",
          user: "ㅇㅇㅇ목사님",
        },
        {
          name: "새벽예배",
          time: "오전9시",
          location: "본당",
          user: "ㅇㅇㅇ목사님",
        },
      ];


return (
    <Box>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">구분</TableCell>
            <TableCell align="right">예배시간</TableCell>
            <TableCell align="right">예배장소</TableCell>
            <TableCell align="right">담당교역자</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableInfo.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="right">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.user}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>


);
};

const Box = Styled.div`
    width:60%;
`



export default TimeTable;