import React, { useState } from 'react';
import { bookAppointment } from '../services/planity';

const BookAppointment = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: '',
    time: '',
    service: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails({ ...appointmentDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bookAppointment(appointmentDetails);
      alert('Rendez-vous pris avec succès');
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Erreur lors de la prise de rendez-vous');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Prendre Rendez-vous</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={appointmentDetails.date}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
            Heure
          </label>
          <input
            type="time"
            name="time"
            value={appointmentDetails.time}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
            Service
          </label>
          <input
            type="text"
            name="service"
            value={appointmentDetails.service}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Prendre Rendez-vous
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
