"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* HERO */}
      <section className="bg-black text-white py-24 text-center">
        <h1 className="text-5xl font-bold">D-Lux Petroleum</h1>
        <p className="mt-4 text-lg">
          Fuel Supply & Diesel Delivery Solutions
        </p>

        <div className="flex gap-4 mt-8 justify-center flex-wrap">
          <a
            href="https://wa.me/27661427934"
            className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-2xl font-bold"
          >
            WhatsApp Chat
          </a>

          <a
            href="mailto:quilhendry@gmail.com"
            className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black"
          >
            Request Quote
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p>
          We supply diesel and fuel directly to businesses, fleets, and construction sites across South Africa.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-100 p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <ul className="space-y-3">
          <li>Bulk Diesel Supply</li>
          <li>Fuel Delivery</li>
          <li>Commercial Fuel Contracts</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="bg-black text-white p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>WhatsApp: 066 142 7934</p>
        <p>Email: quilhendry@gmail.com</p>
        <p>Address: 15 Stinkhout Crescent, Rivonia</p>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-center p-4 text-sm">
        © 2026 D-Lux Petroleum. All Rights Reserved.
      </footer>

    </div>
  );
}