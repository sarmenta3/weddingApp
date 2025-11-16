import { useState, useEffect } from 'react';
import './theCrew.css';

// ladies
import jekiPic from '../pictures/jeki.jpg'
import nikkiPic from '../pictures/nikki.jpg'
import liaPic from '../pictures/lia.jpg'
import crystalPic from '../pictures/crystal.jpg'
import cassPic from '../pictures/cass.jpg'
import lexiPic from '../pictures/lexi.jpeg'
import emilyPic from '../pictures/emily.jpeg'


//Gents
import oliviaPic from '../pictures/oliva.jpg'
import carlyPic from '../pictures/carly.jpg'
import maxPic from '../pictures/max.jpg'
import timPic from '../pictures/tim.jpg'
import noahPic from '../pictures/noah.jpg'
import samPic from '../pictures/sam.jpg'
import geoffPic from '../pictures/geoff.png'
//the gents

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

    const jeki = (
        <div>
            <h1>Jeki</h1>
            <p>"If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you." <br/>~ Winnie-the-Pooh 
            </p>
        </div>
    );

    const niki = (
        <div>
            <h1>Nikki</h1>
            <p>It is an absolute honor to be a part of Jelena and Sam’s wedding. Jelena and Sam are two of the most genuine people I have ever been around. 
                If you have had the joy to be around them at any time in your life, you know exactly what I am talking about. Their shared humor, kindness and ability to listen
                 and be there for everyone in their life is unlike any other couple I know.</p>
            <p>I have had the joy of becoming friends with Jelena in third grade. We famously met at the bus stop and the rest is history. 
                Our lives have taken us many places but no matter how far away we had ever become, one phone call would take us right back to the start.</p>
            <p>When Jelena first told me about Sam, he seemed too good to be true. She said he is kind, patient and loving in all the ways you hope your best friend would find.
                 Upon meeting him, all of this plus more was confirmed. He is compassionate, smart and gives Jelena her spotlight while lovingly gazing and cheering her on from
                  the sidelines. When it is Sam's turn to shine, Jelena is his biggest hype-man. She sings his praises loudly for the world to hear, 
                  and trust me when I say it is loud.</p>
            <p>Spending time with Jelena and Sam is like being around two old fictional souls. They look out for you, even while lost with no cell service in the middle of 
                Colorado. They care about your hopes, future and dreams - even if you sound delusional. They’ll dive into long conversations about the books that have moved you.
                 They’ve loved my son as if he were their own family. They’ll make you laugh until you can’t breathe, then cook a meal from scratch and stay up all night in the
                  kitchen sharing stories, laughter, and tears in ways that embrace the quiet and simple act of friendship that is hard to find.</p>
            <p>These two souls belong together.</p>
            <p>Thank you to both Sam and Jelena for these moments from now until forever. I am beyond excited to witness your marriage.</p>
            <p></p>
        </div>
    )

    const lia = (
        <div>
            <h1>Lia</h1>
            <p>We first met in the elementary school lunch line — definitely not fighting over a boy — and somehow ended up sharing secrets and singing Good Charlotte instead.
                 When we both started at a new middle school, we clung to each other right away and have been inseparable ever since. 
                 From late night (“Girls go to bed!”) sleepovers and three way calls to endless study sessions that always turned into laughing fits, 
                 we’ve made a lifetime of memories together. She’s the kind of friend you can always lean on — loyal, hilarious, and endlessly supportive. 
                 Seeing her find someone like Sammy Wammy who matches her heart and humor has been such a joy. He fits right in with us (especially when we’re shotgunning beers
                  down the river — well, not Jelena, just me and Sam, haha). So honored to be part of their special day and can’t wait to celebrate these two!</p>
        </div>
    )

    const crystal = (
        <div>
            <h1>Crystal</h1>
            <p>It’s hard to pin point the start of my friendship with Jelena because for more than 25 years she has always been there as my constant, my confidant and my sister!
                 We met in the third grade and through every year and milestone of life Jelena has been forever loyal, honest, compassionate, hilarious, protective and kind. 
                 Its been beautifully inspiring to watch my best friend find true love with Sam who holds all those qualities and more. 
                 I am so blessed to be a part of Jelena and Sam’s special day and get to witness two people who value, respect and love each other say, “I do”! 
                 Two people who treat their friends and family like gold; just imagine how they treat each other! May God bless Sam and Jelena today and everyday! 
                 Now let’s party!</p>
        </div>
    )

    const cass = (
        <div>
            <h1>Cassandra</h1>
            <p>
                On the first day of grad school, in our first class, somehow Jelena and I started chatting. We had a few other classes that same day and if you know Jelena, 
                you know she can make friends with anyone. Classroom chats turned into being invited over to their apartment which in turn introduced me to Sam.
                 Pretty soon I was at their apartment almost daily. Rummaging through their pantry, doing homework, having sleepovers and dinner with both of them. 
                 Jelena and Sam were basically my Sacramento mom and dad. Over time, life progressed and their relationship transformed into many different forms. 
                 However, one thing has been consistent and that’s the love they’ve always had for each other. 
                 I’ve truly seen their relationship form into this beautiful love story and now they are finally going to be husband and wife.
                 I’m so happy and excited for this new journey and I couldn’t be more honored to stand by their side and watch their happily ever after unfold.
            </p>
        </div>
    )

    const lexi = (
        <div>
            <h1>Lexi</h1>
            <p></p>
        </div>
    )

      const emily = (
        <div>
            <h1>Emily</h1>
            <p>When I sat down to write this, I thought it</p>
            <p>would be easier to summarize 25+ years of friendship, but when someone turns from a friend into family, it is hard to capture in just a few words. 
                Jelena has become like a sister to me—someone I’ve laughed with, cried with, confided in, and trusted with my deepest thoughts; 
                someone I could always lean on for support and depend on in any moment of need. </p>
            <p>In a world that moves so fast, having a true friend who has loved you through so many seasons is rare. 
                I feel so grateful that our paths crossed in those Walter Colton Middle School halls. 
                From that, thousands of hours of “quick” phone calls that turned to 4 hours, sleep overs, big moves, new jobs, countless heart to hearts, laughs, 
                inside jokes and decades of memories were made. </p>
            <p>To know Jeki is to love her—vibrant, beautiful, quick-witted, hilarious, and always willing to do anything for the people she loves. 
                I am honored to be part of this special day and to stand beside my best friend as she marries the love of her life, Sam. 
                You have been such a pillar in my life story, Jelena, and I am so blessed to walk beside you as you enter this new season of yours as a wife</p>
            <p>Volim te. 💛</p>
        </div>
    )


    // gents

    const olivia = (
        <div>
            <h1>Olivia</h1>
            <p>Being Sam’s big sister, I have been privileged and honored to love him instantly, adore him (most of the time 😉), and see him grow and mature into the man he 
                is today. Sam has become a man who is self disciplined, humble, hilarious, courageous, dependable, hard working, 
                loving, fun, kind, honest, and an amazing uncle who is loved and enjoyed!! I have not known Jelena nearly as long, but in the time I have, I have grown to 
                love and adore her just as much. Jelena is equally as hilarious, loving, and kind. She is generous, thoughtful, and so patient 
                (she’s got to be to be marrying my brother 🙂)! She too has become very loved and adored by my kids. Sam + Jelena are a perfect pair; 
                they are genuine, loving, thoughtful, and fun. His weaknesses are met with her strengths and hers are likewise met by his, he holds her up when she is
                 weary and she encourages him when he is down. The Proverbs say a man who has found a wife finds a good thing and obtains favor from the Lord - in my 
                 opinion Sam has found a good thing. I am beyond honored to have been asked to stand beside these two while they promise a lifetime of love to each other.</p>
        </div>
    )

     const carly = (
        <div>
            <h1>Carly</h1>
            <p> Sam and I’s relationship has always been stereotypical super cool big brother, super annoying little sister. I grew up knowing Sam would always have my back. 
            He listened to me when I was down and championed me in my accomplishments. I’m so incredibly honored I get to stand next to him and champion him in this next chapter. 
            I love Sam and I love and adore Jelena. She has been a beacon of positivity and the most genuine person. I can’t imagine someone more supportive for my brother. 
            I’m incredibly excited for this union and to be apart of such a sweet memorable day. <br/>I love you both ♥️</p>
        </div>
    )

    const geoff = (
        <div>
            <h1>Geoff</h1>
            <p>Bestie from the Westy! Since 2000</p>
        </div>
    )

     const max = (
        <div>
            <h1>Max</h1>
            <p>When I was younger, Sam was the cooler, older cousin. He was taller than me and he had a super fun TNMT video game that he let me play on his Gameboy (iykyk). 
            Fast forward fifteen years and I was lucky enough to reconnect with my cooler cousin Sam in Sacramento, where he living with my sister. Except now he wasn’t taller, and I don’t think he had his Gameboy either. Yet he was still Sam the Man, my cool cousin. Sam is someone I look up to. Sam is someone I respect. I love my cousin. He’s open-minded, fun-loving, caring, chill, fun, funny, athletic, smart, and humble.
            Spending time with Sam (and Jelena) was my favorite part of living in Northern California. Whether it was later night Fire Wings, floating 
            (and maybe a wee bit of drinking) on the American River, or chilling at their apartment with grey cat (aka Lou) and Rufus (rest in peace), 
            I always had a blast hanging out with my cousin. And then I met Jelena… and she was (is?) WILD! I remember when my wife, Katherine, and I went on a camping trip 
            with them and Jelena brought the party. Heck, Jelena WAS the party! We had a really fun time.
            Katherine and I were blessed to have Jelena and Sam host us in Denver this past May, and I’m happy to say that Jelena is still wild and crazy and fun.
             But more importantly, Sam is wild for Jelena and crazy in love with her, and I know they’ll have a fun life together. Can’t wait to celebrate you both!</p>
        </div>
    )

     const tim = (
        <div>
            <h1>Tim</h1>
            <p></p>
        </div>
    )

     const noah = (
        <div>
            <h1>Noah</h1>
            <p>I am so honored to be part of this beautiful wedding congratulations Sam and Jelena can't wait till 8/8/2026</p>
        </div>
    )


     const sam = (
        <div>
            <h1>Sam</h1>
            <p>"I am no one special, just a common man with common thoughts. I've led a common life... But in one respect I've succeeded as gloriously as anyone who ever lived.
                I've loved another with all my heart and soul, and for me that has always been enough" <br/>~ Noah Calhoun </p>
        </div>
    )


    return (
        // background
        <div className='theCrewBackground'>

            <div className='theCrew-content'>

                {/* exit button  and close function*/}
                <button className='theCrew-exit-button' onClick={() => handleSetClose()}>X</button>

                 {/* =============Start Of ladies========================= */}
                <div className='theCrew-info'>
                    <p>(Click on the photos for more details)</p>
                   
                   {/* Jelena */}
                    <h1>The Bride</h1>
                    <div className='member'>
                        <FlipCard
                            frontImage={jekiPic}
                            backInfo={jeki}
                        />
                    </div>

                    {/* ladies */}
                    <h1>The Bridesmaids</h1>

                    {/* Nikki */}
                    <div className='member'>
                        <FlipCard
                            frontImage={nikkiPic}
                            backInfo={niki}
                        />
                    </div>

                    {/* Lia */}
                    <div className='member'>
                        <FlipCard
                            frontImage={liaPic}
                            backInfo={lia}
                        />
                    </div>

                    {/* Crystal */}
                    <div className='member'>
                        <FlipCard
                            frontImage={crystalPic}
                            backInfo={crystal}
                        />
                    </div>

                    {/* cass */}
                    <div className='member'>
                        <FlipCard
                            frontImage={cassPic}
                            backInfo={cass}
                        />
                    </div>

                    {/* lexi */}
                    <div className='member'>
                        <FlipCard
                            frontImage={lexiPic}
                            backInfo={lexi}
                        />
                    </div>

                    {/* emily */}
                    <div className='member'>
                        <FlipCard
                            frontImage={emilyPic}
                            backInfo={emily}
                        />
                    </div>

                </div>
                 {/* =============End Of ladies========================= */}

                {/* =============Start Of gents========================= */}
                {/* the gents */}
                <div className='theCrew-info'>
                    <h1>The Gents</h1>
                    <div className='member'>
                        <FlipCard
                            frontImage={samPic}
                            backInfo={sam}
                        />
                    </div>

                    <div className='member'>
                        <FlipCard
                            frontImage={oliviaPic}
                            backInfo={olivia}
                        />
                    </div>
                    <div className='member'>
                        <FlipCard
                            frontImage={carlyPic}
                            backInfo={carly}
                        />
                    </div>
                    <div className='member'>
                        <FlipCard
                            frontImage={geoffPic}
                            backInfo={geoff}
                        />
                    </div>
                    <div className='member'>
                        <FlipCard
                            frontImage={maxPic}
                            backInfo={max}
                        />
                    </div>
                    <div className='member'>
                        <FlipCard
                            frontImage={timPic}
                            backInfo={tim}
                        />
                    </div>
                    <div className='member'>
                        <FlipCard
                            frontImage={noahPic}
                            backInfo={noah}
                        />
                    </div>
                </div>
                {/* =============End Of gents========================= */}


            </div>

        </div> // back ground end
    )

}
export default TheCrew;