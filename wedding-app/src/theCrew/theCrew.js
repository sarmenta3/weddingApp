import { useState, useEffect } from 'react';
import './theCrew.css';

import Sam from '../pictures/cousin1.JPEG'
import pic2 from '../pictures/popThat.jpg'
import nikkiPic from '../pictures/nikki.jpg'
import liaPic from '../pictures/lia.jpg'
import crystalPic from '../pictures/crystal.jpg'
import FlipCard from '../flipCard/flipCard';


function TheCrew({ onClose }) {

    const [close, setClose] = useState(false);

    useEffect(() => {
        const handlePopstate = (event) => {
           onClose();
           setClose(!close)
        };

        window.addEventListener('popstate', handlePopstate);

        return () => {
          window.removeEventListener('popstate', handlePopstate);
        };
      }, [close]); // Add navigate to dependency array if used

    const handleSetClose = () => {

        onClose();
        setClose(!close);
    }

    const sam = (
        <div>
            <h1>Jeki</h1>
            <p>Hello friends and family! I am so thrilled and honored to be surrounded by you all on our special day! There have been so many of you who have championed mine and Samuel's relationship since 2015 and for that I am forever grateful. I wanted to take time to give a special shoutout to my lovely bridemaids, many who have been rockin' with me since we were children (25+ years of friendship and counting). 
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
            <h1>Nikki</h1>
            <p>It is an absolute honor to be a part of Jelena and Sam’s wedding. Jelena and Sam are two of the most genuine people I have ever been around. If you have had the joy to be around them at any time in your life, you know exactly what I am talking about. Their shared humor, kindness and ability to listen and be there for everyone in their life is unlike any other couple I know.</p>
            <p>I have had the joy of becoming friends with Jelena in third grade. We famously met at the bus stop and the rest is history. Our lives have taken us many places but no matter how far away we had ever become, one phone call would take us right back to the start.</p>
            <p>When Jelena first told me about Sam, he seemed too good to be true. She said he is kind, patient and loving in all the ways you hope your best friend would find. Upon meeting him, all of this plus more was confirmed. He is compassionate, smart and gives Jelena her spotlight while lovingly gazing and cheering her on from the sidelines. When it is Sam's turn to shine, Jelena is his biggest hype-man. She sings his praises loudly for the world to hear, and trust me when I say it is loud.</p>
            <p>Spending time with Jelena and Sam is like being around two old fictional souls. They look out for you, even while lost with no cell service in the middle of Colorado. They care about your hopes, future and dreams - even if you sound delusional. They’ll dive into long conversations about the books that have moved you. They’ve loved my son as if he were their own family. They’ll make you laugh until you can’t breathe, then cook a meal from scratch and stay up all night in the kitchen sharing stories, laughter, and tears in ways that embrace the quiet and simple act of friendship that is hard to find.</p>
            <p>These two souls belong together.</p>
            <p>Thank you to both Sam and Jelena for these moments from now until forever. I am beyond excited to witness your marriage.</p>
            <p></p>
        </div>
    )

    const lia = (
        <div>
            <h1>Lia</h1>
            <p>We first met in the elementary school lunch line — definitely not fighting over a boy — and somehow ended up sharing secrets and singing Good Charlotte instead. When we both started at a new middle school, we clung to each other right away and have been inseparable ever since. From late night (“Girls go to bed!”) sleepovers and three way calls to endless study sessions that always turned into laughing fits, we’ve made a lifetime of memories together. She’s the kind of friend you can always lean on — loyal, hilarious, and endlessly supportive. Seeing her find someone like Sammy Wammy who matches her heart and humor has been such a joy. He fits right in with us (especially when we’re shotgunning beers down the river — well, not Jelena, just me and Sam, haha). So honored to be part of their special day and can’t wait to celebrate these two!</p>
        </div>
    )

    const crystal = (
        <div>
            <h1>Crystal</h1>
            <p>It’s hard to pin point the start of my friendship with Jelena because for more than 25 years she has always been there as my constant, my confidant and my sister! We met in the third grade and through every year and milestone of life Jelena has been forever loyal, honest, compassionate, hilarious, protective and kind. Its been beautifully inspiring to watch my best friend find true love with Sam who holds all those qualities and more. I am so blessed to be a part of Jelena and Sam’s special day and get to witness two people who value, respect and love each other say, “I do”! Two people who treat their friends and family like gold; just imagine how they treat each other! May God bless Sam and Jelena today and everyday! Now let’s party!</p>
        </div>
    )

    return (
        // background
        <div className='theCrewBackground'>

            <div className='theCrew-content'>

                {/* exit button  and close function*/}
                <button className='theCrew-exit-button' onClick={() => handleSetClose()}>X</button>


                <div className='theCrew-info'>
                    <p>(Click on the photos for more details)</p>
                    {/* <button className='theCrew-exit-button' onClick={() => handleSetClose()}>X</button> */}
                    <h1>The Bride</h1>
                    <div className='member'>
                        <FlipCard
                            frontImage={pic2}
                            backInfo={sam}
                        />
                    </div>
                    <h1>The Bridesmaids</h1>
                    <div className='member'>
                        <FlipCard
                            frontImage={nikkiPic}
                            backInfo={niki}
                        />
                    </div>
                    <div className='member'>
                        <FlipCard
                            frontImage={liaPic}
                            backInfo={lia}
                        />
                    </div>
                    <div className='member'>
                        <FlipCard
                            frontImage={crystalPic}
                            backInfo={crystal}
                        />
                    </div>
                </div>

                <div className='theCrew-info'>
                    <h1>The Groom</h1>
                    <div className='member'>
                        <FlipCard
                            frontImage={Sam}
                            backInfo={sam}
                        />
                    </div>
                    <h1>The Gents</h1>
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