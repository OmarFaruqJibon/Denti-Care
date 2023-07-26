import React from 'react';
import { useForm } from 'react-hook-form';

const CreateBlog = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data =>{
        fetch('https://dent-care-server.onrender.com/blogs',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result?.insertedId){
                alert('Blog post Successfully.');
                reset();
            }
        });
    }



    return (
<div className="mb">

<h2 className="App">Post a Blog</h2>

<form className="input-form" onSubmit={handleSubmit(onSubmit)}>
    
    <input {...register("name")} placeholder="Name" className="p-2 m-2 w-50"/>
    <br />

    <input {...register("img" , { required: true })} placeholder="Image Url" className="p-2 m-3 w-50"/>


    <input type="date"  {...register("date" , { required: true })} placeholder="Date"/>


    <textarea row="30" col="50" {...register("message" , { required: true })} placeholder="Message" className="p-2 m-3 w-50"/>
    <br />

    {errors.exampleRequired && <span>This field is required</span>}
    
    <input type="submit" value="Submit" className="btn review-btn"/>
</form>

</div>
    );
};

export default CreateBlog;