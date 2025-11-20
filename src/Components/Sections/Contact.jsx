import emailjs from "emailjs-com";
import React, { useState } from "react";

export const Contact = () => {

  const [formData, setformData] = useState({
    name: "",
    email: "", 
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {

    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY)
      .then((result)=> {
      alert("Message sent successfully!");
      setformData({name:"", email:"", subject:"", message:""})
    })
    .catch(() => alert("Failed to send the message, please try again later."))
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 py-16 px-6 lg:px-20 flex flex-col lg:flex-row gap-12 items-start justify-center"
    >
      {/* Info Section */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 leading-relaxed">
          We’d love to hear from you! Whether you have questions about destinations, 
          booking assistance, or travel recommendations, our team at <strong>Mell’s Travel</strong> 
          is always ready to help. Fill out the form and we’ll respond within 24 hours.
        </p>

        <div className="space-y-3 text-gray-700">
          <p>
            📍 <span className="font-medium">Office:</span> Nairobi, Kenya
          </p>
          <p>
            📧 <span className="font-medium">Email:</span> info@mellstravel.com
          </p>
          <p>
            📞 <span className="font-medium">Phone:</span> +254 700 000 000
          </p>
          <p>
            🕒 <span className="font-medium">Hours:</span> Mon – Fri, 9:00 AM – 6:00 PM
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>

        <form
        onSubmit={handleSubmit} 
        className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={(e) => setformData({...formData, name:e.target.value})}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}  
              placeholder="you@example.com"
              onChange={(e) => setformData({...formData, email:e.target.value})}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              placeholder="Booking inquiry, destination info, etc."
              onChange={(e) => setformData({...formData, subject:e.target.value})}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              name="message"
              value={formData.message}
              placeholder="Write your message..."
              onChange={(e) => setformData({...formData, message:e.target.value})}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
