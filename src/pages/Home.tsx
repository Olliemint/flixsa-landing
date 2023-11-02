import Network from '../components/Network';
import FlixsaMobile from '../components/FlixsaMobile';
import Testimonials from '../components/Testimonials';
import WhyUs from '../components/WhyUs';
import MovieSlider from '../components/MovieSlider';
import Features from '../components/Features';
import About from '../components/About';
import Hero from '../components/Hero';


const Home = () => {

 


  return (
    <div>
      <section className="">
      

        <section className="w-full relative">
          <div className="max-w-[1440px] mx-auto md:p-4">
            <Hero />
          </div>
        </section>
        <section className="w-full relative">

          <div className="max-w-[1440px] mx-auto md:p-4">
            <About />
          </div>
        </section>
        <section className="w-full relative">
        
          <div className="max-w-[1440px] mx-auto md:p-4">
            <Features />
          </div>
        </section>
      </section>
      <WhyUs />
      <MovieSlider />
      <Testimonials />
      <FlixsaMobile />
      <Network />
    </div>
  );
}

export default Home