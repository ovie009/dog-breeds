import '../css/Card.css';

const Card = ({cardHeading, cardParagraph, cardImage}) => {
    return (
        <div className="card_wrapper">
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