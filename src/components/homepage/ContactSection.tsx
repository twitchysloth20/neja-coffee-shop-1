import { NJFullSection, NJTextSection1, NJContactDetails } from '@neja-digital/react-ui';
import ContactForm from '../contact/ContactForm';

export default function ContactSection() {
  const openingHours = (
    <>
      <h3>Opening hours</h3>
      <ul>
        <li><strong>Mon - Fri</strong>: 08:00 - 16:00</li>
        <li><strong>Sat</strong>: 10:00 - 18:00</li>
        <li><strong>Sun</strong>: Closed</li>
      </ul>
    </>
  );

  const contactInfo = (
    <>
      <h3>Our address</h3>
      <p><strong>Address:</strong> <span>Lorem ipsum something somewhere</span></p>
      <p><strong>Email:</strong> <span>contact@coffee.shop</span></p>
      <p><strong>Phone:</strong> <span>+(01) 234 456 789</span></p>
    </>
  );

  return (
    <NJFullSection njBackground="background">
      <NJTextSection1 className="content-wrapper contact-section">
        <h2 className="contact__title section__title">Come visit us</h2>
        <section className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24388.003289740103!2d17.247569096470347!3d63.16716200224437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4664d685e720899d%3A0x9529f31de9c0e69b!2sSollefte%C3%A5%2C%20Sweden!5e1!3m2!1sen!2sro!4v1782726815041!5m2!1sen!2sro"
            loading="lazy"
          />
        </section>
        <section className="contact__info">
          <NJContactDetails
            className="contact__details"
            njInfo={contactInfo}
            njOpeningHours={openingHours}
          />
          <ContactForm />
        </section>
      </NJTextSection1>
    </NJFullSection>
  );
}
