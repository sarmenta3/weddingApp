import React, { useState } from 'react';
import './rsvpForm.css';

function RSVPForm() {

    const[isChecked, setIsChecked] = useState(false);

    const handleOnCheckbox = () => {
        setIsChecked(!isChecked)
    }


    return (
        <div className = 'Form'>
            <p>Thank you for attending our wedding, you mean so much to the both of us.<br/>
            Please feel out the infomation below! Kids are welcomed</p>
            <div className = 'name'>
                <label>
                    Name of guest: 
                    <input type="text"></input>
                </label>
                
            </div>

            <div className = 'email'>
                <label>
                    email: 
                    <input type="text"></input>
                </label>
            </div>

            <div className = 'PhoneNumber'>
                <label>
                    Phone Number: 
                    <input type="text"></input>
                </label>
            </div>

            <div className = 'PlusOne'>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleOnCheckbox}
                    />
                    Plus one or Kids?
                </label>
            </div>

            
            {isChecked &&
            <div className = 'PlusOneInfo'>
                <label>
                    Guest Name:
                    <input type="text"></input>
                </label>

             </div>
             }

        </div>
    )

}

export default RSVPForm;