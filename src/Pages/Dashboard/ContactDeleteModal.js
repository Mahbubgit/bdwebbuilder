import React from 'react';
import { toast } from 'react-toastify';

const ContactDeleteModal = ({ deleteContact, refetch, setDeleteContact }) => {
    const { _id, name } = deleteContact;
    
    const confirmDelete = () => {
        fetch(`http://localhost:5000/deleteContact/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    toast.success(`Contact Message is deleted.`);
                    setDeleteContact(null);
                    refetch();
                }
                else {
                    toast.error('Contact message do not delete.');
                }
            })
    };

    return (
        <div>
            <input type="checkbox" id="delete-contact-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-accent">Delete Contact Message</h3>
                    <p className="font-bold text-lg text-red-700">Are you sure to delete {name} contact message?</p>
                    <p className="py-4 text-red-400">Caution: After you have deleted your message, it will be removed permanently.</p>
                    <div className="modal-action">
                        <button onClick={() => confirmDelete(_id)} className="btn btn-sm btn-error text-white">Delete</button>
                        <label htmlFor="delete-contact-modal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDeleteModal;