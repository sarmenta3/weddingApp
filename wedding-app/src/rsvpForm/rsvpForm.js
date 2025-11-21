import React, { useState } from 'react';
import './rsvpForm.css';
import axios from 'axios'
import Popup from '../popUp/Popup'

function RSVPForm({ onClose }) {

    const [guest, setGuest] = useState([{ name: '' }]);
    const [phoneNumber, setPhoneNumber] = useState({ phoneNumber: '' });
    const [address, setaddress] = useState({ address: '' });
    const [email, setEmail] = useState({ email: '' });
    const [diet, setDiet] = useState(null);
    const [close, setClose] = useState(null);
    const [isError, setIsError] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleIsError = (isEror) => {
        setIsError(isEror)
    }

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

    const handleShowPopup = (isShowPopup) => {
        setIsLoading(false);
        setShowPopup(isShowPopup)
    }

    const handleRsvpClose = () => {
        onClose();
        // setClose(true);
    }

    const isGuestNameError = () => {
        var isNameError = false;
        guest.forEach(guestName => {
            if (!guestName.name.length) {
                isNameError = true;
            }
        })
        return isNameError;
    }

    const handleSetClose = async () => {
        setIsLoading(true);

        let mainGuestName = guest[0].name; // main group name

        // service call to add all users to the DB 
        try{
        const servResponse = Object.values(guest).map(async guestName => {
            const name = guestName.name;
            const respone = await axios.post('https://armentabe.com/addGuest', {
                mainGuestName: mainGuestName, name: name, phoneNumber: phoneNumber,
                address: address, email: email, diet: diet
            });

            return respone; // the response 
        });
        
         // check response
        try {
            const resultArray = await Promise.all(servResponse); // chec if there is an error
        } catch (error) { // if there is an error catch it 
            console.log('Catch error')
            handleIsError(true); // set that there is an error
        } finally {
            console.log('Finally')
            setClose(true); // close the original rsvp
            handleShowPopup(true); // show the pop up of pass or fail
        }

    }catch(error) {
        console.log('Error')
        // handleIsError(true); // set that there is an error
     }finally {
        setClose(true); // close the original rsvp
        handleShowPopup(true); // show the pop up of pass or fail

     }
    //finally{
    //     setClose(true); // close the original rsvp
    //     handleShowPopup(true); // show the pop up of pass or fail
    // }

        // check response
        // try {
        //     const resultArray = await Promise.all(servResponse); // chec if there is an error
        // } catch (error) { // if there is an error catch it 
        //     handleIsError(true); // set that there is an error
        // } finally {
        //     setClose(true); // close the original rsvp
        //     handleShowPopup(true); // show the pop up of pass or fail
        // }


        // https://www.armentabe.com/
        //https://18.191.187.235

        //  const anyError = await Object.values(guest).map(guestName => {
        //     const name = guestName.name;
        //     console.log('Name: ', name)
        //     axios.post('http://localhost:8080/addGuest', { mainGuestName: mainGuestName, name: name, phoneNumber: phoneNumber,
        //          address:address, email:email, diet: diet })
        //         .then((response) => {
        //             console.log(response)
        //         }).catch( error => {
        //                 if(error.response) {
        //                     console.log('error response: ', error.response);
        //                 } else if(error.request) {
        //                     console.log('Error request: ', error.request);
        //                 } else {
        //                     console.log('Error message: ', error.message);
        //                 }
        //             });
        // });

        // setClose(true);

    }

    const requiredField = () => {
        return (!isGuestNameError() && phoneNumber.length && address.length && email.length);
    }

    if (!close) {
        return (!close &&
            <div className='form'>
                <div className='form-content'>

                    {/* exit button  */}
                    <button className='form-exit-button' onClick={() => handleRsvpClose(true)}>X</button>

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

                    <div>
                        {
                            isLoading && (
                                <Popup
                                    showClose={false}
                                >
                                    <h1>Loading... </h1>
                                </Popup>

                            )
                        }
                    </div>

                </div>

            </div>
        )
    } else if (showPopup) {

        return (
            <Popup
                onClose={handleRsvpClose}
            >
                {isError ?
                    <h4>There was an error please try again or contact Jeki or Sam</h4>
                    : <h4>You have been added to the list. Can't wait to see Y'all!</h4>}
            </Popup>
        )

    }


}

export default RSVPForm;