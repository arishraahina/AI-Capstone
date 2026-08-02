import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Student Task Tracker',
  description: 'Get in touch with Student Task Tracker team for inquiries, support, or feature requests.',
};

export default function ContactPage() {
  return (
    <main className="space-y-10 max-w-6xl mx-auto">
      {/* Header Banner */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-sm text-slate-500">
          Have questions about Student Task Tracker, suggestions, or technical support? Drop us a line!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info & Socials Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-3xl p-8 text-white shadow-xl space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tight">Contact Info</h2>
            <p className="text-sm text-blue-100 leading-relaxed">
              We are dedicated to supporting students. Reach out via email, or connect through our social channels.
            </p>

            <div className="space-y-4 pt-2 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg">
                  📧
                </div>
                <div>
                  <div className="text-xs text-blue-200 uppercase font-bold">Support Email</div>
                  <div className="font-semibold text-white">support@tasktracker.student</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg">
                  📍
                </div>
                <div>
                  <div className="text-xs text-blue-200 uppercase font-bold">Student Hub</div>
                  <div className="font-semibold text-white">Campus Tech Center, Room 402</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg">
                  ⏰
                </div>
                <div>
                  <div className="text-xs text-blue-200 uppercase font-bold">Operating Hours</div>
                  <div className="font-semibold text-white">Mon – Fri: 9:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 border-t border-white/20">
              <div className="text-xs text-blue-200 uppercase font-bold mb-3">Connect With Us</div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold text-sm transition-colors"
                  aria-label="GitHub"
                >
                  GH
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold text-sm transition-colors"
                  aria-label="LinkedIn"
                >
                  IN
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold text-sm transition-colors"
                  aria-label="Twitter X"
                >
                  X
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form Component */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}