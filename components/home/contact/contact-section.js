import Image from "next/image";
import ContactForm from "./contact-form";
const ContactSection = () => {
  return (
    <section>
      <div>
        <Image src="/vercel.svg" height={200} width={200} alt="contact" />
      </div>
      <div>
        <ContactForm />
        form 
      </div>
    </section>
  );
};

export default ContactSection;
