import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './SendReport.css';
import { Button } from '@mui/material';


const SendReports = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();



    const onSubmit = data =>{
        fetch('http://localhost:5000/reports',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result?.insertedId){
                alert('Report Send Succesfully.');
                reset();
            }
        });
        console.log(data);
    }


    return (
        <div className='send-report-container'>
            <h2>Send Test Reports to User</h2>

            <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
                    
                    <input {...register("name")} placeholder="Name"/>
                    <br />


                    <input {...register("email" , { required: true })} placeholder="Email"/>
                    <br />

                    <input {...register("service" , { required: true })} placeholder="Service Name"/>
                    <br />

                    <input type="date"  {...register("date" , { required: true })} placeholder="Treatment On"/>
                    <br />

                    <input {...register("report" , { required: true })} placeholder="Report"/>
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}
                    

                    <Button className='submit-btn' variant="contained" type='submit'>Submit</Button>
                    
            </form>

        </div>
    );
};

export default SendReports;