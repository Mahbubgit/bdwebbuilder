import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { signOut } from 'firebase/auth';
import Loading from '../Shared/Loading';
import ContactRow from './ContactRow';
import ContactDeleteModal from './ContactDeleteModal';
import ContactViewModal from './ContactViewModal';

const ContactMessage = () => {
    const [contactMessage, setContactMessage] = useState([]);
    const [viewContact, setViewContact] = useState([]);

    const [deleteContact, setDeleteContact] = useState(null);
    const navigate = useNavigate();

    const { data: isLoading, refetch } = useQuery('viewContactMessage', () =>
        fetch(`http://localhost:5000/contactMessage`, {
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
                setContactMessage(data);
            })
    );

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl text-center mt-2'>Total Contact Messages: {contactMessage.length}</h2>

            <div className="overflow-x-auto mt-3">
                <table className="table">
                    <thead>
                        <tr className='bg-gray-300 text-pink'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Subject</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            contactMessage.map((contact, index) => <ContactRow
                                key={index}
                                contact={contact}
                                index={index}
                                refetch={refetch}
                                setViewContact={setViewContact}
                                setDeleteContact={setDeleteContact}
                            ></ContactRow>
                            )
                        }
                        {
                            viewContact && <ContactViewModal
                                viewContact={viewContact}
                                setViewContact={setViewContact}
                            ></ContactViewModal>
                        }
                        {
                            deleteContact && <ContactDeleteModal
                                deleteContact={deleteContact}
                                refetch={refetch}
                                setDeleteContact={setDeleteContact}
                            ></ContactDeleteModal>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactMessage;