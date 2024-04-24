import React from 'react';
import { toast } from 'react-toastify';

const UserDeleteModal = ({ deleteUser, refetch, setDeleteUser }) => {
    const { name, email } = deleteUser;
    
    const confirmDelete = () => {
        fetch(`http://localhost:5000/users/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    toast.success(`User: ${name} is deleted.`);
                    setDeleteUser(null);
                    refetch();
                }
                else {
                    toast.error('User do not delete.');
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-accent">Delete User</h3>
                    <p className="font-bold text-lg text-red-700">Are you sure to delete user {name}?</p>
                    <p className="py-4 text-red-400">Caution: After you have deleted your user, it will be removed permanently.</p>
                    <div className="modal-action">
                        <button onClick={() => confirmDelete(email)} className="btn btn-sm btn-error text-white">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDeleteModal;