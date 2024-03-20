import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const AllBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    console.log(user.displayName, user.email);

    useEffect(() => {
        if (user) {
            fetch(`https://nameless-shelf-67231-5f2c49be0d99.herokuapp.com/bookingStatus`, {
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
            <h2 className='text-2xl text-center mt-2'>All Booking History</h2>
            <div className="overflow-x-auto mt-3">
                <table className="table">
                    <thead>
                        <tr className='bg-gray-300 text-pink'>
                            <th></th>
                            <th>Name</th>
                            <th>Company</th>
                            <th className='text-center'>Service</th>
                            <th className='text-center'>Date & Time</th>
                            <th>Status</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((b, key) =>
                                <tr className='hover text-xs' key={key}>
                                    <th>{key + 1}</th>
                                    <td>{b.clientName}</td>
                                    <td>{b.companyName}</td>
                                    <td>{b.serviceName}</td>
                                    <td>{b.date}: {b.slot}</td>
                                    <td>{b.status}</td>
                                    <td className='flex'>
                                        <button className="btn btn-xs btn-accent text-primary">Accepted</button>
                                        <button className="btn btn-xs btn-accent text-white">Declined</button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBookings;