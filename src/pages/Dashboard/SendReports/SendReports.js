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
                alert('Review  Succesfully.');
                reset();
            }
        });
        console.log(data);
    }


    return (
        <div className='send-report-container'>
            <h1>Send test reports to users</h1>

            <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
                    
                    <input {...register("name")} placeholder="Name"/>
                    <br />

                    {/* <input {...register("img" , { required: true })} placeholder="Image Url" className="p-2 m-3 w-50"/> */}
                    {/* <br /> */}

                    <input {...register("email" , { required: true })} placeholder="Email"/>
                    <br />

                    <input {...register("report" , { required: true })} placeholder="Report"/>
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    {/* <input className="submit-btn" type="submit" value="Submit"/> */}

                    <Button type='submit'>Submit</Button>
                    
            </form>

        </div>
    );
};

export default SendReports;