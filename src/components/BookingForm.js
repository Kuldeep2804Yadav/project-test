import React, { useState } from 'react';

const BookingForm = ({ addBooking }) => {
  const [userName, setUserName] = useState('');
  const [seatNumber, setSeatNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userName.trim().length === 0 || seatNumber.trim().length ===0){
        return
    } 
    
    addBooking(userName, seatNumber);
    setUserName('');
    setSeatNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name:
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        Seat Number:
        <input type="number" value={seatNumber} onChange={(e) => setSeatNumber(e.target.value)} />
      </label>
      <button type="submit">ADD</button>
    </form>
  );
};

export default BookingForm;
