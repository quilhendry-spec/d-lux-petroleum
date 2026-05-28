"use client";

import Image from "next/image";

export default function Home() {

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

  <header className="p-6 flex justify-between items-center shadow">
  <div className="flex items-center gap-3">

    <Image
      src="/logo.png"
      alt="D-Lux Petroleum Logo"
      width={60}
      height={60}
      className="rounded-full"
    />

    <div>
      <h1 className="text-xl font-bold">
        D-Lux Petroleum
      </h1>

      <p className="text-sm text-gray-500">
        Fuel & Energy Solutions
      </p>
    </div>

  </div>

  <a
    href="https://wa.me/27661427934"
    className="bg-green-500 text-white px-4 py-2 rounded-xl"
  >
    WhatsApp
  </a>
</header>

      {/* HERO */}
      <section className="bg-black text-white text-center py-24 px-6">
        <h1 className="text-5xl font-bold">
          Fuel Supply & Diesel Delivery
        </h1>
        <p className="mt-4 text-gray-300">
          Reliable fuel services across South Africa
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#quote"
            className="bg-white text-black px-6 py-3 rounded-xl"
          >
            Request Quote
          </a>

          <a
            href="https://wa.me/27661427934"
            className="border border-white px-6 py-3 rounded-xl"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 border rounded-xl">
            Bulk Diesel Supply
          </div>

          <div className="p-6 border rounded-xl">
            Fuel Delivery Services
          </div>

          <div className="p-6 border rounded-xl">
            Commercial Fuel Contracts
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            Fast and reliable service
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Great pricing and support
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Trusted fuel supplier
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>WhatsApp: 066 142 7934</p>
        <p>Email: quilhendry@gmail.com</p>
        <p>Location: Rivonia, South Africa</p>
      </section>
{/* QUOTE FORM */}
<section
  id="quote"
  className="py-20 px-6 bg-gray-100"
>
  <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">

    <h2 className="text-3xl font-bold mb-6 text-center">
      Request a Fuel Quote
    </h2>

    <form className="grid gap-4">

      <input
        type="text"
        placeholder="Full Name"
        className="border p-3 rounded-xl"
      />

      <input
        type="text"
        placeholder="Company Name"
        className="border p-3 rounded-xl"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="border p-3 rounded-xl"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="border p-3 rounded-xl"
      />

      <input
        type="text"
        placeholder="Fuel Quantity Needed"
        className="border p-3 rounded-xl"
      />

      <textarea
        placeholder="Additional Information"
        rows={5}
        className="border p-3 rounded-xl"
      />

      <button
        type="submit"
        className="bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition"
      >
        Submit Quote Request
      </button>

    </form>
  </div>
</section>
      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        © 2026 D-Lux Petroleum
      </footer>

    </div>
  );
}