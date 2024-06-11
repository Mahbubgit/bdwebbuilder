import React, { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import AllBookingsRow from './AllBookingsRow';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AllBookings = () => {
    const [bookings, setBookings] = useState([]);
    // const [user] = useAuthState(auth);
    const navigate = useNavigate();


    // useEffect(() => {
    //     if (user) {
    //         fetch(`http://localhost:5000/bookingStatus`, {
    //             method: 'GET',
    //             headers: {
    //                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //             .then(res => {
    //                 // console.log('res', res);
    //                 if (res.status === 401 || res.status === 403) {
    //                     signOut(auth);
    //                     localStorage.removeItem('accessToken');
    //                     navigate('/');
    //                 }
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 setBookings(data);
    //             });
    //     }
    // }, [user]);


    const { isLoading, refetch } = useQuery('manageBookings', () => fetch(`http://localhost:5000/bookingStatus`, {
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
        })
    );

    if (isLoading) {
        return <Loading></Loading>
    }

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
                            <th className='text-center'>Date</th>
                            <th className='text-center'>Plan</th>
                            <th>Status</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, index) => <AllBookingsRow
                                key={index}
                                index={index}
                                booking={booking}
                                refetch={refetch}
                                setBookings={setBookings}
                            ></AllBookingsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBookings;