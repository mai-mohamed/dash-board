import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "id", label: "id", minWidth: 170 },
  { id: "name", label: "Name ", minWidth: 100 },
  {
    id: "age",
    label: "Age",
    minWidth: 170,
    align: "right",
  },
  {
    id: "jobTitle",
    label: "Job Title",
    minWidth: 170,
    align: "right",
  },
];

const rows = [
  { id: 1, name: "pla", age: "20", jobTitle: "engineer" },
  { id: 1, name: "pla", age: "20", jobTitle: "engineer" },
  { id: 1, name: "pla", age: "20", jobTitle: "engineer" },
  { id: 1, name: "pla", age: "20", jobTitle: "engineer" },
];

function Agent() {
  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
export default Agent;
