"use client";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            D-Lux Petroleum
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Reliable Fuel Supply & Diesel Delivery Solutions Across South Africa
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/27661427934"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold"
            >
              WhatsApp Us
            </a>
            <a
              href="#quote"
              className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              D-Lux Petroleum provides reliable fuel supply and diesel delivery services for businesses, fleets, construction, mining, and logistics operations.
            </p>
            <p className="text-lg text-gray-700">
              We focus on fast delivery, competitive pricing, and dependable service.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2070&auto=format&fit=crop"
            alt="Fuel"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-bold">Our Services</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fuel Supply",
              desc: "Bulk fuel supply for businesses and fleets.",
            },
            {
              title: "Diesel Delivery",
              desc: "Fast diesel delivery to your location.",
            },
            {
              title: "Commercial Fuel Solutions",
              desc: "Custom fuel solutions for industries.",
            },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-gray-100 rounded-3xl shadow">
              <h3 className="text-2xl font-bold mb-3 text-yellow-600">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Request a Fuel Quote
          </h2>

          <form className="grid md:grid-cols-2 gap-6 bg-gray-900 p-8 rounded-3xl">
            <input className="p-4 bg-gray-800 rounded" placeholder="Full Name" />
            <input className="p-4 bg-gray-800 rounded" placeholder="Company" />
            <input className="p-4 bg-gray-800 rounded" placeholder="Email" />
            <input className="p-4 bg-gray-800 rounded" placeholder="Phone" />

            <textarea
              className="p-4 bg-gray-800 rounded md:col-span-2"
              placeholder="Message"
              rows={5}
            />

            <button className="bg-yellow-500 text-black font-bold py-4 rounded md:col-span-2">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-10">Testimonials</h2>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {["Reliable service.", "Fast delivery.", "Great support."].map(
            (t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow">
                "{t}"
              </div>
            )
          )}
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-6">Contact</h2>

            <p>WhatsApp: 066 142 7934</p>
            <p>Email: quilhendry@gmail.com</p>
            <p>Address: 15 Stinkhout Crescent, Rivonia</p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://wa.me/27661427934"
                className="bg-green-500 px-6 py-3 rounded font-bold"
              >
                WhatsApp
              </a>
              <a
                href="mailto:quilhendry@gmail.com"
                className="border px-6 py-3 rounded"
              >
                Email
              </a>
            </div>
          </div>

          <iframe
            className="w-full h-[300px] rounded-2xl"
            src="https://maps.google.com/maps?q=Rivonia&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-500">
        © 2026 D-Lux Petroleum
      </footer>

      {/* WhatsApp Floating */}
      <a
        href="https://wa.me/27661427934"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>
    </div>
  );
}
