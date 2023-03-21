import '../css/TipsSection.css';

const TipsSection = ({heading, paragraph, image, imageDescription, normalFlow}) => {
    
    console.log(normalFlow);

    return (
        <div className="tips_section">
            <div className="text_wrapper">
                <h2>{heading}</h2>
                <p>{paragraph}</p>
            </div>
            <div className="image_wrapper">
                <img src={image} alt={imageDescription} />
            </div>
        </div>
    );
}
 
export default TipsSection;