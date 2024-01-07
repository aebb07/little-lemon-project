import React, { useState } from 'react';
import './Reservations.css';


const TimeSlider = ({ timeSlots, visibleSlots, onSelectTime }) => {
  const [offset, setOffset] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSlide = (direction, e) => {
    e.preventDefault();
    const newOffset = direction === 'left' ? offset - 1 : offset + 1;
    setOffset(Math.max(0, Math.min(timeSlots.length - visibleSlots, newOffset)));
  };

  const handleTimeClick = (time, e) => {
    setSelectedTime(time);
    onSelectTime(time, e);
  };

  return (
    <div className="time-slider">
      <button className="left" onClick={(e) => handleSlide('left', e)} aria-label="Move left">‹</button>
      <div className="slider-content">
        {timeSlots.slice(offset, offset + visibleSlots).map((slot) => (
          <button
            key={slot.time}
            disabled={slot.disabled}
            className={selectedTime === slot.time ? 'selected' : ''}
            onClick={(e) => handleTimeClick(slot.time, e)}>
            {slot.time}
          </button>
        ))}
      </div>
      <button className="right" onClick={(e) => handleSlide('right', e)} aria-label="Move right">›</button>
    </div>
  );
};


const Reservations = () => {
  const [partySize, setPartySize] = useState(2); // Default party size
  const [selectedDate, setSelectedDate] = useState(null);
  const [message, setMessage] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);
  const [occasion, setOccasion] = useState('Birthday');

  const [isPartySizeValid, setIsPartySizeValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);
  const [isTimeValid, setIsTimeValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);


  const handlePartySizeChange = (e) => {
    const newSize = Number(e.target.value);
    setPartySize(newSize);
    setIsPartySizeValid(newSize > 0 && newSize <= 6);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    setIsDateValid(newDate !== null && newDate !== '');
  };

  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    setIsMessageValid(newMessage.length <= 250);
  };

    const handleSelectTime = (time, e) => {
      e.preventDefault();
      setSelectedTime(time);
      setIsTimeValid(true);
    };


    const handleOccasionChange = (e) => {
      setOccasion(e.target.value);
    };


    const handleReservationSubmit = () => {

      setIsPartySizeValid(partySize > 0 && partySize <= 6);
      setIsDateValid(selectedDate !== null && selectedDate !== '');
      setIsTimeValid(selectedTime !== null);
      setIsMessageValid(message.length <= 250);

      if (isPartySizeValid && isDateValid && isTimeValid && isMessageValid) {
        console.log('Reservation Received');
        console.log('Party Size:', partySize);
        console.log('Selected Time:', selectedTime);
        console.log('Occasion:', occasion);
        console.log('Message:', message);
      } else {
        console.log('Invalid form. Please complete all fields correctly.');
      }
    };

    const timeSlots = [
      { time: '12:00', disabled: true },
      { time: '12:30', disabled: false },
      { time: '13:00', disabled: false },
      { time: '13:30', disabled: false },
      { time: '14:00', disabled: true },
      { time: '14:30', disabled: false },
      { time: '15:00', disabled: false },
      { time: '15:30', disabled: false },
      { time: '16:00', disabled: true },
      { time: '16:30', disabled: true },
      { time: '19:00', disabled: false },
      { time: '19:30', disabled: false },
      { time: '20:00', disabled: false },
      { time: '20:30', disabled: false },
      { time: '21:00', disabled: false },
      { time: '21:30', disabled: false },
      { time: '22:00', disabled: false },
      { time: '22:30', disabled: false },
      { time: '23:00', disabled: true },
    ];

    const validatePartySize = (size) => {

      return size > 0 && size <= 6;
    };
    const validateDate = (date) => {
  
      return !isNaN(Date.parse(date));
    };

  return  (
    <div className="overlay" >
    <div className="reservation">
      <h2 data-testid="reservation-heading">Reservations</h2>
      <form>
        <label htmlFor="partySize" className={!isPartySizeValid ? 'error' : ''}>Party Size:</label>
        <input
          type="range"
          id="partySize"
          name="partySize"
          min={1}
          max={6}
          value={partySize}
          onChange={handlePartySizeChange}
          required
          className={!isPartySizeValid ? 'error' : ''}
        />
        <span>{partySize} People</span>
        <span className="error-message">
          {!isPartySizeValid && 'Party size is required (1-6).'}
        </span>


        <div className="date-label">
          <label htmlFor="date" className={!isDateValid ? 'error' : ''}>Select Date:</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            onChange={handleDateChange} 
            required 
            className={!isDateValid ? 'error' : ''} 
          />
          <span className="error-message">
            {!isDateValid && 'Date is required.'}
          </span>
        </div>

        <div className="time-slot-container">
          <label>Time Slots:</label>
          <TimeSlider
          timeSlots={timeSlots}
          visibleSlots={4}
          onSelectTime={handleSelectTime} />
          {selectedTime && <p>Selected Time: {selectedTime}</p>}
          <span className="error-message">
            {!isTimeValid && 'Time is required.'}
          </span>
        </div>

        <div className="occasion-container">
            <label htmlFor="occasion" className={!occasion ? 'error' : ''}>Occasion:</label>
            <select 
              id="occasion" 
              name="occasion" 
              value={occasion} 
              onChange={handleOccasionChange} 
              required 
              className={!occasion ? 'error' : ''}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
            </select>
            <span className="error-message">
              {!occasion && 'Occasion is required.'}
            </span>
          </div>

        <div className="additional-container">
          <label htmlFor="message">Additional Message:</label>
          <textarea 
            id="message" 
            name="message" 
            value={message} 
            onChange={handleMessageChange} 
            maxLength={250} 
            required 
            className={!isMessageValid ? 'error' : ''}
            />
          <span className="error-message">
            {!isMessageValid && 'Message is required (max 250 characters).'}
          </span>
        </div>

        <div className="button-container">
          <button className="button-reservation" type="button" onClick={handleReservationSubmit} aria-label="Make a reservation" disabled={!isPartySizeValid || !isDateValid || !isTimeValid || !isMessageValid}>
            Make a Reservation
          </button>
        </div>
      </form>
    </div>
    </div>
  )
};

export default Reservations;
