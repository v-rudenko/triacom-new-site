import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material";

function createData(
  name: number | string,
  power: number | string,
  capacity: number | string,
  size: number | string
) {
  return { name, power, capacity, size };
}

const rows = [
  createData("Потужність", "000", "000", "000"),
  createData("Місткість", "000", "000", "000"),
  createData("Розмір", "000", "000", "000"),
  createData(
    "Абонентська плата",
    "Індивідуально",
    "Індивідуально",
    "Індивідуально"
  ),
];

const StyledTable = styled(Table)({
  minWidth: 650,
  maxWidth: "100%",
  background: "#99ddcc4a",
  // background: "#99ddcc4a",
});

function ColocationTable() {
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Розміщення сервера</TableCell>
            <TableCell align="right">Оренда стійки</TableCell>
            <TableCell align="right">Оренда шафи</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.power}</TableCell>
              <TableCell align="right">{row.capacity}</TableCell>
              <TableCell align="right">{row.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}

export default ColocationTable;
