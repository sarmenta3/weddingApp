import React from 'react';
import './popup.css';

const Popup = ({ children, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {children}
        <button className ='button' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;