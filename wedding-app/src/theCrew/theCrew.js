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

    const niki = (
        <div>
            <h1>Niki</h1>
            <p>It is an absolute honor to be a part of Jelena and Sam’s wedding. Jelena and Sam are two of the most genuine people I have ever been around. If you have had the joy to be around them at any time in your life, you know exactly what I am talking about. Their shared humor, kindness and ability to listen and be there for everyone in their life is unlike any other couple I know.</p>
            <p>I have had the joy of becoming friends with Jelena in third grade. We famously met at the bus stop and the rest is history. Our lives have taken us many places but no matter how far away we had ever become, one phone call would take us right back to the start.</p>
            <p>When Jelena first told me about Sam, he seemed too good to be true. She said he is kind, patient and loving in all the ways you hope your best friend would find. Upon meeting him, all of this plus more was confirmed. He is compassionate, smart and gives Jelena her spotlight while lovingly gazing and cheering her on from the sidelines. When it is Sam's turn to shine, Jelena is his biggest hype-man. She sings his praises loudly for the world to hear, and trust me, she when I say it is loud.</p>
            <p>Spending time with Jelena and Sam is like being two old fictional souls. They look out for you, even while lost with no cell service in the middle of Colorado. They care about your hopes, future and dreams - even if you sound delusional. They’ll dive into long conversations about the books that have moved you. They’ve loved my son as if he were their own family. They’ll make you laugh until you can’t breathe, then cook a meal from scratch and stay up all night in the kitchen sharing stories, laughter, and tears in ways that embrace the quiet and simple act of friendship that is hard to find.</p>
            <p>Thank you to both Sam and Jelena for those moments. I am beyond excited to witness your marriage. </p>
        </div>
    )

    return (
        // background
        <div className='theCrewBackground'>

            <div className='theCrew-content'>

                {/* exit button  and close function*/}
                <button className='theCrew-exit-button' onClick={() => handleSetClose()}>X</button>


                <div className='theCrew-info'>
                    <p>(click the pic's)</p>
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
                            backInfo={niki}
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