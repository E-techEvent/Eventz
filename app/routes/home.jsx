import AboutUs from 'components/home/about';
import Hero from '../../components/home/hero';
import UpcomingEvents from 'components/home/upcomingEvent';
import PopularFaces from 'components/home/popularFaces';
import Testimonials from 'components/home/testimonial';
import ContactUs from 'components/home/contact';
import Sponsors from 'components/home/sponsors';

export function meta() {
  return [
    { title: 'Events' },
    { name: 'description', content: 'The hub for all your favorite events' },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <UpcomingEvents />
      <PopularFaces />
      <Testimonials />
      <Sponsors />
      <ContactUs />
    </>
  );
}
