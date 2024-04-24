import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import BookingDeleteModal from './BookingDeleteModal';
import MyBookingRow from './MyBookingRow';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';

const MyBookings = () => {

    const [bookings, setBookings] = useState([]);
    const [deleteBooking, setDeleteBooking] = useState(null);

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    // console.log(user.displayName, user.email);
    const { data: isLoading, refetch } = useQuery('manageBookings', () =>
        fetch(`http://localhost:5000/dashboardBooking?clientEmail=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json();
            })
            .then(data => {
                setBookings(data);
                // setDeleteBooking(data);
            })
    );

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl text-center mt-2'>My bookings: {bookings.length}</h2>

            <div className="overflow-x-auto mt-3">
                <table className="table">
                    <thead>
                        <tr className='bg-gray-300 text-pink'>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, index) => <MyBookingRow
                                key={index}
                                booking={booking}
                                index={index}
                                setDeleteBooking={setDeleteBooking}
                            ></MyBookingRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteBooking && <BookingDeleteModal
                    deleteBooking={deleteBooking}
                    refetch={refetch}
                    setDeleteBooking={setDeleteBooking}
                ></BookingDeleteModal>
            }
        </div>
    );

};

export default MyBookings; <h2>My bookings</h2>