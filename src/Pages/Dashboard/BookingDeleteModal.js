import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const BookingDeleteModal = ({ deleteBooking, setDeleteBooking, refetch }) => {

    const [user, isLoading] = useAuthState(auth);

    // console.log('Delete _id and id: ', deleteBooking);

    const confirmDelete = () => {
        fetch(`http://localhost:5000/deleteBooking/${deleteBooking}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log('deleted data: ', data);
                if (data.deletedCount) {
                    toast.success(`Your booking is deleted.`);
                    setDeleteBooking(null);
                    refetch();
                }
                else {
                    toast.error('Booking do not delete.');
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <input type="checkbox" id="delete-booking-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-accent">Delete Booking</h3>
                    <p className="font-bold text-lg text-red-700">Are you sure to delete your booking?</p>
                    <p className="py-4 text-red-400">Caution: After you have deleted your booking, it will be permanently deleted.</p>
                    <div className="modal-action">
                        <button onClick={() => confirmDelete(deleteBooking)} className="btn btn-sm btn-error text-white">Delete</button>
                        <label htmlFor="delete-booking-modal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDeleteModal;