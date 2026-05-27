  {/* ANIMATIONS */}
          desc: "Long-term fuel supply agreements for businesses."
        }
      ].map((item, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:scale-105 transition fade-up">
          <h3 className="text-xl font-bold mb-2 text-yellow-600">
            {item.title}
          </h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </section>

  {/* TESTIMONIALS */}
  <section className="py-20 px-6 bg-black text-white">
    <h2 className="text-3xl font-bold text-center mb-12 fade-up">
      Client Testimonials
    </h2>

    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        "Fast and reliable fuel delivery every time.",
        "Professional service and great pricing.",
        "Best fuel supplier for our fleet operations."
      ].map((t, i) => (
        <div key={i} className="bg-gray-900 p-6 rounded-2xl fade-up">
          <p>“{t}”</p>
        </div>
      ))}
    </div>
  </section>

  {/* CONTACT */}
  <section className="py-20 px-6 text-center fade-up">
    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
    <p className="mb-2">WhatsApp: 066 142 7934</p>
    <p className="mb-2">Email: quilhendry@gmail.com</p>
    <p>Address: 15 Stinkhout Crescent, Rivonia</p>

    <a
      href="https://wa.me/27661427934"
      className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition"
    >
      Chat on WhatsApp
    </a>
  </section>

  {/* FOOTER */}
  <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
    © 2026 D-Lux Petroleum. All Rights Reserved.
  </footer>

</div>