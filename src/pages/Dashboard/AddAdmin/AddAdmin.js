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
        fetch('https://vast-springs-50012.herokuapp.com/users/admin',{
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
            <h2  style={{textAlign: 'center', marginBottom: '50px'}}>Create an admin role</h2>
            <form style={{textAlign: 'center',}} onSubmit={handleAdminForm}>
                <TextField style={{marginBottom: '20px', width: '50%'}} onBlur={handleOnBlur} label="Enter your email address" name="email" type="email" variant="standard" /> <br/>
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
        </div>
    );
};

export default AddAdmin;