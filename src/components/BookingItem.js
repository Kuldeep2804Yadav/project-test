import React, { useState } from 'react';

const BookingItem = ({ booking, deleteBooking, editBooking }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(booking.userName);
  const [newSeatNumber, setNewSeatNumber] = useState(booking.seatNumber);

  const handleEdit = () => {
    editBooking(booking.id, newUserName, newSeatNumber);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
          <input type="text" value={newSeatNumber} onChange={(e) => setNewSeatNumber(e.target.value)} />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          {booking.userName} {booking.seatNumber}
          <button onClick={() => deleteBooking(booking.id)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default BookingItem;
