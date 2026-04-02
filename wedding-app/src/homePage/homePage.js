import React, { useState, useEffect, useMemo } from 'react';
import './homePage.css';

import RSVPForm from '../rsvpForm/rsvpForm';
import StayAndFlights from '../PlacesToStayAndFlights/stayAndFlights';
import TheCrew from '../theCrew/theCrew';
import Activities from '../Activities/activities';
import AttireRegistry from '../AttireRegistry/AttireRegistry'

import axios from 'axios'


function HomePage() {
    const [showCrew, setShowCrew] = useState(false);
    const [showPlacesToStay, setPlacesToStay] = useState(false);
    const [showRsvp, setRsvp] = useState(false);
    const [showAttire, setAttire] = useState(false);
    const [showActivities, setShowActivities] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [guestList, setGuestList] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getGuest();
    }, [showRsvp])

    const handleShowCrewPopUp = () => {
        setIsSelected(!isSelected);
        setShowCrew(!showCrew);
    }

    const handlePlacesToStay = () => {
        setIsSelected(!isSelected);
        setPlacesToStay(!showPlacesToStay);
    }

    const handleshowRsvp = () => {
        setIsSelected(!isSelected);
        setRsvp(!showRsvp);
    }

    const handleShowActivites = () => {
        setIsSelected(!isSelected);
        setShowActivities(!showActivities);
    }

    const handleAttire = () => {
        setIsSelected(!isSelected);
        setAttire(!isSelected)
    }

      const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to the first page on new search
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getGuest = async () => {
        try {
            const respone = await axios.get('https://armentabe.com/getGuest');
            setGuestList(respone.data)
        } catch (err) {
            console.log('There was an error')
        }
    }

    const ROWS_PER_PAGE = 5;

    // 1. Filter the data based on search term
    const filteredData = useMemo(() => {
        return guestList.filter(item => 
            // console.log(item.guest)
            item.guest.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, guestList]);

    // 2. Calculate pagination values
    const totalPages = Math.ceil(filteredData.length / ROWS_PER_PAGE);
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = startIndex + ROWS_PER_PAGE;

    // 3. Limit the rows for the current page
    const limitedData = useMemo(() => {
        return filteredData.slice(startIndex, endIndex);
    }, [filteredData, startIndex, endIndex]);

  

    if (!isSelected) {
        return (
            <div className="BackGround">

                <div className="intro">
                    <h3>Thank you for your love and support! We cannot wait to celebrate with you all in the same town where we got engaged! Please RSVP by no later than April 1, 2026 (no this is not a joke). </h3>
                    <h3>Date: August 8, 2026</h3>
                    <h3>Venue: <a href="https://johnstonhomeplace.com/wp-content/uploads/Homeplace-Wedding-Venue-Video-Tour.mp4" target="_blank" rel="noreferrer">
                        Johnston Home Place
                    </a></h3>
                    <h3>Address: 240 Joe Johnston Ln, Greeneville, TN 37743</h3>
                </div>

                <div className="ButtonInto">
                    <button className="button" onClick={handleShowCrewPopUp}> Meet The Crew</button>
                    <br />
                    <button className="button" onClick={handlePlacesToStay}> Flights and Places to Stay</button>
                    <br />
                    <button className="button" onClick={handleShowActivites}> Activities </button>
                    <br />
                    <button className="button" onClick={handleAttire}> Attire & Registry</button>
                    <br /> 
                </div>

                <div className='intro'>
                    <h5>
                        Guest List: <br/> 
                        Check the list to see if you have RSVP'd<br/>
                    </h5>
                                    
                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search Guest List Name..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            style={{ padding: '8px', marginBottom: '16px' }}
                        />

                        {/* List Display */}
                        <ul className='no-marker'>
                            {limitedData.map(item => (
                                <li key={item.id} 
                                    style={{ padding: '8px 0', borderBottom: '1px solid #ccc' }}
                                    >
                                    {item.guest}
                                </li>
                            ))}
                        </ul>

                        {/* Pagination Controls */}
                        <div style={{ marginTop: '16px' }}>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <span style={{ margin: '0 10px' }}>
                                Page {currentPage} of {totalPages || 1}
                            </span>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages || totalPages === 0}
                            >
                                Next
                            </button>
                        </div>

                        {filteredData.length === 0 && <p>No results found</p>}
                        <b>Guest Count Total:</b> {guestList.length}

                </div>

            </div>
        );

    } else {
        return (
            <div>

                {showCrew && (
                    <TheCrew
                        onClose={handleShowCrewPopUp}
                    />
                )}

                {showPlacesToStay && (
                    <StayAndFlights
                        onClose={handlePlacesToStay}
                    />
                )}

                {showActivities && (
                    <Activities
                        onClose={handleShowActivites}
                    />
                )}

                {showRsvp && (
                    <RSVPForm
                        onClose={handleshowRsvp}
                    />
                )}

                {showAttire && (
                    <AttireRegistry
                        onClose={handleAttire}
                    />
                )}
            </div>
        )
    }

}
export default HomePage;