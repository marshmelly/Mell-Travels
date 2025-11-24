import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">No destination selected</h2>
        <button
          onClick={() => navigate("/destination")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! (Next step: save to Firebase)");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-3xl w-full bg-white p-6 rounded-2xl shadow-lg">
        
        {/* Destination Info */}
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />

        <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
        <p className="text-gray-700 mb-3">{data.description}</p>

        <h3 className="font-semibold text-lg mb-1">Highlights</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          {data.highlights?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Extra fields you want */}
        <h3 className="font-semibold text-lg">Price:</h3>
        <p className="mb-3 text-gray-700">{data.price}</p>

        <h3 className="font-semibold text-lg">Hotel:</h3>
        <p className="mb-5 text-gray-700">{data.hotel}</p>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="grid gap-4">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="border p-2 rounded-lg"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="border p-2 rounded-lg"
            onChange={handleChange}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Check-in date</label>
              <input
                type="date"
                name="checkIn"
                className="border p-2 rounded-lg w-full"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Check-out date</label>
              <input
                type="date"
                name="checkOut"
                className="border p-2 rounded-lg w-full"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              className="border p-2 rounded-lg w-full"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
          >
            Submit Booking
          </button>

        </form>
      </div>
    </div>
  );
};
