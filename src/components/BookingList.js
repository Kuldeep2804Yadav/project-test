import React from 'react';
import BookingItem from './BookingItem';

const BookingList = ({ bookings, deleteBooking, editBooking }) => {
  return (
    <ul>
      {bookings.map(booking => (
        <BookingItem key={booking.id} booking={booking} deleteBooking={deleteBooking} editBooking={editBooking} />
      ))}
    </ul>
  );
};

export default BookingList;
