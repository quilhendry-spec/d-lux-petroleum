"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            D-Lux Petroleum
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
            Reliable fuel supply and diesel delivery solutions across South Africa.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/27661427934"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold transition"
            >
              WhatsApp Us
            </a>

            <a
              href="#quote"
              className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About D-Lux Petroleum</h2>

            <p className="text-lg text-gray-700 mb-4">
              D-Lux Petroleum provides professional fuel supply and diesel delivery services for businesses, transport companies, construction projects, mining operations, and commercial clients.
            </p>

            <p className="text-lg text-gray-700">
              We pride ourselves on reliability, fast turnaround times, competitive pricing, and excellent customer service.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2070&auto=format&fit=crop"
            alt="Fuel Delivery"
            className="rounded-3xl shadow-xl w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Our Services</h2>
            <p className="text-gray-600 mt-4 text-lg">
              Fuel solutions tailored for commercial and industrial operations.
            </p>
          </div>
}