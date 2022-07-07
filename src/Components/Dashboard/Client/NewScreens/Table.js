import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useSelector, useDispatch } from "react-redux";
import DelIcon from "./imgs/del.png";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import CustomizedDialogs from "./modal"

export default function StickyHeadTable({ setAction }) {
  const Auth = useSelector((state) => state.Auth);
  const UserList = useSelector((state) => state.userList.users);
  const dispatch = useDispatch();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);

    
  const handleClickOpen = () => {
    setOpen(true);
  };


  const UsersEmailList = [
    { id: 1, Email: "umairs7&hotmail.com" },
    { id: 2, Email: "umairshafique16@gmail.com" },
    { id: 3, Email: "ali@gmail.com" },
    { id: 4, Email: "test@gmail.com" },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress />
          
        </div>
      ) : UserList?.length > 0 ? (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <CustomizedDialogs open = {open} setOpen = {setOpen} action = "2"/>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Users Email</TableCell>
                  
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {UsersEmailList.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                ).map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell style={{ fontWeight: "bold" }}>
                        {row?.Email}
                      </TableCell>
                      
                      
                      <TableCell align="center">
                        <img style={{cursor: "pointer"}} className="bottom-action-img-user" src={DelIcon} onClick ={handleClickOpen} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={UserList?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <div className="user-list-empty">
          <span>No User Available Yet</span>
        </div>
      )}
    </>
  );
}
