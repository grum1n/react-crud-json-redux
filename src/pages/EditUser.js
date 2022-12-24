import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';

const EditUser = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
    });

    const [error, setError] = useState('') ;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { name, email, contact, address } = state;

    const  handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name] : value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !contact || !address ){
            setError('Please input all input fields');
        } else {
            dispatch(addUser(state));
            navigate('/');
            setError('');
        }


    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                Go back
            </Button>
            <h1>Edit User</h1>
            {error && <h3 style={{ color: 'red' }}>{error}</h3>}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                >
                <TextField type="text" id="outlined-basic" label="Name" variant="outlined" name="name" value={name}  onChange={handleInputChange} /><br />
                <TextField type="email" id="outlined-basic" label="Email" variant="outlined" name="email"  value={email}  onChange={handleInputChange}/><br />
                <TextField type="number" id="outlined-basic" label="Contact" variant="outlined" name="contact"  value={contact}  onChange={handleInputChange}/><br />
                <TextField type="text" id="outlined-basic" label="Address" variant="outlined" name="address"  value={address}  onChange={handleInputChange}/><br />
                <Button variant="contained" color="primary" onClick={handleSubmit} style={{ padding: '15px' }}>
                    Update
                </Button>
            </Box>
        </div>
    )
}

export default EditUser