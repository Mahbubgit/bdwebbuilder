import React from 'react';

const ContactViewModal = ({ viewContact }) => {
    const { name, email, mobile, subject, messageInfo } = viewContact;

    return (
        <div>
            <input type="checkbox" id="contact-view-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold my-2 text-xl uppercase text-center text-secondary">{name}</h3>
                    <p className='text-justify mt-2'>Email: {email}</p>
                    <p className='text-justify mt-2'>Mobile: {mobile}</p>
                    <p className='text-justify mt-2'>Subject: {subject}</p>
                    <p className='text-justify mt-2'>Message: {messageInfo}</p>

                    <div className="modal-action">
                        <label htmlFor="contact-view-modal" className="btn btn-sm">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactViewModal;