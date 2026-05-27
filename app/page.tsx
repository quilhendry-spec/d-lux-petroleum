"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* HEADER */}
      <header className="p-6 flex justify-between items-center shadow">
        <div className="font-bold text-xl">D-Lux Petroleum</div>
        <a
          href="https://wa.me/27661427934"
          className="bg-green-500 text-white px-4 py-2 rounded-xl"
        >
          WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section className="bg-black text-white text-center py-24 px-6">
        <h1 className="text-5xl font-bold">Fuel Supply & Diesel Delivery</h1>
        <p className="mt-4 text-gray-300">
          Reliable fuel solutions across South Africa
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a href="#quote" className="bg-white text-black px-6 py-3 rounded-xl">
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
            Excellent fuel supplier
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Great pricing and support
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

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        © 2026 D-Lux Petroleum
      </footer>

    </div>
  );
}