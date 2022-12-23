import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/actions';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
const Home = () => {

    let dispatch = useDispatch();

    const navigate = useNavigate();

    const {users} = useSelector(state => state.data);

    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    const handleDelete = (id) => {
      if(window.confirm("Are you sure wanted to delete the user ?")){
        dispatch(deleteUser(id));
      }
    };
    
    return (
      <div>
        <div style={{ margin: '20px' }}>
          <Button variant="contained" color="primary" onClick={() => navigate('/adduser')}>
              Add User
          </Button>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 900 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Contact</StyledTableCell>
                <StyledTableCell align="center">Address</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users && users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">{user.contact}</StyledTableCell>
                  <StyledTableCell align="center">{user.address}</StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button 
                          color="secondary"
                          onClick={() => handleDelete(user.id)}

                        >Delete</Button>
                        <Button color="primary">Edit</Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  )
}

export default Home