import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyBookings = () => {

    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/dashboardBooking?client=${user.email}`)
                .then(res => res.json())
                .then(data => setBookings(data));
        }
    }, [user]);

    return (
        <div>
            <h2>My bookings: {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Service</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(( b, index ) => <tr className='hover'>
                            <th>{index + 1}</th>
                            <td>{b.clientName}</td>
                            <td>{b.date}</td>
                            <td>{b.slot}</td>
                            <td>{b.serviceName}</td>
                        </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default MyBookings; <h2>My bookings</h2>