import React, { useState } from 'react';
import './rsvpForm.css';

function RSVPForm() {

    const [isChecked, setIsChecked] = useState(false);
    const [guest, setGuest] = useState([{value: ''}]);

    const handleOnCheckbox = () => {
        setIsChecked(!isChecked)
    }

    const setGuestName = (name) => {
        console.log('Anything: ', name.target.value);
        //     setGuest(name.targer.value);
    }

    const handleAddField = () => {
      setGuest([...guest, { value: '' }]);
    };

    const handleRemoveField = (index) => {
      const newFields = guest.filter((_, i) => i !== index);
      setGuest(newFields);
    };

    const handleInputChange = (e, index) => {
      const newFields = [...guest];
      newFields[index].value = e.target.value;
      setGuest(newFields);
    };


    return (
        <div className='Form'>

            <div className='welcomeMessage'>
                <p>Thank you for attending our wedding, you mean so much to us!<br />
                    Please fill out your infomation below. Children are welcome to celebrate with us!</p>
            </div>

            <div className='fileInputFormat'>
                <div className='name'>
                    <label>
                        Name of guest:
                    </label>
                </div>

                <div >
                    {guest.map((field, index) => (
                        <div  key={index}>
                            <input
                                className='TestInput'
                                type="text"
                                value={field.value}
                                onChange={(e) => handleInputChange(e, index)}
                            />
                   
                            <button 
                            type="button" 
                            classN = 'deleteButton'
                            onClick={() => handleRemoveField(index)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div>
                    <button onClick = {handleAddField}>Add</button>
                </div>

                <div className='PhoneNumber'>
                    <label>
                        Phone Number:
                        <input className='TestInput' type="text"></input>
                    </label>
                </div>

                <div className='PhoneNumber'>
                    <label>
                        Address:
                        <input className='TestInput' type="text"></input>
                    </label>
                </div>

                <div className='email'>
                    <label>
                        Email:
                        <input className='TestInput' type="text"></input>
                    </label>
                </div>

            </div>

        </div>
    )

}

export default RSVPForm;