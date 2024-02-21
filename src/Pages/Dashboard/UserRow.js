import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
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
                // console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an Admin.`);
                }
            })

    }
    return (
        <tr className='hover'>
            <td>
                <div className="flex items-center gap-3">
                    <div>
                        <div className="font-bold">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {role !== 'admin' && <button onClick={makeAdmin} className="btn btn-outline">Make Admin</button>}
            </td>
            <th>
                <button className="btn btn-outline">Remove User
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};

export default UserRow;