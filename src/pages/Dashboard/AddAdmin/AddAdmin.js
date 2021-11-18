import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const AddAdmin = () => {
    const {token} = useAuth();
    const [email, setEmail] = useState('');
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminForm = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin',{
            method: 'PUT',
            headers: {
                'authorization' : `Bearer ${token}`,
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Add admin page</h2>
            <form onSubmit={handleAdminForm}>
                <TextField onBlur={handleOnBlur} label="email" name="email" type="email" variant="standard" /> <br/>
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
        </div>
    );
};

export default AddAdmin;