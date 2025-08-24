
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-8 w-full py-20 items-center bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500 opacity-5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center">
        {/* Section Header */}
        <div className="flex flex-row items-center justify-center mb-8">
          <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-cyan-400" />
          <div className="flex flex-row space-x-2 items-center ml-4">
            <span className="text-cyan-400 font-mono text-sm sm:text-base">04.</span>
            <span className="font-mono text-cyan-400 text-base">What's Next?</span>
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Let's Build Something
          <span className="block text-cyan-400">Amazing Together</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
          Ready to turn your ideas into reality? I'm here to help you build scalable solutions, 
          implement AI features, or tackle complex technical challenges. Let's discuss your project 
          and explore how we can work together.
        </p>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
            <div className="text-cyan-400 text-3xl mb-4">🚀</div>
            <h3 className="text-white font-semibold text-lg mb-2">Rapid Development</h3>
            <p className="text-gray-400 text-sm">Fast-track your project with proven architectures and best practices</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
            <div className="text-cyan-400 text-3xl mb-4">🤖</div>
            <h3 className="text-white font-semibold text-lg mb-2">AI Integration</h3>
            <p className="text-gray-400 text-sm">Leverage cutting-edge AI and machine learning capabilities</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
            <div className="text-cyan-400 text-3xl mb-4">📈</div>
            <h3 className="text-white font-semibold text-lg mb-2">Scalable Solutions</h3>
            <p className="text-gray-400 text-sm">Build for growth with cloud-native and microservices architecture</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-800/60 to-gray-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-8">
          <h3 className="text-white text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Book a free 30-minute consultation to discuss your project requirements, 
            timeline, and how I can help bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/ergovindnamdev/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-mono text-sm hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/25 hover:scale-105 flex items-center space-x-2">
                <span>📅</span>
                <span>Schedule a Call</span>
              </button>
            </a>
            
            <div className="text-gray-400 text-sm">or</div>
            
            <a
              href="https://wa.me/+919993583578?text=Hi%20Govind,%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-mono text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/25 hover:scale-105 flex items-center space-x-2">
                <span>💬</span>
                <span>Quick Chat on WhatsApp</span>
              </button>
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-cyan-400 text-sm font-mono mb-2">Email</div>
            <a 
              href="mailto:ergovindnamdev@gmail.com" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              ergovindnamdev@gmail.com
            </a>
          </div>
          
          <div className="text-center">
            <div className="text-cyan-400 text-sm font-mono mb-2">Response Time</div>
            <div className="text-gray-300">Usually within 24 hours</div>
          </div>
        </div>

        {/* Availability Status */}
        <div className="mt-8 inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-mono">Available for new projects</span>
        </div>
      </div>
    </div>
  );
}
