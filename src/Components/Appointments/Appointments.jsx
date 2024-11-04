import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointments = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [count, setCount] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post("http://localhost:4000/appointment/insert", { name, phone, count, date, time });
      setName("");
      setPhone("");
      setCount("");
      setDate("");
      setTime("");
      toast.success("Successfully Booked!");
      console.log('inserted');
      console.log(res)
    } catch (error) {
      toast.error('Error in booking. Please try again.');
      console.log('error in inserting');
    }
  };

  return (
    <>
      <div className='flex justify-center items-center pt-5'>
        <h1 className='text-2xl font-serif'>Appointment</h1>
      </div>
      <div className='w-full max-w-md mx-auto p-4'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col justify-center items-center gap-5 bg-primary shadow-lg rounded-xl p-4 text-white'>
            <div className='flex flex-col w-full'>
              <label className='mb-1' htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='h-10 p-2 rounded-md text-black'
                placeholder="Enter your name"
                required
              />
            </div>

            <div className='flex flex-col w-full'>
              <label className='mb-1' htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                maxLength="10"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='h-10 p-2 rounded-md text-black'
                placeholder="Enter your phone"
                required
              />
            </div>

            <div className='flex flex-col w-full'>
              <label className='mb-1' htmlFor="count">Persons</label>
              <input
                type="number"
                id="count"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className='h-10 p-2 rounded-md text-black'
                placeholder="Number of persons"
                required
              />
            </div>

            <div className='flex flex-col w-full'>
              <label className='mb-1' htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className='h-10 p-2 rounded-md text-black'
                required
              />
            </div>

            <div className='flex flex-col w-full'>
              <label className='mb-1' htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className='h-10 p-2 rounded-md text-black'
                required
              />
            </div>

            <div className='w-full'>
              <button
                type="submit"
                className='bg-white rounded-lg shadow-xl p-3 text-black w-full hover:bg-gray-200'
              >
                Book
              </button>
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Appointments;
