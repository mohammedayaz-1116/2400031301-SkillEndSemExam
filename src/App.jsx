// src/App.jsx
import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Tech Talk: Future of AI",
      date: "05 Dec 2025",
      time: "10:00 AM",
      location: "Auditorium A",
      description: "A session on modern AI trends and future scope.",
    },
    {
      id: 2,
      title: "Hackathon 2025",
      date: "10 Dec 2025",
      time: "09:00 AM",
      location: "Lab 3",
      description: "A 24-hour coding challenge for students.",
    },
  ];

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <h1>Upcoming Events</h1>

      <div className="event-list">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <button onClick={() => openModal(event)}>View Details</button>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} event={selectedEvent} />
    </div>
  );
}

export default App;
