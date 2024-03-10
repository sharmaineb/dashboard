import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  return (
    <div>
      <h1>Calendar</h1>
      <div className='cursor-pointer'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Intensive Kick Off', date: '2024-03-11' },
          { title: 'Doc Appt', date: '2024-03-12' },
          // add more events later
        ]}
      />
      </div>
    </div>
  );
};

export default Calendar;