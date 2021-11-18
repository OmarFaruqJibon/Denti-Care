import React from 'react';
import SecondNav from '../../Home/Navigation/SecondNav';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AppoinmentPackges from '../AppoinmentPackages/AppoinmentPackges';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <SecondNav></SecondNav>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <AppoinmentPackges date={date}></AppoinmentPackges>
        </div>
    );
};

export default Appoinment;