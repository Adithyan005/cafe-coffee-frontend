import React, { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/", { name, email, phone, message });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSubmissionStatus("Thank you for your message!"); // Success message
    } catch (error) {
      console.error(error);
      setSubmissionStatus("Failed to send message, please try again."); // Error message
    }
  };

  return (
    <>
      <span id="contact"></span>
      <div className="bg-primary flex flex-col md:flex-row justify-around items-center gap-5 font-cursive text-white p-5">
        <div className="flex flex-col justify-center items-center gap-5 text-center md:text-left">
          <h1 className="text-2xl">Contact Us</h1>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a href="#"><h1 className="hover:underline">Home</h1></a>
            <a href="#services"><h1 className="hover:underline">BestSeller</h1></a>
            <a href="#banner"><h1 className="hover:underline">About</h1></a>
            <a href="#footer"><h1 className="hover:underline">Contact</h1></a>
          </div>
        </div>

        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="pt-8 space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-8 text-black p-1 font-mono border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-8 text-black p-1 font-mono border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="">Phone</label>
                <input
                  type="text"
                  id="phone"
                  maxLength="10"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-8 text-black p-1 font-mono border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                  className="text-black p-1 font-mono border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="flex justify-center items-center p-5">
                <button type="submit" className="bg-ghostwhite rounded-xl shadow-xl p-3 text-black">
                  Submit
                </button>
              </div>

              {submissionStatus && (
                <p className="text-center text-sm text-white">{submissionStatus}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
