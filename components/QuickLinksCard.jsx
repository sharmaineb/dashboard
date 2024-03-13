import React from 'react';

const QuickLinksCard = () => {
  return (
    <div className="flex">
      <div className="bg-zinc-900 rounded-lg p-4 border border-gray-400 ml-auto mr-5">
        <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
        <ul className="space-y-2">
          <li>
            <a href="https://selfservice.dominican.edu/selfservice/Home.aspx" className="text-blue-500 hover:text-blue-700">Self Service</a>
          </li>
          <li>
            <a href="https://github.com/Tech-at-DU" className="text-blue-500 hover:text-blue-700">DU Github</a>
          </li>
          <li>
            <a href="https://github.com/sharmaineb" className="text-blue-500 hover:text-blue-700">GitHub</a>
          </li>
          <li>
            <a href="https://www.gradescope.com/" className="text-blue-500 hover:text-blue-700">Gradescope</a>
          </li>
          <li>
            <a href="https://workspace.google.com/products/calendar/?hl=en-US" className="text-blue-500 hover:text-blue-700">Google Calendar</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuickLinksCard;