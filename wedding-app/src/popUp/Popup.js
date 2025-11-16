import React from 'react';
import './popup.css';

const Popup = ({ children, onClose, showClose }) => {
  return (
    <div className="popup-overlay">
      <div className= {showClose ? "popup-content" : 'popup-content-pw'} >
        {children}
        {showClose &&
        <button className ='popup-overlay-button' onClick={onClose}>Close</button> }
      </div>
    </div>
  );
};

export default Popup;