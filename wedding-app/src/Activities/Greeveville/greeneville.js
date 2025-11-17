import { useState } from "react";
import FlipCard from "../../flipCard/flipCard";

import './greeneville.css'

import home from '../../pictures/downtownGreeneville.jpeg'
import jonesboroughPic from '../../pictures/Jonesborough_pic.jpg'
import johnsonCityPic from '../../pictures/johnsonCity.jpg'


function Greeneville({onClose}) {
    const [close, setClose] = useState(false);

    const handleSetClose = () => {
        onClose();
        setClose(!close);
    }


    const homeDis = (
        <div>
            <h1>Greeneville</h1>
            <p> 
                <a href="https://maps.app.goo.gl/dHgGf7foxLhirSdf6" target="_blank" rel="noreferrer"> Greeneville TN.</a> We cannot wait for everyone to visit 
                this cute little town! On December 23, 2024 Sam dropped on one knee and proposed to Jelena during "family Christmas photos" on this property so it's a very special place to us. During the Civil War Greeneville held both Union and Southern soldiers and 
                as you can imagine is rich in American history. Andrew Johnson was the 17th President of the United States, who assumed office on April 15, 1865, following the assassination of Abraham Lincoln. Johnson, a War Democrat who ran as Lincoln's vice president on the National Union Party ticket in 1864, served until March 4, 1869. Andrew Johnson also happened to live in this town and you are able to tour his home. It's a very slow paced town and you will find
                time is now set to Tennesee time. 
            </p>

            <p>Few things to do in this small town:</p>
            <ul className="greeneville-list">
                <li>Hike: 
                    <a href="https://share.google/SFLojTdUZ1ktNO2b6" target="_blank" rel="noreferrer"> 
                     Margarette Falls Trail</a>
                    </li>
                <li>Explore: 
                    <a href="https://share.google/YRGi6kVPGrCSLb3jw" target="_blank" rel="noreferrer">
                    Andrew Johnson Homestead</a>
                    </li>
                <li>Brew:  
                    <a href="https://share.google/IAhAKkphQXrtVwAzV" target="_blank" rel="noreferrer">
                    The Gentry</a>
                    </li>
                <li>Brew and Food: 
                    <a href="https://share.google/AYhnxl5uPchNCdRBd" target="_blank" rel="noreferrer">
                    Rock City Tap & Lounge and Food Truck</a>
                </li>
                <li>Brew and Food: 
                    <a href="https://share.google/AYhnxl5uPchNCdRBd" target="_blank" rel="noreferrer">
                    Old Oak Taproom</a>
                </li>
                <li>Food: <a href="https://share.google/H7NbI2m4xSC1xBE3g" target="_blank" rel="noreferrer">
                Thai's Joy</a>
                </li>
            </ul>
        </div>
    );

     const jonesborough = (
        <div>
            <h1>Jonesborough</h1>
            <p><a href="https://maps.app.goo.gl/rs3MnvpaBb3yJpxQ7" target="_blank" rel="noreferrer">Jonesborough</a> is a cute little town with some good coffee and ice cream. They have an adorable downtown area with a lot of cute shops.
                Tennesee Hills, a distillary that has grown over the years, is located in this town and is one of our favorites.
                If you happen to be sitting at the bar when a train goes by, $1 shots are comming your way. From here head to 
                Johnson City for some more yummy food and local events. Make sure you make a pit stop at Troyer's Mountain View Country Market/
                Auntie Ruth's Doughnuts & Pretzels for a delicious little snack, it's right off the highway!
            </p>
             <p>Few things to do in this small town:</p>
            <ul className="greeneville-list">
                <li>Coffee/Ice Cream:
                    <a href="https://share.google/ZFCJouHFQCfGvsDWe" target="_blank" rel="noreferrer"> 
                     Neuma Coffee</a>
                    </li>
                <li>Distillery:
                    <a href="https://share.google/eotuaJX4A6oYLGxK1" target="_blank" rel="noreferrer">
                     Tennessee Hills Distillery</a>
                    </li>
                <li>Food:
                    <a href="https://share.google/Z7kV1HfkC7ktzB4dU" target="_blank" rel="noreferrer">
                     Troyer's Mountain View Country Market</a>
                    </li>
                <li>Food:
                    <a href="https://share.google/851YcS4H1y2E3Hi3Q" target="_blank" rel="noreferrer">
                     Auntie Ruth's Doughnuts & Pretzels</a>
                </li>
            </ul>
        </div>
    );

     const johnsonCity = (
        <div>
            <h1>Johnson City</h1>
            <p>"Walking to the south out of Roanoke caught a trucker out of Philly, had a nice long toke.
            But he's a-headed West from the Cumberland gap to 
            <a href="https://maps.app.goo.gl/aDvkhENbj1FwkyQ98" target="_blank" rel="noreferrer"> Johnson City, Tennessee." </a>      ~ Darius Rucker.</p>

            <p>This is the biggest of the small towns. You will find night life, food, coffee, sports bars, and strong drinks. In August, the town usually has concerts
            in the park. Tennessee Hills has their Brewstillery here where they serve beer and the good stuff. So head down to Johnson City and rock me mama like a wagon wheel,
             rock me mama any way you feel!
            </p>

            <p>Few things to do in this big small town:</p>
            <ul className="greeneville-list">
                <li>Coffee and Tacos:
                    <a href="https://share.google/dPbiNmQ2eSk4d3FHb" target="_blank" rel="noreferrer"> 
                     Fearless Coffee & Kitchen</a>
                    </li>
                <li>Brewstillery:
                    <a href="https://share.google/MxTKXQVLEEokFwfmm" target="_blank" rel="noreferrer">
                     Tennessee Hills Brewstillery</a>
                    </li>
                <li>Brew:
                    <a href="https://share.google/FWcOYmix24DWH3SrL" target="_blank" rel="noreferrer">
                     Yee-Haw Brewing Company</a>
                    </li>
                <li>Food:
                    <a href="https://share.google/GBxoieAWw6DKckTSA" target="_blank" rel="noreferrer">
                     White Duck Taco Shop</a>
                </li>
            </ul>
        </div>
    );

    return (
        // background
        <div className='greenevilleBackground'>

            <div className='greeneville-content'>
                
                {/* exit button  and close function*/}
                <button className='greeneville-exit-button' onClick={() => handleSetClose()}>X</button>
                <div className="greeneville-info">
                    <p>Tell 'em about the Vol</p>
                    <p>Please click on the photos to read more details.</p>
                </div>

                {/*We have reached the Vol*/}
                <div className='greeneville-info'>
                    <p>Greeneville Things</p>

                    <div className='member'>
                        <FlipCard
                            frontImage={home}
                            backInfo={homeDis}
                        />
                    </div>
                </div>

                 {/*Jonesborough*/}
                <div className='greeneville-info'>
                    <p>Jonesborough Things (~30 min away from Greeneville)</p>
                    <div className='member'>
                        <FlipCard
                            frontImage={jonesboroughPic}
                            backInfo={jonesborough}
                        />
                    </div>
                </div>

                 {/*Johnson city*/}
                <div className='greeneville-info'>
                    <p>Johnson City Things (~20 min away from Jonesborough)</p>
    
                    <div className='member'>
                        <FlipCard
                            frontImage={johnsonCityPic}
                            backInfo={johnsonCity}
                        />
                    </div>
                </div>

            </div>
        </div> // back ground end
    )

}

export default Greeneville;