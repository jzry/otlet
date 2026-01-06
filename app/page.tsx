"use client"
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, TrendingDown, Code, BarChart3, Menu, X } from 'lucide-react';

export default function OtletConsulting() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-serif bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold font-serif text-slate-900">Otlet</span>
              <span className="text-2xl font-light font-serif text-slate-600 ml-1">Consulting</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="#services" className="bg-white text-slate-900 px-2 py-2 rounded-md hover:bg-gray-100 transition">Services</a>
              <a href="#process" className="bg-white text-slate-900 px-2 py-2 rounded-md hover:bg-gray-100 transition">Process</a>
              <a href="#industries" className="bg-white text-slate-900 px-2 py-2 rounded-md hover:bg-gray-100 transition">Industries</a>
              <a href="/contact" className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:ring-black hover:ring transition duration-300">
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-slate-600 hover:text-slate-900">Services</a>
              <a href="#process" className="block text-slate-600 hover:text-slate-900">Process</a>
              <a href="#industries" className="block text-slate-600 hover:text-slate-900">Industries</a>
              <a href="#contact" className="block bg-slate-900 text-white px-6 py-2 rounded-md text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-5xl font-bold font-serif text-black leading-tight mb-6">
              Reduce software costs by up to 70%
            </h1>
            <p className="text-3xl text-xl text-slate-800 mb-8 leading-relaxed">
              We analyze your current software stack and build custom solutions<br></br>to reduce costs and improve efficiency for small businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:ring hover:text-black transition duration-300">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#process" className="inline-flex items-center justify-center border-1 border-black text-slate-900 px-8 py-4 rounded-md text-lg font-medium hover:bg-black hover:text-white hover:ring transition duration-300">
                Learn Our Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">$50K+</div>
              <div className="text-slate-600">Average Annual Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">2-3 Months</div>
              <div className="text-slate-600">Typical ROI Timeline</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-slate-600">Custom-Built Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We identify expensive software inefficiencies and build tailored solutions that work exactly how your business needs them to.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
              <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Software Audit</h3>
              <p className="text-slate-600">
                Comprehensive analysis of your current software stack, identifying redundancies, inefficiencies, and cost-saving opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
              <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Development</h3>
              <p className="text-slate-600">
                Purpose-built software solutions designed specifically for your workflows, eliminating the need for expensive generic tools.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
              <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="h-6 w-6 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cost Reduction</h3>
              <p className="text-slate-600">
                Replace multiple expensive subscriptions with a single, efficient system that pays for itself within months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A straightforward approach to transforming your software infrastructure.
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                description: "We analyze your current software expenses, usage patterns, and workflow requirements to identify opportunities."
              },
              {
                step: "02",
                title: "Proposal & Planning",
                description: "Receive a detailed report showing potential savings and a roadmap for custom solutions tailored to your needs."
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "We build and rigorously test your custom solution, ensuring it integrates seamlessly with your existing operations."
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Launch your new system with comprehensive training and ongoing support to ensure long-term success."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Specialized expertise in operations with complex software needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Veterinary Clinics",
                items: ["Practice management", "Inventory tracking", "Client portals", "Appointment scheduling"]
              },
              {
                title: "Equestrian Facilities",
                items: ["Boarding management", "Training schedules", "Billing systems", "Client communication"]
              },
              {
                title: "Private Practices",
                items: ["Patient management", "Scheduling systems", "Billing & invoicing", "Record keeping"]
              }
            ].map((industry, idx) => (
              <div key={idx} className="curbg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{industry.title}</h3>
                <ul className="space-y-2">
                  {industry.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to reduce your software costs?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Schedule a free consultation to discover how much you could save with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-md text-lg font-medium hover:bg-slate-200 transition">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold text-slate-900">Otlet</span>
              <span className="text-2xl font-light text-slate-700 ml-1">Consulting</span>
            </div>
            <div className="text-slate-600">
              © 2024 Otlet Consulting LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}