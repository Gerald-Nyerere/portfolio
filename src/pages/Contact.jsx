import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Phone, MapPin } from "lucide-react"; // Optional icons

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black px-6 py-12 relative overflow-hidden">
      {/* Decorative Circles */}
      <motion.div
        className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-pink-300 rounded-full opacity-30 blur-2xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-blue-300 rounded-full opacity-30 blur-2xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Contact Card */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side Illustration */}
        <motion.div
          className="hidden md:flex w-1/2 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 items-center justify-center p-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png"
            alt="Contact Illustration"
            className="w-64 h-64 drop-shadow-2xl"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-10">
          <motion.h2
            className="text-4xl font-extrabold mb-4 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8 text-center md:text-left">
            I'd love to hear from you! Whether it’s a project, idea, or
            collaboration, feel free to reach out.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-800 dark:text-white"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-800 dark:text-white"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-800 dark:text-white"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>

            <motion.button
              type="submit"
              className={`flex items-center justify-center gap-2 font-semibold py-3 rounded-lg shadow-lg transition transform ${
                sent
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white hover:shadow-xl"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {sent ? (
                <>
                  ✅ Sent Successfully!
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <div className="mt-8 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <p className="flex items-center gap-2">
              <Mail size={18} /> geraldnyerere100@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} /> +254 799 859 642
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={18} /> Nairobi, Kenya
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
