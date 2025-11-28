// src/Modal.jsx
import React from "react";
import "./Modal.css";

function Modal({ isOpen, onClose, event }) {
  if (!isOpen || !event) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
      >
        <h2>{event.title}</h2>

        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Time:</strong> {event.time}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <p>
          <strong>Description:</strong> {event.description}
        </p>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
