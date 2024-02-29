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
          { title: 'Event 1', date: '2024-02-29' },
          { title: 'Event 2', date: '2024-03-01' },
          // add more events later
        ]}
      />
      </div>
    </div>
  );
};

export default Calendar;