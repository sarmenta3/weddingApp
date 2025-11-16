import React, { useState } from 'react';
import './rsvpForm.css';
import axios from 'axios'

function RSVPForm({ onClose, isError }) {

    const [guest, setGuest] = useState([{ name: '' }]);
    const [phoneNumber, setPhoneNumber] = useState({ phoneNumber: '' });
    const [address, setaddress] = useState({ address: '' });
    const [email, setEmail] = useState({ email: '' });
    const [diet, setDiet] = useState(null);
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

    const handleDiet = (e) => {
        const diet = e.target.value;
        setDiet(diet);
    };

    const handleRsvpClost = () => {
        onClose();
        setClose(!close);
    }

    const handleSetClose = async () => {
        let mainGuestName = guest[0].name;
        // https://www.armentabe.com/
        //https://18.191.187.235

        // Object.values(guest).forEach(async guestName => {
        //     const name = guestName.name;

        //     try{
        //     const r =  await axios.post('https://armentaberrrr.com/addGuest', {
        //         mainGuestName: mainGuestName, name: name, phoneNumber: phoneNumber,
        //         address: address, email: email, diet: diet, kindWords: kindWords
        //     });
        //     }catch(error){
        //         console.log(error)

        //     }

        //     // const r = await axios.post('https://armentaberrrr.com/addGuest', {
        //     //     mainGuestName: mainGuestName, name: name, phoneNumber: phoneNumber,
        //     //     address: address, email: email, diet: diet, kindWords: kindWords
        //     // })
        //     //     .then((response) => {

        //     //     })
        //     //     .catch(error => {
        //     //         setAddGuestError(true)
        //     //         console.log('There was an error')
        //     //     });
        //     // addUser(mainGuestName, name);

        // });
        // const allGuest = 
        for (const g of Object.values(guest)) {
            const name = g.name;
            if (name) {
                try {
                    const r = await axios.post('https://armentabe.com/addGuest', {
                        mainGuestName: mainGuestName, name: name, phoneNumber: phoneNumber,
                        address: address, email: email, diet: diet
                    });
                } catch (error) {
                    isError(true)
                }

            }

        }

        onClose();
        setClose(!close);
    }

    // async function addUser(mainGuestName, name) {
    //     // try {
    //         const r = await axios.post('https://yrdy.com/addGuest', {
    //             mainGuestName: mainGuestName, name: name, phoneNumber: phoneNumber,
    //             address: address, email: email, diet: diet, kindWords: kindWords
    //         }).then((response) => {
    //             console.log('No Error')
    //             return true;
    //         }).catch(error =>{
    //             console.log('Error')
    //             setAddGuestError(true);
    //             return false;
    //         });


    //     // } catch (error) {
    //     //     console('There is an error')
    //     //     setAddGuestError(true);
    //     //     return false;
    //     // }

    // }

    const requiredField = () => {
        return (guest[0].name.length && phoneNumber.length && address.length && email.length);
    }

    return (!close &&
        <div className='form'>
            <div className='form-content'>

                {/* exit button  */}
                <button className='form-exit-button' onClick={() => handleRsvpClost()}>X</button>

                <div className='form-welcomeMessage'>
                    <p>Thank you for attending our wedding, you mean so much to us!<br />
                        Please fill out your infomation below. Children are welcome to celebrate with us!</p>
                </div>

                <div className='form-fileInputFormat'>
                    <div className='form-name'>
                        <label >
                            Name of Guest(s):
                            <span style={{ color: 'red' }}>*</span>
                        </label>
                        <button className='form-addNameButton' onClick={handleAddName}>Add Guest</button>
                    </div>

                    <div >
                        {guest.map((field, index) => (
                            <div className='form-nameInput' key={index}>

                                <input
                                    className='form-TextInput'
                                    type="text"
                                    value={field.value}
                                    onChange={(e) => handleNameInput(e, index)}
                                />

                                <div>
                                    {index ? (
                                        <button
                                            type="button"
                                            className='form-name-deleteButton'
                                            onClick={() => handleRemoveName(index)}>
                                            Remove Guest
                                        </button>) : ''}
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className='form-PhoneNumber'>
                        <label>
                            Phone Number:
                            <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            className='form-TextInput'
                            type="text"
                            onChange={(e) => handlePhoneNumber(e)}
                        />
                    </div>

                    <div className='form-PhoneNumber'>
                        <label>
                            Address:
                            <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            className='form-TextInput'
                            type="text"
                            onChange={(e) => handleAdress(e)}
                        />
                    </div>

                    <div className='form-email'>
                        <label>
                            Email:
                            <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            className='form-TextInput'
                            type="email"
                            onChange={(e) => handleEmail(e)}
                        />
                    </div>

                    <label>Dietary Restrictions:</label>
                    <div >
                        <textarea
                            maxLength={100}
                            style={{ height: '10vh', width: '90%' }}
                            placeholder='Please let us know if you have dietary restrictions.'
                            onChange={(e) => handleDiet(e)}
                        >
                        </textarea>
                    </div>

                    <div className='form-submit'>
                        <button
                            className={requiredField()
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