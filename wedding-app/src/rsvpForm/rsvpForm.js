import React, { useState } from 'react';
import './rsvpForm.css';
import axios from 'axios'

function RSVPForm({ onClose }) {

    const [guest, setGuest] = useState([{ name: '' }]);
    const [phoneNumber, setPhoneNumber] = useState({ phoneNumber: '' });
    const [address, setaddress] = useState({ address: '' });
    const [email, setEmail] = useState({ email: '' });
    const [close, setClose] = useState(false);

    const handleAddName = () => {
        setGuest([...guest, { name: '' }]);
    };

    const handleRemoveName = (index) => {
        const removeName = guest.filter((_, i) => i !== index);
        setGuest(removeName);
    };

    const handleNameInput = (e, index) => {
        const updateName = [...guest];
        updateName[index].name = e.target.value;
        setGuest(updateName);
    };

    const handlePhoneNumber = (e) => {
        const phoneNumber = e.target.value;
        setPhoneNumber(phoneNumber);
    };

    const handleAdress = (e) => {
        const address = e.target.value;
        setaddress(address);
    };

    const handleEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const handleSetClose = () => {
        let mainGuestName = guest[0].name;

        Object.values(guest).forEach(guestName => {
            const name = guestName.name;
            axios.post('http://18.191.187.235:3000/addGuest', { mainGuestName: mainGuestName, name: name, phoneNumber: phoneNumber,
                 address:address, email:email })
                .then((response) => {
                    console.log(response.data);
                })
                    .catch( error => {
                        if(error.response) {
                            console.log('error response: ', error.response);
                        } else if(error.request) {
                            console.log('Error request: ', error.request);
                        } else {
                            console.log('Error message: ', error.message);
                        }
                    });
        });

        setClose(!close);
    }

    const requiredField = () => {
        return (guest[0].name.length && phoneNumber.length && address.length && email.length) && true;
    }

    return (!close &&
        <div className='form'>
            <div className='form-content'>

                {/* exit button  */}
                <button className='form-exit-button' onClick={() => handleSetClose()}>X</button>

                <div className='form-welcomeMessage'>
                    <p>Thank you for attending our wedding, you mean so much to us!<br />
                        Please fill out your infomation below. Children are welcome to celebrate with us!</p>
                </div>

                <div className='form-fileInputFormat'>
                    <div className='form-name'>
                        <label >
                            Name of guest:
                        </label>
                        <button className='form-addNameButton' onClick={handleAddName}>Add</button>
                    </div>

                    <div >
                        {guest.map((field, index) => (
                            <div className='form-nameInput' key={index}>

                                <input
                                    className='form-TextInput'
                                    placeholder='First name Last Name'
                                    type="text"
                                    value={field.value}
                                    onChange={(e) => handleNameInput(e, index)}
                                />

                                <button
                                    type="button"
                                    className='form-name-deleteButton'
                                    onClick={() => handleRemoveName(index)}>
                                    X
                                </button>

                            </div>
                        ))}
                    </div>

                    <div className='form-PhoneNumber'>
                        <label>
                            Phone Number:
                        </label>
                        <input
                        placeholder='(000)-000-0000'
                            className='form-TextInput'
                            type="text"
                            onChange={(e) => handlePhoneNumber(e)}
                        />
                    </div>

                    <div className='form-PhoneNumber'>
                        <label>
                            Address:
                        </label>
                        <input
                            placeholder='Address City State Zip'
                            className='form-TextInput'
                            type="text"
                            onChange={(e) => handleAdress(e)}
                        />
                    </div>

                    <div className='form-email'>
                        <label>
                            Email:
                        </label>
                        <input
                            placeholder='CantWaitToSeeYou@GT.com'
                            className='form-TextInput'
                            type="email"
                            onChange={(e) => handleEmail(e)}
                        />
                    </div>

                    <div className='form-submit'>
                        <button 
                        className= {requiredField() 
                            ? 'form-submit-button'
                            : 'form-notvalid-submit-button' 
                            } 
                        onClick={() => handleSetClose(!close)}>Submit</button>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default RSVPForm;