import React, { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const EmailRestAPI = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const serviceId = 'service_q1lep9i';
    const templateId = 'template_rv1z4ai';
    const publicKey = 'iFlX6Pbq0yUyek3Mr';

    const templateParams = {
      from_name: fullName,
      from_email: email,
      from_phone: phone,
      to_name: 'Website DSI',
      message: message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setFullName('');
        setEmail('');
        setPhone('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-labelledby="contact-form-title"
    >
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          name="fullName"
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200"
          placeholder="Enter your fullname"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          name="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200"
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200 resize-y min-h-[100px]"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        // disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-900 to-indigo-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center justify-center"
      >
        Send Email
        <ArrowUpRight className="ml-2 w-4 h-4" />
      </button>
    </form>
  )
}

export default EmailRestAPI