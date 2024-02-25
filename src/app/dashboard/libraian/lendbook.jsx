'use client'
import { Input } from '@nextui-org/react';
import React, { useState } from 'react';

const Lendbook = () => {
    const [bookISBN, setBookISBN] = useState("");
    const [studentID, setStudentID] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Reset error
        setError(null);

        // Check if all fields are filled
        if (!bookISBN || !studentID || !selectedDate) {
            setError('All fields are required');
            return;
        }
        // Check if selected date is at least 3 days after today
        const today = new Date();
        const minimumDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);
        if (new Date(selectedDate) < minimumDate) {
            setError('Please select a date at least 3 days from today');
            return;
        }

        // Continue with form submission
        console.log('Form submitted');
    }
    return (
        <section>
            <form className='flex flex-col md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-4' onSubmit={handleSubmit}>
                <div>
                    <span className='lebel text-xs ml-2'>Books ISBN</span>
                    <Input className='w-full' required type="name" variant="bordered" label="ISBN" onValueChange={setBookISBN} />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Student ID</span>
                    <Input className='w-full' required type="email" variant="bordered" label="ID" onValueChange={setStudentID} />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Lend time</span>
                    <Input className='w-full' required type="date" variant="bordered" onValueChange={setSelectedDate} />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <input type='submit' value="Lend Book" className='button bg-primary-500 p-3 rounded-lg cursor-pointer' />

            </form>
        </section>
    );
};

export default Lendbook;