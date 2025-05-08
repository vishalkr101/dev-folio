import React from "react";
import ShinyText from "../StyledComponents/ShinyText";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

    emailjs
      .sendForm(
        "service_lgqxvfx",
        "template_5913ixo",
        event.target,
        "ifng66dfeBBlS4RG2"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          event.target.reset();
        },
        (error) => {
          alert("Failed to send email. Please try again later.");
          console.error(error);
        }
      );
    };
  return (
    <div>
      <div className="flex flex-col justify-center w-full mt-10">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            required
            name="subject"
            placeholder="Subject"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <textarea
            rows="4"
            cols="40"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-2 border border-gray-300 rounded resize-none"
          ></textarea>
          <button className="p-2 text-white border border-gray-300 rounded-md cursor-pointer" type="submit">
            <ShinyText
              text="Send Message"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
