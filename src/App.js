import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import grooming from './assets/images/dog_grooming.png';
import exercises from './assets/images/puppiesplaying.png';
import vaccination from './assets/images/dog_vet.png';
import TipsSection from './components/TipsSection';
import FactsSection from './components/FactsSection';
import Footer from './components/Footer';
import './css/App.css';

function App() {

  const tips = [
    {
      id: 0,
      heading: 'Grooming',
      paragraph: "Dog grooming is an essential aspect of pet care that involves the physical maintenance and hygiene of a dog's coat, skin, nails, and teeth. It includes various tasks such as brushing, bathing, hair trimming, ear cleaning, and nail clipping. Regular grooming not only improves the appearance of your dog but also promotes their overall health and well-being by preventing skin infections, matting, and other health issues. While some dog breeds may require more frequent grooming than others, it is important to establish a regular grooming routine that suits your dog's needs.",
      image: grooming,
      imageDescription: "Grooming a fluffy dog",
      normalFlow: true
    },
    {
      id: 1,
      heading: 'Exercises',
      paragraph: "Exercising your dog is crucial for their physical and mental health. Regular exercise helps prevent obesity, joint problems, and other health issues, while also keeping your dog mentally stimulated and happy. Depending on your dog's breed, age, and health, the amount and type of exercise needed may vary. However, it is recommended that dogs get at least 30 minutes to an hour of exercise every day, which can be broken down into shorter sessions throughout the day.",
      image: exercises,
      imageDescription: "Dogs playing on grass",
      normalFlow: false
    },
    {
      id: 2,
      heading: 'Vaccination',
      paragraph: "Vaccination is an essential aspect of responsible dog ownership that helps protect your pet from various infectious diseases. Vaccines work by stimulating the immune system to produce antibodies that fight specific diseases. The core vaccines for dogs include rabies, distemper, parvovirus, and adenovirus. Non-core vaccines may be recommended based on your dog's lifestyle and risk factors, such as leptospirosis, Lyme disease, or Bordetella.",
      image: vaccination,
      imageDescription: "Puppy at the vet",
      normalFlow: true
    }
  ];

  console.log(tips);

  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      {
        tips.map(tip => (
          <TipsSection key={tip.id} heading={tip.heading} paragraph={tip.paragraph} image={tip.image} imageDescription={tip.imageDescription} normalFlow={tip.normalFlow} />
        ))
      }
      <FactsSection />
      <Footer />
    </div>
  );
}

export default App;
