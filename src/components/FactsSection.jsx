import "../css/FactsSection.css";
import Card from "./Card";
import wolf from '../assets/images/wolf.png';
import nose from '../assets/images/dog_nose_1.png';
import zeus from '../assets/images/zeus.png';
import eyes from '../assets/images/dog_with_glasses.png';
import bluey from '../assets/images/blue-australian-cattle-dog.png';
import gestures from '../assets/images/dog_gestures.png';
import greyhound from '../assets/images/greyhound.png';
import basenji from '../assets/images/basenji.png';


const FactsSection = () => {

    const facts = [
        { 
            id: 0, 
            cardHeading: null, 
            cardParagraph: "Dogs have been domesticated for over 15,000 years. Scientists believe that the domestication process began when wolves started scavenging near human settlements.", 
            cardImage: wolf 
        },
        { 
            id: 1, 
            cardHeading: null, 
            cardParagraph: "The nose of a dog is extremely powerful. Dogs have up to 300 million olfactory receptors in their noses, compared to only about 6 million in humans.", 
            cardImage: nose 
        },
        { 
            id: 2, 
            cardHeading: null, 
            cardParagraph: "The tallest dog ever recorded was a Great Dane named Zeus. He stood 44 inches tall at the shoulder and was 7 feet 4 inches long from nose to tail", 
            cardImage: zeus 
        },
        {
            id: 3, 
            cardHeading: null, 
            cardParagraph: "Dogs can see some colors, but not as many as humans. They see the world in shades of blue and yellow and have difficulty distinguishing between red and green.", 
            cardImage: eyes 
        },
        {
            id: 4, 
            cardHeading: null, 
            cardParagraph: "The oldest dog on record was an Australian Cattle Dog named Bluey who lived to be 29 years and 5 months old.", 
            cardImage: bluey 
        },
        {
            id: 5, 
            cardHeading: null, 
            cardParagraph: "Dogs can understand over 1000 words, gestures, and signals. They are also able to read human emotions by interpreting facial expressions and tone of voice.", 
            cardImage: gestures 
        },
        {
            id: 6, 
            cardHeading: null, 
            cardParagraph: "The fastest dog in the world is the Greyhound, which can run up to 45 miles per hour.", 
            cardImage: greyhound 
        },
        {
            id: 7, 
            cardHeading: null, 
            cardParagraph: "The Basenji is the only dog breed in the world that does not bark. Instead of barking, Basenjis make a yodel-like sound that is often described as a \"baroo.\"", 
            cardImage: basenji 
        },

    ];

    return (
        <div className="facts_section">
            <h2>Facts & Trivia</h2>
            <div className="card_container">
                {
                    facts.map( fact => (
                        <Card key={fact.id} cardHeading={fact.cardHeading} cardParagraph={fact.cardParagraph} cardImage={fact.cardImage} setScrollHeight={0}/>
                    ))
                }
            </div>
        </div>
    );
}
 
export default FactsSection;