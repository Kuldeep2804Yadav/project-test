import React, { useState } from 'react';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import './App.css';

const App = () => {
  const [bookings, setBookings] = useState([]);
  const [count,setCount]=useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const addBooking = (userName, seatNumber) => {
    if(bookings.some(bookings=>bookings.seatNumber=== seatNumber)){
      alert(`Seat Number ${seatNumber} is already booked` )
      return
    }
    setBookings([...bookings, { id: Date.now(), userName, seatNumber }]);
    setCount(num=>num+1)
  };

  const deleteBooking = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id));
    setCount(num=>num-1)
  };

  const editBooking = (id, newUserName, newSeatNumber) => {
    if(bookings.some(bookings=>bookings.seatNumber=== newSeatNumber)){
      window.alert(`Seat Number ${newSeatNumber} is already booked` )
      return
    }
    setBookings(bookings.map(booking =>
      booking.id === id ? { ...booking, userName: newUserName, seatNumber: newSeatNumber } : booking
    ));
    
    
    
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBookings = bookings.filter(booking =>
    booking.seatNumber.includes(searchQuery)
  );

  return (
    <div className="App">
      <div className='heading__content'>
        <h1 className='heading'>Movie Booking</h1>
        <p>Booking Count: <span>{count}</span></p>
        Find Slot:
        <input type='text' onChange={handleSearch}/>
      </div>
      <BookingForm addBooking={addBooking} />
      <BookingList bookings={filteredBookings}  deleteBooking={deleteBooking} editBooking={editBooking} />
    </div>
  );
};

export default App;
