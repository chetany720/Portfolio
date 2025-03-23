import React from 'react';
import { Phone, Mail, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="pt-24">
      <h2 className="section-heading">Let's Connect</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a 
            href="tel:6377447860"
            className="group bg-gray-800 bg-opacity-50 rounded-lg p-8 text-center border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-blue-500 bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-colors">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-400 group-hover:text-white transition-colors">+91 6377447860</p>
              </div>
            </div>
          </a>
          
          <a 
            href="mailto:chetanykalaneya720@gmail.com"
            className="group bg-gray-800 bg-opacity-50 rounded-lg p-8 text-center border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-purple-500 bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-colors">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-400 group-hover:text-white transition-colors">chetanykalaneya720@gmail.com</p>
              </div>
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/chetany-kalaneya/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800 bg-opacity-50 rounded-lg p-8 text-center border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-green-500 bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-colors">
                <Linkedin className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-400 group-hover:text-white transition-colors">Connect with me</p>
              </div>
            </div>
          </a>
        </div>
        
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}