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


const Reservations = (props) => {
  const [partySize, setPartySize] = useState(2); // Default party size
  const [selectedDate, setSelectedDate] = useState(null);
  const [isVegan, setIsVegan] = useState(false);
  const [isCeliac, setIsCeliac] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);
  const {closeModal} = props;

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

  const handleVeganChange = () => {
    setIsVegan(!isVegan);
  };

  const handleCeliacChange = () => {
    setIsCeliac(!isCeliac);
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

    const handleOverlayClick = (e) => {
      if (e.target.classList.contains('overlay')) {
        props.closeModal();
      }
    };

    const handleReservationSubmit = () => {
      if (isPartySizeValid && isDateValid && isTimeValid && isMessageValid) {
        console.log('Reservation Received');
        props.closeModal();
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

  return (
    <div className={`overlay ${ props.isModalOpen ? 'visible' : ''}`}  onClick={handleOverlayClick}>
    <div className="reservation">
      <button className="close-btn" onClick={closeModal}>
        &#x2715;
      </button>
      <h2 data-testid="reservation-heading">Reservations</h2>
      <form>
        <label htmlFor="partySize">Party Size:</label>
        <input
          type="range"
          id="partySize"
          name="partySize"
          min={1}
          max={6}
          value={partySize}
          onChange={handlePartySizeChange}
        />
        <span>{partySize} People</span>

        <div className="date-label">
          <label htmlFor="date">Select Date:</label>
          <input type="date" id="date" name="date" onChange={handleDateChange} />
        </div>

        <div className="time-slot-container">
          <label>Time Slots:</label>
          <TimeSlider
          timeSlots={timeSlots}
          visibleSlots={4}
          onSelectTime={handleSelectTime} />
          {selectedTime && <p>Selected Time: {selectedTime}</p>}
        </div>

        <div>
          <label>
            <input type="checkbox" checked={isVegan} onChange={handleVeganChange} />
            Vegan
          </label>
          <label>
            <input type="checkbox" checked={isCeliac} onChange={handleCeliacChange} />
            Celiac
          </label>
        </div>

        <div className="additional-container">
          <label htmlFor="message">Additional Message:</label>
          <textarea id="message" name="message" value={message} onChange={handleMessageChange} maxLength={250} />
        </div>

        <div className="button-container">
          <button className="button-reservation" type="button" onClick={handleReservationSubmit} aria-label="Make a reservation">
            Make a Reservation
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Reservations;
