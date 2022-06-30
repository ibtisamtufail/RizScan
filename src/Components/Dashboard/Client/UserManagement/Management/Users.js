import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from './imgs/edit.png';
import DelIcon from './imgs/del.png';
import { useSelector, useDispatch } from 'react-redux';
import { setUserListData } from '../../../../Redux/UsersSlice';
import axios from 'axios';
import { getUsersListAPiURL, deleteUserAPiURL } from '../../../../Apis/Apis';
import { showAlert } from '../../../../AlertMessage/AlertFunction';
import CircularProgress from '@mui/material/CircularProgress';

export default function StickyHeadTable({ setAction }) {
    const Auth = useSelector(state => state.Auth);
    const UserList = useSelector(state => state.userList.users);
    const dispatch = useDispatch();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.interceptors.request.use(
            (config) => {
                config.headers.Authorization = Auth?.token ? `Bearer ${Auth?.token}` : "";
                return config;
            },
            (error) => {
                console.log("---> token check", error.response);
            }
        );
    }, [])

    const getUserList = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${getUsersListAPiURL}?store_id=${Auth?.customer_id}`);
            if (data) {
                setLoading(false);
                dispatch(setUserListData(data));
            }
        } catch (error) {
            setLoading(false);
            if (error?.response?.data?.message || error?.response?.data?.error) {
                showAlert('error', error?.response?.data?.message || error?.response?.data?.error);
            }
            else {
                showAlert('error', 'Something went wrong');
            }
        }
    }

    useEffect(() => {
        getUserList();
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteUser = async (target) => {
        setLoading(true);
        const { user_name, user_type } = target;
        const obj = { store_id: Auth?.customer_id, user_name, user_type: user_type.toLowerCase() };
        axios.delete(deleteUserAPiURL, {
            headers: {
                Authorization: `Bearer ${Auth?.token}`
            },
            data: obj
        }).then(data => {
            if (data) {
                setLoading(false);
                dispatch(setUserListData(data.data));
                showAlert('success', 'User delete successfully');
            }
        }).catch(error => {
            setLoading(false);
            if (error?.response?.data?.message) {
                showAlert('error', error?.response?.data?.message);
            }
            else {
                showAlert('error', 'Something went wrong');
            }
        });
    }


    return <>
        {loading ? <div style={{ textAlign: 'center' }}><CircularProgress /></div> :
            UserList?.length > 0 ?
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>User Name</TableCell>
                                    <TableCell align='center'>User Type</TableCell>
                                    <TableCell align='center'>Update</TableCell>
                                    <TableCell align='center'>Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {UserList
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                <TableCell style={{ fontWeight: 'bold' }}>{row?.user_name}</TableCell>
                                                <TableCell style={{ fontWeight: 'bold' }} align='center'>{row?.user_type}</TableCell>
                                                <TableCell align='center'><img onClick={() => setAction({ open: true, type: 'Update', data: row })} className='bottom-action-img-user' src={EditIcon} /></TableCell>
                                                <TableCell align='center'><img onClick={() => deleteUser(row)} className='bottom-action-img-user' src={DelIcon} /></TableCell>
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
                : <div className='user-list-empty'>
                    <span>No User Available Yet</span>
                </div>
        }
    </>
}