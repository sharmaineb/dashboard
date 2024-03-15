# Personal Dashboard

This is a personal dashboard application built with Next.js and Tailwind CSS. It integrates various APIs including TMDB, NASA, OpenWeather, and Formula 1 Ergast to provide a range of functionalities. The dashboard aims to help users stay organized, manage their interests, and enhance productivity.

## Dependencies

1. **@dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities**: Libraries for drag-and-drop functionality.
2. **@fortawesome/fontawesome-svg-core, @fortawesome/free-regular-svg-icons, @fortawesome/free-solid-svg-icons, @fortawesome/react-fontawesome**: Icons library for including Font Awesome icons in the application.
3. **@fullcalendar/core, @fullcalendar/daygrid, @fullcalendar/interaction, @fullcalendar/react, @fullcalendar/timegrid**: FullCalendar components for displaying interactive calendars.
4. **@reduxjs/toolkit, react-redux**: Redux libraries for state management in React applications.
5. **axios**: Promise-based HTTP client for making HTTP requests.
6. **chart.js, react-chartjs-2**: Charting library for creating interactive charts.
7. **date-fns**: Library for manipulating dates in JavaScript.
8. **dotenv**: Zero-dependency module for loading environment variables from a .env file.
9. **framer-motion**: Animation library for creating fluid animations in React applications.
10. **moment**: Library for parsing, validating, manipulating, and formatting dates and times.
11. **next**: Framework for server-rendered React applications.
12. **react, react-dom**: Core libraries for building React applications.
13. **react-helmet**: Library for managing document head tags in React applications.
14. **react-hot-toast**: Toast notification library for React applications.
15. **react-icons**: Icon library for including popular icon sets in React applications.
16. **react-router-dom**: Library for routing in React applications.
17. **react-scripts**: Scripts and configuration used by Create React App.
18. **rodal**: Library for creating modal dialogs in React applications.
19. **styled-components**: Library for styling React components with CSS-in-JS.
20. **three**: Library for creating and displaying 3D graphics in the browser.
21. **uuid**: Library for generating UUIDs (Universally Unique Identifiers).
22. **zustand**: State management library for React applications with a simple API and minimal boilerplate.

## Features

1. **Calendar Page**: Allows users to manage their schedule and events.
2. **Trello Page**: Provides a task management interface similar to Trello boards.
3. **Movie Page**: Users can log movies they've watched and discover new ones using TMDB API integration. Redux is used for state management.
4. **F1 Schedule Page**: Displays Formula 1 race schedule using data from the Ergast API.
5. **Assignment Organization Page**: Helps users organize their assignments and tasks.
6. **Home Page**: Shows user's interests and provides a personalized dashboard experience.

## Getting Started

1. Clone the repository: `git clone https://github.com/sharmaineb/dashboard`
2. Install dependencies: `npm install`
3. Set up environment variables: Create a `.env` file and add necessary environment variables.
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) to view the dashboard in your browser.

## License

This project is licensed under the [MIT License](LICENSE).