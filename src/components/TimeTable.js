import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { borderBottom } from '@mui/system';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('주일예배', '오전9시', '본당', 'ㅇㅇㅇ목사님'),
  createData('수요예배', '오전9시', '본당', 'ㅇㅇㅇ목사님'),
  createData('금요철야', '오전9시', '본당', 'ㅇㅇㅇ목사님'),
  createData('어린이예배', '오전9시', '본당', 'ㅇㅇㅇ목사님'),
  createData('새벽예배', '오전9시', '본당', 'ㅇㅇㅇ목사님'),
];

export default function TimeTable() {
  return (
    <TableContainer component={Paper} className = "timetable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>구분</TableCell>
            <TableCell align="right">예배시간</TableCell>
            <TableCell align="right">예배장소</TableCell>
            <TableCell align="right">담당교역자</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}