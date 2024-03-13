import React, { useState, useEffect } from 'react';

const SchoolPage = () => {
  const [assignments, setAssignments] = useState([]);

  const addAssignment = (assignment) => {
    setAssignments([...assignments, assignment]);
  };

  const deleteAssignment = (id) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  const toggleCompletion = (id) => {
    setAssignments(
      assignments.map((assignment) =>
        assignment.id === id
          ? { ...assignment, completed: !assignment.completed }
          : assignment
      )
    );
  };

  useEffect(() => {
    const storedAssignments = localStorage.getItem('assignments');
    if (storedAssignments) {
      setAssignments(JSON.parse(storedAssignments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('assignments', JSON.stringify(assignments));
  }, [assignments]);

  const initialAssignments = [
    {
      id: 1,
      title: "Spring Intensive",
      teacher: "Dani",
      class: "Intensive",
      link: "https://github.com/sharmaineb/dashboard",
      completed: false
    },
    {
      id: 2,
      title: "Assessment",
      teacher: "Mitchell",
      class: "ACS 4390",
      link: "https://github.com/sharmaineb/acs-4390-assessment",
      completed: true
    },
    {
      id: 3,
      title: "Final Project",
      teacher: "Mitchell",
      class: "ACS 4390",
      link: "https://github.com/sharmaineb/acs-4390-final-project",
      completed: true
    },
    {
      id: 4,
      title: "Landing Page",
      teacher: "Dan",
      class: "ENT 1.1",
      link: "https://github.com/sharmaineb/ent-1.1-landing-page",
      completed: true
    },
    {
      id: 5,
      title: "Unit Testing",
      teacher: "Dani",
      class: "ACS 4391",
      link: "https://github.com/sharmaineb/unit-testing",
      completed: true
    },
    {
      id: 6,
      title: "React-Redux-Tetris",
      teacher: "Mitchell",
      class: "ACS 3330",
      link: "https://sharmaineb.github.io/react-redux-tetris/",
      completed: true
    },
    {
      id: 7,
      title: "Refactoring: Composing Methods",
      teacher: "Dani",
      class: "ACS 4391",
      link: "https://github.com/sharmaineb/composing-methods-refactor-more",
      completed: true
    },
    {
      id: 8,
      title: "Websockets",
      teacher: "Mitchell",
      class: "ACS 4390",
      link: "https://github.com/sharmaineb/acs-4390-lesson-7-websockets",
      completed: true
    },
  ];

  useEffect(() => {
    if (assignments.length === 0) {
      setAssignments(initialAssignments);
    }
  }, [assignments]);

  return (
    <div className="bg-zinc-900 min-h-screen py-8">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-white mb-4">Assignments</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.elements.title.value;
            const teacher = e.target.elements.teacher.value;
            const classValue = e.target.elements.class.value;
            const link = e.target.elements.link.value;
            addAssignment({ id: Date.now(), title, teacher, class: classValue, link, completed: false });
            e.target.reset();
          }}
        >
          <input
            className="w-full border rounded py-2 px-3 mb-3"
            type="text"
            name="title"
            placeholder="Assignment Title"
            required
          />
          <input
            className="w-full border rounded py-2 px-3 mb-3"
            type="text"
            name="teacher"
            placeholder="Teacher"
            required
          />
          <input
            className="w-full border rounded py-2 px-3 mb-3"
            type="text"
            name="class"
            placeholder="Class"
            required
          />
          <input
            className="w-full border rounded py-2 px-3 mb-3"
            type="text"
            name="link"
            placeholder="Link"
            required
          />
          <button className="bg-cyan-200 text-black py-2 px-4 rounded" type="submit">
            Add Assignment
          </button>
        </form>
        <table className="w-full mt-4 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-3 text-center">Title</th>
              <th className="py-2 px-3 text-center">Teacher</th>
              <th className="py-2 px-3 text-center">Class</th>
              <th className="py-2 px-3 text-center">Link</th>
              <th className="py-2 px-3 text-center">Status</th>
              <th className="py-2 px-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id} className="border-b">
                <td className="py-2 px-3 text-center">{assignment.title}</td>
                <td className="py-2 px-3 text-center">{assignment.teacher}</td>
                <td className="py-2 px-3 text-center">{assignment.class}</td>
                <td className="py-2 px-3 text-center">
                  <a href={assignment.link} className="text-blue-500 underline">
                    Link
                  </a>
                </td>
                <td className="py-2 px-3 text-center">
                  <input
                    type="checkbox"
                    checked={assignment.completed}
                    onChange={() => toggleCompletion(assignment.id)}
                  />
                </td>
                <td className="py-2 px-3 text-center">
                  <button
                    className="bg-pink-300 text-black py-1 px-2 rounded"
                    onClick={() => deleteAssignment(assignment.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchoolPage;