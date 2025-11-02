import './theCrew.css';
import { useState } from 'react';
import Sam from '../pictures/cousin1.JPEG'
import pic1 from '../pictures/cousin2.JPEG'
import pic2 from '../pictures/popThat.jpg'
import FlipCard from '../flipCard/flipCard';


function TheCrew({ onClose }) {

    const [close, setClose] = useState(false);

    const handleSetClose = () => {

        onClose();
        setClose(!close);
    }

    const sam = (
        <div>
            <h1>Jeki</h1>
            <p>Hey I am Sam hope you come to enjoy yourself. Honestly
                I dont know wht to write but I just want to see what happens.
                I work for LM hope to BBQ and throw a wedding you will not forget.
                Should we have monkies? Bears? 90 rock stars?
                IDK lets sEE!!!!
            </p>
        </div>
    );

    const sam1 = (
        <div>
            <h1>Sam</h1>
            <p>Hey I am Sam hope you come to enjoy yourself.
            </p>
        </div>
    );

    return (
        // background
        <div className='theCrewBackground'>

            <div className='theCrew-content'>
                
                {/* exit button  and close function*/}
                <button className='theCrew-exit-button' onClick={() => handleSetClose()}>X</button>
                

                <div className='theCrew-info'>
                    {/* <button className='theCrew-exit-button' onClick={() => handleSetClose()}>X</button> */}
                    <h1>The main event</h1>
                    <div className='member'>
                        <FlipCard
                            frontImage={pic2}
                            backInfo={sam}
                        />
                    </div>
                    <h1>And Her Peeps</h1>
                    <div className='member'>
                        <FlipCard
                            frontImage={pic1}
                            backInfo={sam}
                        />
                    </div>
                    <div className='member'>
                        <FlipCard
                            frontImage={Sam}
                            backInfo={sam}
                        />
                    </div>
                    <div className='member'>
                        <FlipCard
                            frontImage={Sam}
                            backInfo={sam}
                        />
                    </div>
                </div>

                <div className='theCrew-info'>
                    <h1>The Gents</h1>
                    <div className='member'>
                        <FlipCard
                            frontImage={Sam}
                            backInfo={sam}
                        />
                    </div>
                    <h1>And Her Peeps</h1>
                    <div className='member'>
                        <FlipCard
                            frontImage={Sam}
                            backInfo={sam}
                        />
                    </div>
                    <div className='member'>
                        <FlipCard
                            frontImage={Sam}
                            backInfo={sam}
                        />
                    </div>
                    <div className='member'>
                        <FlipCard
                            frontImage={Sam}
                            backInfo={sam}
                        />
                    </div>
                </div>




            </div>


        </div> // back ground end
    )

}
export default TheCrew;