import React from 'react';

const School = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-1">
        <h2>Classes</h2>
        {/* list of classes here */}
      </div>
      <div className="col-span-1">
        <h2>Teachers</h2>
        {/* list of teachers here */}
      </div>
      <div className="col-span-1">
        <h2>Assignments</h2>
        {/* list of homework here */}
      </div>
      <div className="col-span-1">
        <h2>Links</h2>
        {/* list of projects here */}
      </div>
      <div className="col-span-1">
        <h2>Completed</h2>
        {/* list of projects here */}
      </div>
    </div>
  );
};

export default School;