import React from 'react';
import { useForm } from 'react-hook-form';
import './AddDonor.css';

const AddDonor = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data =>{
        fetch('http://localhost:5000/donors',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result?.insertedId){
                alert('Donor add Succesfully.');
                reset();
            }
        });
        console.log(data);
    }



    return (
       <div className="mb">

            <h2 className="mt App">Add a new blood donor</h2>

            <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("name")} placeholder="Name" className="p-2 m-2 w-50"/>
                <br />


                <input {...register("phone" , { required: true })} placeholder="Phone Number" className="p-2 m-3 w-50"/>
                <br />

                <input {...register("bloodGroup" , { required: true })} placeholder="Blood Group" className="p-2 m-3 w-50"/>
                <br />

                <input {...register("address" , { required: true })} placeholder="Address" className="p-2 m-3 w-50"/>
                <br />

                <input {...register("age" , { required: true })} placeholder="Age" className="p-2 m-3 w-50"/>
                <br />

                <input {...register("gender" , { required: true })} placeholder="Gender" className="p-2 m-3 w-50"/>
                <br />

                <input type="date" {...register("date" , { required: true })} placeholder="Date" className="p-2 m-3 w-50"/>
                <br />


                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" value="Submit" className="btn review-btn"/>

            </form>

        </div>
    );
};

export default AddDonor;