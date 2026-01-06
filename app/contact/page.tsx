"use client"
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Building2, Mail, Phone, User } from 'lucide-react';

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h2>
          <p className="text-slate-600 mb-6">
            We've received your information and will be in touch within 24 hours to schedule your consultation.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="cursor-pointer inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-serif">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => window.location.href = '/'} className="flex items-center">
              <span className="text-2xl font-bold text-slate-900">Otlet</span>
              <span className="text-2xl font-light text-slate-600 ml-1">Consulting</span>
            </button>
            <button onClick={() => window.location.href = '/'} className="cursor-pointer text-slate-600 py-2 px-3 hover:text-slate-900 hover:bg-gray-100 rounded-lg transition">
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get Started
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tell us about your business and we'll schedule a free consultation to analyze your software costs.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Benefits Sidebar */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg p-6 border border-gray-200 sticky top-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">What to Expect:</h3>
                <ul className="space-y-3">
                  {[
                    "Free 30-minute consultation",
                    "Software audit & analysis",
                    "Cost savings estimate",
                    "Custom solution proposal",
                    "No obligation to proceed"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-slate-600 mb-2">
                    <strong className="text-slate-900">Typical response time:</strong> Within 24 hours
                  </p>
                  <p className="text-sm text-slate-600">
                    <strong className="text-slate-900">Preferred contact:</strong> Email or phone
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none text-black"
                        placeholder="John Smith"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none text-black"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none text-black"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-900 mb-2">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none text-black"
                        placeholder="Acme Veterinary Clinic"
                      />
                    </div>
                  </div>

                  {/* Industry */}
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-slate-900 mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none"
                    >
                      <option value="">Select your industry</option>
                      <option value="veterinary">Veterinary Clinic</option>
                      <option value="equestrian">Equestrian Facility</option>
                      <option value="medical">Medical Practice</option>
                      <option value="dental">Dental Practice</option>
                      <option value="therapy">Therapy/Counseling Practice</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                      Tell us about your software challenges
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none resize-none text-black"
                      placeholder="What software are you currently using? What are your biggest pain points?"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    // onClick={handleSubmit}
                    className="cursor-pointer w-full bg-black text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-black hover:ring transition duration-300 inline-flex items-center justify-center"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>

                  <p className="text-sm text-slate-600 text-center">
                    By submitting this form, you agree to be contacted by Otlet Consulting regarding your inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-slate-600">
          © 2024 Otlet Consulting. All rights reserved.
        </div>
      </footer>
    </div>
  );
}