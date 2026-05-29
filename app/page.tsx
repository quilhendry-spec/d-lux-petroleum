"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

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

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#about" className="hover:text-yellow-500">
              About
            </a>

            <a href="#services" className="hover:text-yellow-500">
              Services
            </a>

            <a href="#industries" className="hover:text-yellow-500">
              Industries
            </a>

            <a href="#quote" className="hover:text-yellow-500">
              Quote
            </a>

            <a href="#contact" className="hover:text-yellow-500">
              Contact
            </a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Enterprise Fuel Supply Solutions
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Reliable diesel delivery, petroleum supply,
            and commercial energy services across South Africa.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="#quote"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold transition"
            >
              Request Quote
            </a>

            <a
              href="https://wa.me/27661427934"
              className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition"
            >
              WhatsApp Us
            </a>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              About D-Lux Petroleum
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              D-Lux Petroleum delivers reliable bulk fuel supply,
              diesel delivery, and commercial petroleum solutions
              tailored for transport, mining, construction,
              logistics, and industrial sectors.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We focus on efficiency, reliability,
              competitive pricing, and long-term partnerships.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2070&auto=format&fit=crop"
              alt="Fuel Industry"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 px-6 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Services
            </h2>

            <p className="text-lg text-gray-600">
              Professional fuel solutions for enterprise operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Bulk Fuel Supply",
                desc: "Reliable large-scale diesel and petroleum supply solutions.",
              },

              {
                title: "On-Site Diesel Delivery",
                desc: "Fast direct-to-site delivery for operational continuity.",
              },

              {
                title: "Commercial Contracts",
                desc: "Long-term fuel agreements tailored for enterprise clients.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        id="industries"
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Mining",
              "Transport & Logistics",
              "Construction",
              "Commercial Fleets",
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-gray-100 p-8 rounded-2xl text-center font-bold text-lg hover:bg-yellow-500 hover:text-black transition"
              >
                {industry}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-black text-white">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-16">
            Client Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Reliable diesel supply with professional service every time.",

              "Excellent response times and competitive fuel pricing.",

              "Trusted petroleum partner for our transport operations.",
            ].map((quote, i) => (
              <div
                key={i}
                className="bg-gray-900 p-8 rounded-3xl"
              >
                <p className="text-lg italic text-gray-300">
                  “{quote}”
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section
        id="quote"
        className="py-24 px-6 bg-gray-100"
      >
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">

          <h2 className="text-4xl font-bold mb-8 text-center">
            Request a Fuel Quote
          </h2>

          <form
            action="https://formsubmit.co/quilhendry@gmail.com"
            method="POST"
            className="grid gap-5"
          >

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="hidden"
              name="_subject"
              value="New Fuel Quote Request"
            />

            <input
              type="text"
              name="Full Name"
              placeholder="Full Name"
              className="border p-4 rounded-xl"
              required
            />

            <input
              type="text"
              name="Company"
              placeholder="Company Name"
              className="border p-4 rounded-xl"
            />

            <input
              type="tel"
              name="Phone"
              placeholder="Phone Number"
              className="border p-4 rounded-xl"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email Address"
              className="border p-4 rounded-xl"
              required
            />

            <input
              type="text"
              name="Fuel Quantity"
              placeholder="Fuel Quantity Needed"
              className="border p-4 rounded-xl"
            />

            <textarea
              name="Message"
              placeholder="Additional Information"
              rows={5}
              className="border p-4 rounded-xl"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition"
            >
              Submit Quote Request
            </button>

          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 bg-black text-white"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Contact Us
            </h2>

            <div className="space-y-4 text-lg text-gray-300">
              <p>
                <strong>WhatsApp:</strong> 066 142 7934
              </p>

              <p>
                <strong>Email:</strong> quilhendry@gmail.com
              </p>

              <p>
                <strong>Location:</strong> Rivonia, South Africa
              </p>
            </div>

            <div className="mt-8 flex gap-4 flex-wrap">

              <a
                href="https://wa.me/27661427934"
                className="bg-yellow-500 text-black px-6 py-4 rounded-2xl font-bold"
              >
                WhatsApp
              </a>

              <a
                href="mailto:quilhendry@gmail.com"
                className="border border-white px-6 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition"
              >
                Email Us
              </a>

            </div>
          </div>

          <div>
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Rivonia&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[400px] rounded-3xl border-0"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 text-center py-8">
        © 2026 D-Lux Petroleum. All Rights Reserved.
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/27661427934"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white px-6 py-4 rounded-full shadow-2xl font-bold z-50 transition"
      >
        WhatsApp
      </a>

    </div>
  );
}