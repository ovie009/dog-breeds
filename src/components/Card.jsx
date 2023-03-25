import '../css/Card.css';
import { useEffect } from 'react';

const Card = ({cardHeading, cardParagraph, cardImage, handleDogInfo, setScrollHeight}) => {

    useEffect(() => {
        function handleScroll() {
          setScrollHeight(window.scrollY);
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [setScrollHeight]);

    
    // function to show more information about a selected dog
    const selectDog = (dogName) => {
        
        // if the card components is used to show facts and trivia
        // and not list of dogs, return from this function
        if (dogName === null) return console.log("Do nothing");
        
        return handleDogInfo(dogName);
    }
    
    return (
        <div 
            className="card_wrapper"
            onClick={() => selectDog(cardHeading)}
        >
            <div className="card_image_wrapper">
                <img src={cardImage} alt="" />
            </div>
            <div className="card_text_wrapper">
                <strong className="card_heading">{cardHeading}</strong>
                <p className="card_paragraph">{cardParagraph}</p>
            </div>
        </div>
    );
}
 
export default Card;