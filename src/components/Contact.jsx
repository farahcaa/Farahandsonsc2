import React, { useState } from "react";
import PopupMessage from "./PopupMessage";
import { send } from "emailjs-com";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send("", "", toSend, "")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col w-full items-center justify-center my-10 font-serif">
      <h1 className="flex justify-center font-serif font-semibold  threexl:text-7xl lg:text-5xl sm:text-3xl">
        Get in Touch
      </h1>
      <p className="py-4 pl-7 threexl:text-4xl twoxl:text-3xl  text-xl lg:w-[700px] threexl:w-[800px] text-center">
        Ready to start your project with us? Contact our team today, and
        let&apos;s build the future together.
      </p>
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full items-center justify-center"
      >
        <input
          type="text"
          name="reply_to"
          placeholder="Email"
          className="border border-black bg-DarkBlue rounded-full sm:w-[80%] md:w-[60%] lg:w-[40%] threexl:w-[30%] h-16 text-xl pl-4 text-white mb-10"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="message"
          value={toSend.message}
          onChange={handleChange}
          placeholder="Message"
          className="border border-black bg-DarkBlue rounded-[4rem] sm:w-[80%] md:w-[60%] lg:w-[40%] threexl:w-[30%] h-72 text-xl p-5 mb-10 text-white"
        />
        <PopupMessage />
      </form>
    </div>
  );
};

export default Contact;
