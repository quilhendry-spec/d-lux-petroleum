"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* HERO */}
      <section className="bg-black text-white py-28 text-center">
        <h1 className="text-5xl font-bold">D-Lux Petroleum</h1>
        <p className="mt-4 text-lg text-gray-300">
          Fuel Supply & Diesel Delivery Across South Africa
        </p>

        <div className="flex gap-4 mt-8 justify-center flex-wrap">
          <a
            href="https://wa.me/27661427934"
            className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-2xl font-bold"
          >
            WhatsApp Us
          </a>

          <a
            href="#quote"
            className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black"
          >
            Request Quote
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-yellow-600 mb-2">
                Bulk Diesel Supply
              </h3>
              <p>Reliable fuel supply for fleets and industries.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-yellow-600 mb-2">
                Diesel Delivery
              </h3>
              <p>On-site fuel delivery anywhere in South Africa.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-yellow-600 mb-2">
                Commercial Contracts
              </h3>
              <p>Long-term fuel supply agreements for businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>WhatsApp: 066 142 7934</p>
        <p>Email: quilhendry@gmail.com</p>
        <p>Address: 15 Stinkhout Crescent, Rivonia</p>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6 text-sm">
        © 2026 D-Lux Petroleum. All Rights Reserved.
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/27661427934"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white px-6 py-4 rounded-full shadow-xl font-bold"
      >
        WhatsApp
      </a>

    </div>
  );
}