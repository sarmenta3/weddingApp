import React, { useState } from 'react';
import './rsvpForm.css';

function RSVPForm({onClose}) {

    const [guest, setGuest] = useState([{value: ''}]);
    const [close, setClose] = useState (false);

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

    const handleSetClose = () => {
        onClose();
        setClose(!close);
    }
    
    return  ( !close &&
        <div className='form'>
            <div className = 'form-content'>

                {/* exit button  */}
                 <button className ='form-button' onClick={() => handleSetClose() }>X</button>

                <div className='form-welcomeMessage'>
                    <p>Thank you for attending our wedding, you mean so much to us!<br />
                        Please fill out your infomation below. Children are welcome to celebrate with us!</p>
                </div>

                <div className='form-fileInputFormat'>
                    <div className='form-name'>
                        <label >
                            Name of guest:
                        </label>
                        <button className='form-deleteButton' onClick = {handleAddField}>Add</button>
                    </div>    
                    
                    <div >
                        {guest.map((field, index) => (
                            <div  className = 'form-nameInput' key={index}>
                               
                                <input
                                    className='form-TestInput'
                                    type="text"
                                    value={field.value}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                                
                                <button 
                                type="button" 
                                className = 'form-deleteButton'
                                onClick={() => handleRemoveField(index)}>
                                    X
                                </button>
                                
                            </div>
                        ))}
                    </div>

                    <div className='form-PhoneNumber'>
                        <label>
                            Phone Number:
                            
                        </label>
                        <input className='form-TestInput' type="text"></input>
                    </div>

                    <div className='form-PhoneNumber'>
                        <label>
                            Address:
                        </label>
                        <input className='form-TestInput' type="text"></input>
                    </div>

                    <div className='form-email'>
                        <label>
                            Email:
                        </label>
                        <input className='form-TestInput' type="text"></input>
                    </div>

                </div>

                {/* <button className ='form-button' onClick={() =>setClose(!close)}>Close</button> */}

            </div>

        </div>
    )

}

export default RSVPForm;