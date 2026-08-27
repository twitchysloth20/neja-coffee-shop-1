import { NJButton, NJInput, NJTextArea } from '@neja-digital/react-ui';
import { useState, type MouseEvent } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(name, email, message);
    // send message here
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact__form-wrapper">
      <h3 className="contact__form-title">
        Shoot us a message
      </h3>
      <form className="contact__form">
        <NJInput
          type="text"
          njLabel="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          njRounded="tight"
          njBorder="thin"
          njSize="compact"
          id="name"
        />
        <NJInput
          type="email"
          njLabel="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          njRounded="tight"
          njBorder="thin"
          njSize="compact"
          id="email"
        />
        <NJTextArea
          njLabel="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          njRounded="tight"
          njBorder="thin"
          njSize="compact"
          rows={5}
          id="message"
          njResize="vertical"
        />
        <NJButton
          type="submit"
          njVariant="solid"
          njColor="secondary"
          njRounded="tight"
          onClick={sendMessage}
        >
          Submit
        </NJButton>
      </form>
    </section>
  );
}