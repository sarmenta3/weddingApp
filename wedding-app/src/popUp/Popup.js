import React from 'react';
import './popup.css';

// set is close to false if you do not want to see it
const Popup = ({ children, onClose, showClose = true }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content" >
        {children}
        {
          showClose ?
            <button className='popup-overlay-button' onClick={onClose}>Close</button>
            : ''
        }
      </div>
    </div>
  );
};

export default Popup;