import React from 'react';
import "./ViewModal.css";

const ViewModal = ({ user, onClose }) => {
  if (!user) {
    return null; // If user is not available, don't render the modal
  }

  return (
    <div className='modalBackground'>
      <div className="modalConatiner">
        <h3 className='mb-3'>{user.name}</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
