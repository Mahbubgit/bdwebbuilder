import React from 'react';
import { toast } from 'react-toastify';

const ContactRow = ({ contact, index, setDeleteContact, setViewContact, refetch }) => {
    const { _id, name, email, mobile, subject, status } = contact;

    const handleReply = () => {
        fetch(`http://localhost:5000/contactMessage/reply/${_id}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to reply to the message.');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully reply to the message.`);
                }
            })
    }

    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td>{subject}</td>
            <td className='sm:grid-cols-1 lg:flex gap-2'>
                <label onClick={() => setViewContact(contact)} htmlFor="contact-view-modal" className="btn btn-sm btn-primary text-white mb-2">View</label>
                {
                    status !== 'Reply' && <button onClick={handleReply} className="btn btn-sm btn-secondary text-white mb-2">Reply</button>
                }
                {status
                    ?
                    
                    <span className='text-green-700 font-bold'>{status}</span>
                    :
                    <label onClick={() => setDeleteContact(contact)} htmlFor="delete-contact-modal" className="btn btn-sm btn-error text-white">Delete</label>
                }

            </td>
        </tr>
    );
};

export default ContactRow;