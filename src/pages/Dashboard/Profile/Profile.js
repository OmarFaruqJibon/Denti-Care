import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import './Profile.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Profile = () => {

    const {user} = useAuth();
    const initialInfo = {_id : user._id , patientName:user.displayName, email:user.email, phone: user.phone};


    const [users, setUsers] = useState([]);
    // const [currentUser, setCurrentUser] = useState([]);


    useEffect(()=>{
        const url = `http://localhost:5000/users`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUsers(data));
    },[]);

    // console.log(currentUser);

    return (
        <div className='profile_wrap'>

            <img src="https://i.postimg.cc/tJYXv84n/profile-boy.png" className="profile-logo" alt="logo" />


            {users.map((thisUser) => thisUser.email === initialInfo.email && ( 
                        <div>
                        <p> <strong>Name:</strong> {thisUser.displayName}</p>
                        <p> <strong>Email:</strong> {thisUser.email}</p>
                        <p> <strong>Phone:</strong> {thisUser.phone}</p>

                        {/* <Link style={{textDecoration: 'none'}} to={`updateProfile/${thisUser._id}`}><Button variant="contained">Update Profile</Button></Link> */}

                    </div>
                    ))}

            

            

        </div>
    );
};

export default Profile;