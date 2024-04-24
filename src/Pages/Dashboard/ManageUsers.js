import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
import ManageUserRow from './ManageUserRow';
import UserDeleteModal from './UserDeleteModal';

const ManageUsers = () => {
    const [deleteUser, setDeleteUser] = useState(null);

    const { data: users, isLoading, refetch } = useQuery('manageUsers', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl text-center mt-2">Total User: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='bg-gray-500 text-white'>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Company</th>
                            <th>Mobile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <ManageUserRow
                                key={index}
                                user={user}
                                index={index}
                                refetch={refetch}
                                setDeleteUser={setDeleteUser}
                            ></ManageUserRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteUser && <UserDeleteModal
                    deleteUser={deleteUser}
                    refetch={refetch}
                    setDeleteUser={setDeleteUser}
                ></UserDeleteModal>
            }
        </div>
    );
};

export default ManageUsers;