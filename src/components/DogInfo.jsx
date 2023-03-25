import '../css/DogInfo.css';
// import star from '../assets/icons/star.svg';
import back from '../assets/icons/back.svg';

const DogInfo = ({selectedDog, scrollHeight, handleBackToSearch}) => {

    const backToSearch = () => {
        return handleBackToSearch(scrollHeight);
    } 
    // console.log(scrollHeight);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const totalStars = [0, 1, 2, 3, 4];

    scrollToTop();

    return (
        <div className='dog_info'>
            <div className="dog_header">
                <button className="back_to_search" onClick={() => backToSearch()}>
                    <img src={back} alt="back arrow" />
                </button>
                <strong className='dog_name'>{selectedDog[0].name}</strong>
            </div>
            <div className="dog_body">
                <div className="dog_image_wrapper">
                    <img src={selectedDog[0].image_link} alt={selectedDog[0].name} className='dog_image' />
                </div>
                <ul className="dog_attributes">
                    <li>
                        <strong>Good with children: </strong> 
                        <span className={"attribute-value fill_"+selectedDog[0].good_with_children}>
                            {
                                totalStars.map(star => (
                                    <svg key={star} width="18" height="17" viewBox="0 0 18 17" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1.61804L10.5451 6.37336L10.6574 6.71885H11.0206H16.0207L11.9755 9.6578L11.6817 9.87132L11.7939 10.2168L13.339 14.9721L9.29389 12.0332L9 11.8197L8.70611 12.0332L4.66099 14.9721L6.20609 10.2168L6.31834 9.87132L6.02445 9.6578L1.97933 6.71885H6.97937H7.34265L7.4549 6.37336L9 1.61804Z" stroke="#696350"/>
                                    </svg>
                                ))
                            }                        
                        </span>
                    </li>
                    <li>
                        <strong>Good with other dogs: </strong> 
                        <span className={"attribute-value fill_"+selectedDog[0].good_with_other_dogs}>
                            {
                                totalStars.map(star => (
                                    <svg key={star} width="18" height="17" viewBox="0 0 18 17" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1.61804L10.5451 6.37336L10.6574 6.71885H11.0206H16.0207L11.9755 9.6578L11.6817 9.87132L11.7939 10.2168L13.339 14.9721L9.29389 12.0332L9 11.8197L8.70611 12.0332L4.66099 14.9721L6.20609 10.2168L6.31834 9.87132L6.02445 9.6578L1.97933 6.71885H6.97937H7.34265L7.4549 6.37336L9 1.61804Z" stroke="#696350"/>
                                    </svg>
                                ))
                            }                        
                        </span>
                    </li>
                    <li>
                        <strong>Shedding: </strong> 
                        <span className={"attribute-value fill_"+selectedDog[0].shedding}>
                            {
                                totalStars.map(star => (
                                    <svg key={star} width="18" height="17" viewBox="0 0 18 17" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1.61804L10.5451 6.37336L10.6574 6.71885H11.0206H16.0207L11.9755 9.6578L11.6817 9.87132L11.7939 10.2168L13.339 14.9721L9.29389 12.0332L9 11.8197L8.70611 12.0332L4.66099 14.9721L6.20609 10.2168L6.31834 9.87132L6.02445 9.6578L1.97933 6.71885H6.97937H7.34265L7.4549 6.37336L9 1.61804Z" stroke="#696350"/>
                                    </svg>
                                ))
                            }                        
                        </span>
                    </li>
                    <li>
                        <strong>Grooming: </strong> 
                        <span className={"attribute-value fill_"+selectedDog[0].grooming}>
                            {
                                totalStars.map(star => (
                                    <svg key={star} width="18" height="17" viewBox="0 0 18 17" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1.61804L10.5451 6.37336L10.6574 6.71885H11.0206H16.0207L11.9755 9.6578L11.6817 9.87132L11.7939 10.2168L13.339 14.9721L9.29389 12.0332L9 11.8197L8.70611 12.0332L4.66099 14.9721L6.20609 10.2168L6.31834 9.87132L6.02445 9.6578L1.97933 6.71885H6.97937H7.34265L7.4549 6.37336L9 1.61804Z" stroke="#696350"/>
                                    </svg>
                                ))
                            }                        
                        </span>
                    </li>
                    <li>
                        <strong>Drooling: </strong> 
                        <span className={"attribute-value fill_"+selectedDog[0].drooling}>
                            {
                                totalStars.map(star => (
                                    <svg key={star} width="18" height="17" viewBox="0 0 18 17" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1.61804L10.5451 6.37336L10.6574 6.71885H11.0206H16.0207L11.9755 9.6578L11.6817 9.87132L11.7939 10.2168L13.339 14.9721L9.29389 12.0332L9 11.8197L8.70611 12.0332L4.66099 14.9721L6.20609 10.2168L6.31834 9.87132L6.02445 9.6578L1.97933 6.71885H6.97937H7.34265L7.4549 6.37336L9 1.61804Z" stroke="#696350"/>
                                    </svg>
                                ))
                            }                        
                        </span>
                    </li>
                    <li>
                        <strong>Coat length: </strong> 
                        <span className={"attribute-value fill_"+selectedDog[0].coat_length}>
                            {
                                totalStars.map(star => (
                                    <svg key={star} width="18" height="17" viewBox="0 0 18 17" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1.61804L10.5451 6.37336L10.6574 6.71885H11.0206H16.0207L11.9755 9.6578L11.6817 9.87132L11.7939 10.2168L13.339 14.9721L9.29389 12.0332L9 11.8197L8.70611 12.0332L4.66099 14.9721L6.20609 10.2168L6.31834 9.87132L6.02445 9.6578L1.97933 6.71885H6.97937H7.34265L7.4549 6.37336L9 1.61804Z" stroke="#696350"/>
                                    </svg>
                                ))
                            }                        
                        </span>
                    </li>
                    <li>
                        <strong>Good with strangers: </strong> 
                        <span className={"attribute-value fill_"+selectedDog[0].good_with_strangers}>
                            {
                                totalStars.map(star => (
                                    <svg key={star} width="18" height="17" viewBox="0 0 18 17" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1.61804L10.5451 6.37336L10.6574 6.71885H11.0206H16.0207L11.9755 9.6578L11.6817 9.87132L11.7939 10.2168L13.339 14.9721L9.29389 12.0332L9 11.8197L8.70611 12.0332L4.66099 14.9721L6.20609 10.2168L6.31834 9.87132L6.02445 9.6578L1.97933 6.71885H6.97937H7.34265L7.4549 6.37336L9 1.61804Z" stroke="#696350"/>
                                    </svg>
                                ))
                            }                        
                        </span>
                    </li>
                    <li>
                        <strong>Playfulness: </strong> 
                        <span className={"attribute-value fill_"+selectedDog[0].playfulness}>
                            {
                                totalStars.map(star => (
                                    <svg key={star} width="18" height="17" viewBox="0 0 18 17" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1.61804L10.5451 6.37336L10.6574 6.71885H11.0206H16.0207L11.9755 9.6578L11.6817 9.87132L11.7939 10.2168L13.339 14.9721L9.29389 12.0332L9 11.8197L8.70611 12.0332L4.66099 14.9721L6.20609 10.2168L6.31834 9.87132L6.02445 9.6578L1.97933 6.71885H6.97937H7.34265L7.4549 6.37336L9 1.61804Z" stroke="#696350"/>
                                    </svg>
                                ))
                            }                        
                        </span>
                    </li>
                    <li>
                        <strong>Protectiveness: </strong> 
                        <span className={"attribute-value fill_"+selectedDog[0].protectiveness}>
                            {
                                totalStars.map(star => (
                                    <svg key={star} width="18" height="17" viewBox="0 0 18 17" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1.61804L10.5451 6.37336L10.6574 6.71885H11.0206H16.0207L11.9755 9.6578L11.6817 9.87132L11.7939 10.2168L13.339 14.9721L9.29389 12.0332L9 11.8197L8.70611 12.0332L4.66099 14.9721L6.20609 10.2168L6.31834 9.87132L6.02445 9.6578L1.97933 6.71885H6.97937H7.34265L7.4549 6.37336L9 1.61804Z" stroke="#696350"/>
                                    </svg>
                                ))
                            }                        
                        </span>
                    </li>
                    <li>
                        <strong>Trainability: </strong> 
                        <span className={"attribute-value fill_"+selectedDog[0].trainability}>
                            {
                                totalStars.map(star => (
                                    <svg key={star} width="18" height="17" viewBox="0 0 18 17" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1.61804L10.5451 6.37336L10.6574 6.71885H11.0206H16.0207L11.9755 9.6578L11.6817 9.87132L11.7939 10.2168L13.339 14.9721L9.29389 12.0332L9 11.8197L8.70611 12.0332L4.66099 14.9721L6.20609 10.2168L6.31834 9.87132L6.02445 9.6578L1.97933 6.71885H6.97937H7.34265L7.4549 6.37336L9 1.61804Z" stroke="#696350"/>
                                    </svg>
                                ))
                            }                        
                        </span>
                    </li>
                    <li>
                        <strong>Energy: </strong> 
                        <span className={"attribute-value fill_"+selectedDog[0].energy}>
                            {
                                totalStars.map(star => (
                                    <svg key={star} width="18" height="17" viewBox="0 0 18 17" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1.61804L10.5451 6.37336L10.6574 6.71885H11.0206H16.0207L11.9755 9.6578L11.6817 9.87132L11.7939 10.2168L13.339 14.9721L9.29389 12.0332L9 11.8197L8.70611 12.0332L4.66099 14.9721L6.20609 10.2168L6.31834 9.87132L6.02445 9.6578L1.97933 6.71885H6.97937H7.34265L7.4549 6.37336L9 1.61804Z" stroke="#696350"/>
                                    </svg>
                                ))
                            }                        
                        </span>
                    </li>
                    <li>
                        <strong>Barking: </strong> 
                        <span className={"attribute-value fill_"+selectedDog[0].barking}>
                            {
                                totalStars.map(star => (
                                    <svg key={star} width="18" height="17" viewBox="0 0 18 17" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1.61804L10.5451 6.37336L10.6574 6.71885H11.0206H16.0207L11.9755 9.6578L11.6817 9.87132L11.7939 10.2168L13.339 14.9721L9.29389 12.0332L9 11.8197L8.70611 12.0332L4.66099 14.9721L6.20609 10.2168L6.31834 9.87132L6.02445 9.6578L1.97933 6.71885H6.97937H7.34265L7.4549 6.37336L9 1.61804Z" stroke="#696350"/>
                                    </svg>
                                ))
                            }
                        </span>
                    </li>
                    <li>
                        <strong>Min life expectancy: </strong> 
                        <span className="attribute-value">{selectedDog[0].min_life_expectancy}yrs</span>
                    </li>
                    <li>
                        <strong>Max life expectancy: </strong> 
                        <span className="attribute-value">{selectedDog[0].max_life_expectancy}yrs</span>
                    </li>
                    <li>
                        <strong>Max height male: </strong> 
                        <span className="attribute-value">{selectedDog[0].max_height_male}inches</span>
                    </li>
                    <li>
                        <strong>Max height female: </strong> 
                        <span className="attribute-value">{selectedDog[0].max_height_female}inches</span>
                    </li>
                    <li>
                        <strong>Max weight male: </strong> 
                        <span className="attribute-value">{selectedDog[0].max_weight_male}lbs</span>
                    </li>
                    <li>
                        <strong>Max weight female: </strong> 
                        <span className="attribute-value">{selectedDog[0].max_weight_female}lbs</span>
                    </li>
                    <li>
                        <strong>Min height male: </strong> 
                        <span className="attribute-value">{selectedDog[0].min_height_male}inches</span>
                    </li>
                    <li>
                        <strong>Min height female: </strong> 
                        <span className="attribute-value">{selectedDog[0].min_height_female}inches</span>
                    </li>
                    <li>
                        <strong>Min weight male: </strong> 
                        <span className="attribute-value">{selectedDog[0].min_weight_male}lbs</span>
                    </li>
                    <li>
                        <strong>Min weight female: </strong> 
                        <span className="attribute-value">{selectedDog[0].min_weight_female}lbs</span>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}
 
export default DogInfo;