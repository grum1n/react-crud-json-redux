import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
    });

    const [error, setError] = useState('') ;

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
        }


    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                Go back
            </Button>
            <h1>AddUser</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                >
                <TextField type="text" id="outlined-basic" label="Name" variant="outlined" value={name}  onChange={handleInputChange} /><br />
                <TextField type="email" id="outlined-basic" label="Email" variant="outlined" value={email}  onChange={handleInputChange}/><br />
                <TextField type="number" id="outlined-basic" label="Contact" variant="outlined" value={contact}  onChange={handleInputChange}/><br />
                <TextField type="text" id="outlined-basic" label="Address" variant="outlined" value={address}  onChange={handleInputChange}/><br />
                <Button variant="contained" color="primary" onClick={() => {}} style={{ padding: '15px' }}>
                    Add User
                </Button>
            </Box>
        </div>
    )
}

export default AddUser