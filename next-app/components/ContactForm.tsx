'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg">
      <h3 className="text-xl font-extrabold text-slate-900 mb-2">Send Us a Message</h3>
      <p className="text-sm text-slate-500 mb-6">
        Have questions, feedback, or need help organizing your academic workload? Reach out anytime!
      </p>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto">
            ✓
          </div>
          <h4 className="text-lg font-bold">Thank you for reaching out!</h4>
          <p className="text-sm text-blue-700">
            We have received your message and will respond to your email address shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-2 text-xs font-bold text-blue-600 hover:text-blue-800 underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Alex Johnson"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Student Email <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="alex@university.edu"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Feature Suggestion / Feedback"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Type your message or inquiry here..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-sm shadow-md shadow-blue-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? 'Sending Message...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
