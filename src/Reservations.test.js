import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Reservations from './Reservations';

test('renders reservation heading', () => {
  render(<Reservations />);
  const reservationHeading = screen.getByTestId('reservation-heading');
  expect(reservationHeading).toBeInTheDocument();
  expect(reservationHeading).toHaveTextContent('Reservations');
});


test('handleTimeClick should update selectedTime', () => {
    const { getByText } = render(<Reservations />);
    
    fireEvent.click(getByText('12:30'));
  
    expect(getByText('Selected Time: 12:30')).toBeInTheDocument();
  });
  
  test('handleSelectTime should update selectedTime', () => {
    render(<Reservations />);
    
    const timeSlotButton = screen.getByText('12:30');
    fireEvent.click(timeSlotButton);
  
    expect(screen.getByText('Selected Time: 12:30')).toBeInTheDocument();
  });


  describe('Reservations Component', () => {
    test('Party Size input has correct attributes', () => {
      render(<Reservations />);
  
      const partySizeInput = screen.getByLabelText(/Party Size/i);
  
      // Validar los atributos HTML5
      expect(partySizeInput).toHaveAttribute('type', 'range');
      expect(partySizeInput).toHaveAttribute('min', '1');
      expect(partySizeInput).toHaveAttribute('max', '6');
    });
  
    test('Date input has correct attributes', () => {
      render(<Reservations />);
  
      const dateInput = screen.getByLabelText(/Select Date/i);

      expect(dateInput).toHaveAttribute('type', 'date');
    });
  });


  describe('Reservations Component Validation', () => {
    test('isPartySizeValid returns true for valid party size', () => {
      const component = render(<Reservations />);
      const instance = component.getInstance();
  
      // eslint-disable-next-line
      const result = instance.validatePartySize(4);
      expect(result).toBe(true);
    });
  
  });