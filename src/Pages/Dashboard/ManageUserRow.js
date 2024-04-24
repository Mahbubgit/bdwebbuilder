import React from 'react';
import { toast } from 'react-toastify';

const ManageUserRow = ({ user, index, refetch, setDeleteUser }) => {
    const { img, role, email } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an Admin.');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an Admin.`);
                }
            })
    }

    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='User' />
                    </div>
                </div>
            </td>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>
                {user?.role}
                {role !== 'admin' && <button onClick={makeAdmin} className="btn btn-sm btn-primary">Make Admin</button>}
            </td>
            <td>{user?.company}</td>
            <td>{user?.mobile}</td>
            <td>
                <label onClick={() => setDeleteUser(user)} htmlFor="delete-confirm-modal" className="btn btn-sm btn-error text-white">Delete</label>
            </td>
        </tr>
    );
};

export default ManageUserRow;