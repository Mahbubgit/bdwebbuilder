import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyBookings = () => {

    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    console.log(user.displayName, user.email);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/dashboardBooking?clientEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => {
                    setBookings(data);
                });
        }
    }, [user]);

    return (
        <div>
            <h2 className='text-2xl text-center mt-2'>My bookings: {bookings.length}</h2>

            <div className="overflow-x-auto mt-3">
                <table className="table">
                    <thead>
                        <tr className='bg-gray-300 text-pink'>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Service</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((b, key) =>
                                <tr className='hover' key={key}>
                                    <th>{key + 1}</th>
                                    <td>{b.clientName}</td>
                                    <td>{b.date}</td>
                                    <td>{b.slot}</td>
                                    <td>{b.serviceName}</td>
                                    <td><button className="btn btn-outline">Delete</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default MyBookings; <h2>My bookings</h2>