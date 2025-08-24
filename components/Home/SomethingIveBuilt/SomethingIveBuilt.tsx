import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className="flex flex-col space-y-16 bg-gradient-to-br from-slate-900 via-gray-900 to-black w-full 
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 pt-16 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-500 opacity-5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10">
        {/* Title */}
        <div data-aos="fade-up" className="flex flex-row items-center md:px-0 mb-12">
          <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-cyan-400" />
          <div className="flex-none flex-row space-x-2 items-center pr-2">
            <span className="text-cyan-400 font-mono text-sm sm:text-xl">03.</span>
            <span className="font-bold tracking-wider text-white text-lg md:text-2xl opacity-90">
              Case Studies & Technical Implementations
            </span>
          </div>
          <div className="bg-gray-600 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
        </div>

        <div className="flex flex-col space-y-20">
          {/* Case Study 1 - AI Platform Development */}
          <div data-aos="fade-up" className="group">
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Content */}
                <div className="lg:w-2/3 space-y-6">
                  <div className="space-y-3">
                    <span className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-mono border border-cyan-400/20">
                      AI Platform Development
                    </span>
                    <h3 className="text-white text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                      Conversational AI Platform with RAG Implementation
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-cyan-400 font-semibold text-lg">Challenge & Approach:</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Built a cutting-edge conversational AI platform that processes documents, maintains context across sessions, and provides intelligent responses using advanced RAG (Retrieval-Augmented Generation) architecture.
                    </p>

                    <h4 className="text-cyan-400 font-semibold text-lg">Technical Workflow:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">Document Processing:</span> Implemented intelligent chunking and vector embedding pipeline using TensorFlow and custom NLP models</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">Vector Search:</span> Integrated semantic search using vector databases for contextual document retrieval</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">AI Integration:</span> Leveraged OpenAI GPT-4 with custom fine-tuning for domain-specific responses</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">Multi-modal Support:</span> Added voice processing and image analysis capabilities for comprehensive AI interaction</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Visual */}
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-cyan-400/20">
                    <h4 className="text-white font-semibold mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js 14", "OpenAI GPT-4", "Python", "TensorFlow", "Vector DB", "TypeScript", "Node.js", "RAG"].map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700/50 text-gray-200 rounded-full text-xs border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-cyan-400 text-sm font-mono">🚀 In Development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 - Enterprise Marketplace */}
          <div data-aos="fade-up" className="group">
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Tech Stack Visual */}
                <div className="lg:w-1/3 lg:order-2">
                  <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl p-6 border border-cyan-400/20">
                    <h4 className="text-white font-semibold mb-4">Architecture</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Frontend</span>
                        <span className="text-cyan-400 text-sm">React.js</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Backend</span>
                        <span className="text-cyan-400 text-sm">Node.js</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Database</span>
                        <span className="text-cyan-400 text-sm">MongoDB</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Cache</span>
                        <span className="text-cyan-400 text-sm">Redis</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Search</span>
                        <span className="text-cyan-400 text-sm">Elasticsearch</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Deployment</span>
                        <span className="text-cyan-400 text-sm">AWS ECS</span>
                      </div>
                    </div>
                    <a href="https://formee.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                      <div className="text-cyan-400 hover:text-white transition-colors duration-300 cursor-pointer">
                        <ExternalLink url="https://formee.com" router={router} />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3 lg:order-1 space-y-6">
                  <div className="space-y-3">
                    <span className="inline-block px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-sm font-mono border border-green-400/20">
                      Enterprise Marketplace
                    </span>
                    <h3 className="text-white text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                      Scalable Marketplace Platform - Formee
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-cyan-400 font-semibold text-lg">Project Leadership & Architecture:</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Led the technical architecture and development of a comprehensive marketplace platform, implementing microservices architecture to handle high-traffic scenarios and complex business logic.
                    </p>

                    <h4 className="text-cyan-400 font-semibold text-lg">Implementation Workflow:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">Microservices Design:</span> Architected scalable backend services with Docker containerization and orchestration</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">AI-Powered Features:</span> Integrated recommendation engine and intelligent search using machine learning algorithms</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">Performance Optimization:</span> Achieved 99.9% uptime with load balancing and automated scaling on AWS ECS</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">Real-time Analytics:</span> Implemented comprehensive monitoring and analytics dashboard for business insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3 - Event Management Platform */}
          <div data-aos="fade-up" className="group">
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Content */}
                <div className="lg:w-2/3 space-y-6">
                  <div className="space-y-3">
                    <span className="inline-block px-4 py-2 bg-purple-400/10 text-purple-400 rounded-full text-sm font-mono border border-purple-400/20">
                      Event Management SaaS
                    </span>
                    <h3 className="text-white text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                      Social Event Planning Platform - Purposite
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-cyan-400 font-semibold text-lg">Team Leadership & Full-Stack Development:</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Served as technical lead for developing a comprehensive event management platform that enables collaborative gift-giving and social event organization with real-time features.
                    </p>

                    <h4 className="text-cyan-400 font-semibold text-lg">Technical Implementation:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">API Design:</span> Architected RESTful APIs for user management, event creation, and payment processing</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">Real-time Features:</span> Implemented live updates for event participation and gift contributions using WebSocket</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">Database Optimization:</span> Designed efficient MySQL schemas for complex event relationships and user interactions</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">AWS Integration:</span> Deployed scalable infrastructure with automated backup and monitoring systems</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Visual */}
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-cyan-400/20">
                    <h4 className="text-white font-semibold mb-4">Development Stack</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["React.js", "Node.js", "MySQL", "AWS", "WebSocket", "Express.js"].map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700/50 text-gray-200 rounded-full text-xs border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Users</span>
                        <span className="text-purple-400">5000+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Events Created</span>
                        <span className="text-purple-400">15,000+</span>
                      </div>
                    </div>
                    <a href="https://purpositdev.com/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                      <div className="text-cyan-400 hover:text-white transition-colors duration-300 cursor-pointer">
                        <ExternalLink url="https://purpositdev.com/" router={router} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 4 - E-commerce Platform */}
          <div data-aos="fade-up" className="group">
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Tech Stack Visual */}
                <div className="lg:w-1/3 lg:order-2">
                  <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-cyan-400/20">
                    <h4 className="text-white font-semibold mb-4">E-commerce Stack</h4>
                    <div className="space-y-3">
                      <div className="text-orange-400 text-sm">WordPress + WooCommerce</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-300">Stripe</span>
                          <span className="text-green-400">✓</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-300">PayPal</span>
                          <span className="text-green-400">✓</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-300">Apple Pay</span>
                          <span className="text-green-400">✓</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-300">Google Pay</span>
                          <span className="text-green-400">✓</span>
                        </div>
                      </div>
                    </div>
                    <a href="https://gunillaofsweden.com/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                      <div className="text-cyan-400 hover:text-white transition-colors duration-300 cursor-pointer">
                        <ExternalLink url="https://gunillaofsweden.com/" router={router} />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3 lg:order-1 space-y-6">
                  <div className="space-y-3">
                    <span className="inline-block px-4 py-2 bg-orange-400/10 text-orange-400 rounded-full text-sm font-mono border border-orange-400/20">
                      E-commerce Platform
                    </span>
                    <h3 className="text-white text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                      Subscription-based E-commerce - Gunila of Sweden
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-cyan-400 font-semibold text-lg">Complex E-commerce Solution:</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Developed a sophisticated subscription-based e-commerce platform with multi-gateway payment processing and automated recurring billing systems.
                    </p>

                    <h4 className="text-cyan-400 font-semibold text-lg">Development Process:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">Multi-Gateway Integration:</span> Seamlessly integrated Stripe, PayPal, Apple Pay, and Google Pay for global accessibility</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">Subscription Management:</span> Built automated recurring billing with flexible subscription intervals and pause/resume functionality</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">Custom Development:</span> Created specialized WooCommerce extensions for complex product variants and shipping rules</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300"><span className="text-white font-medium">Performance Optimization:</span> Implemented caching strategies and database optimization for high-traffic handling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}