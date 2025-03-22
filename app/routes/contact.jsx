import ContactUs from 'components/home/contact';
import Sponsors from 'components/home/sponsors';

export function meta() {
  return [
    { title: 'contact' },
    { name: 'description', content: 'The hub for all your favorite events' },
  ];
}

export default function Contact() {
  return (
    <div className="hero">
      <ContactUs />
      <Sponsors />
    </div>
  );
}
