import './theCrew.css';
import { useState } from 'react';


function TheCrew({ onClose }) {

    const [close, setClose] = useState(false);

    const handleSetClose = () => {

        onClose();
        setClose(!close);
    }
    return (
        // background
        <div className='theCrewBackground'>
            {/* exit button  and close function*/}
                <button className='stayAndFlights-exit-button' onClick={() => handleSetClose()}>X</button>

  
        </div> // back ground end
    )

}
export default TheCrew;