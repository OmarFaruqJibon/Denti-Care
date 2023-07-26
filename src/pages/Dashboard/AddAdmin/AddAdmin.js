import { Alert, Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const AddAdmin = () => {
    const {token} = useAuth();
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const [doctorEmail, setDoctorEmail] = useState('');
    

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleDoctorOnBlur = e => {
        setDoctorEmail(e.target.value);
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
            if(data.modifiedCount){
                setSuccess(true);
                console.log("doctor", data);
            }
        })
        e.preventDefault();
    };



    const handleDoctorForm = e =>{
        const user = {doctorEmail};
        fetch('http://localhost:5000/users/doctor',{
            method: 'PUT',
            headers: {
                'authorization' : `Bearer ${token}`,
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{ 
            if(data.modifiedCount){
                setSuccess(true);
                console.log("doctor", data);
            }
            
        })
        e.preventDefault();
    }





    return (
        <div>
            <h2  style={{textAlign: 'center', marginBottom: '50px'}}>Create an admin role</h2>



{/* create an admin role */}

            <form style={{textAlign: 'center',}} onSubmit={handleAdminForm}>

                <TextField style={{marginBottom: '20px', width: '50%'}} onBlur={handleOnBlur} label="Enter your email address" name="email" type="email" variant="standard" /> <br/>
                <Button variant="contained" type="submit">Make Admin</Button>

            </form>
            {success && <Alert severity="success">Admin create Succesfully!</Alert>}



        </div>
    );
};

export default AddAdmin;