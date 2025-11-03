import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6 md:px-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-yellow-300">Our School</span>
          </h1>
          <p className="text-lg md:text-xl font-light">
            Where learning goes beyond classrooms — nurturing creativity,
            curiosity, and confidence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')] bg-cover bg-center opacity-20"
        ></motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to provide a holistic education that balances
            academics, creativity, and personal growth. We aim to shape young
            minds into confident individuals who can think critically and act
            compassionately.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            To create an inspiring environment where children learn through
            exploration, collaboration, and discovery — preparing them to be
            lifelong learners and responsible citizens of tomorrow.
          </p>
        </motion.div>
      </section>

      {/* Principal's Message */}
      <section className="bg-white py-20 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            Principal’s Message
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            “Every child is a seed of infinite potential. At our school, we
            nurture that potential with love, discipline, and innovation. We
            believe education is not about marks — it’s about building character
            and curiosity.”
          </p>
          <p className="text-xl font-semibold text-gray-800">— Principal, [Your School Name]</p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-indigo-50 py-20 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-indigo-700 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Learning",
                desc: "We combine traditional values with modern teaching methods and technology.",
              },
              {
                title: "Caring Environment",
                desc: "Every student is known, valued, and supported to grow with confidence.",
              },
              {
                title: "Future-Ready Skills",
                desc: "Our programs prepare students for the challenges of tomorrow’s world.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
