import { useState } from "react";
import "./activites.css"
import TenTrip from "./tenTrip/tenTrip";
import Greeneville from "./Greeveville/greeneville";



function Activities({ onClose }) {

    const [showTenTrip, setTenTrip] = useState(false);
    const [showGreeneville, setGreeneville] = useState(false);
    const [close, setClose] = useState(false);

    const handleSetClose = () => {
        onClose();
        setClose(!close);
    }

    const handleShowTenTrip = () => {
        setTenTrip(!showTenTrip);
    }

    const handleShowGreeneville = () => {
        setGreeneville(!showGreeneville);
    }


    if (!showTenTrip && !showGreeneville) {
        return (
            // background
            <div className='adventureBackground'>

                <div className='adventure-content'>

                    <button className='adventure-exit-button' onClick={() => handleSetClose()}>X</button>

                    <div className="adventure-info">
                        <p>If you would like to make an adventure out of this trip this is what we would do...</p>
                        <button className="button" onClick={handleShowTenTrip}> Travel Tennesee</button>
                    </div>

                    <div className="adventure-info">
                        <p>Things to do near and around Greeneville...</p>
                        <button className="button" onClick={handleShowGreeneville}> Greeneville Activities</button>
                    </div>

                </div>
            </div> // back ground end
        )

    } else if (showTenTrip) {
        return (
            <div>
                {showTenTrip && (
                    <TenTrip
                        onClose={handleShowTenTrip}
                    />
                )}
            </div>
        )
    } else {
        return (
            <div>
                {
                    showGreeneville && (
                        <Greeneville
                            onClose={handleShowGreeneville}
                        />
                    )
                }
            </div>
        )
    }

}

export default Activities;