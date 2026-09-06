import { useState } from 'react';
import { Mail, Instagram, Linkedin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Logo from '../components/Logo.jsx';
import { contactApi, getErrorMessage } from '../services/api.js';

const INITIAL_FORM = { name: '', email: '', message: '', company: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = 'Please enter a message of at least 10 characters.';
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    try {
      await contactApi.submit({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        company: form.company, // honeypot - always empty for real users
      });
      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
      setServerError(getErrorMessage(err));
    }
  };

  return (
    <div>
      <SEO
        title="Contact ZEVION"
        description="Get in touch with the ZEVION team by email, Instagram, LinkedIn, or through our contact form."
      />

      <section className="section text-center">
        <Reveal className="flex flex-col items-center gap-4">
          <Logo variant="mark" className="h-14 w-14" />
          <SectionHeading eyebrow="Contact" title="Contact ZEVION" subtitle="Power When Fuel Fails." />
        </Reveal>
      </section>

      <section className="section !pt-0 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Contact info */}
        <Reveal className="lg:col-span-2 flex flex-col gap-6">
          <div className="card flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-zevion-gray mb-3">Founders</p>
              <p className="text-white font-medium">Hemnath R</p>
              <p className="text-white font-medium">Benitah Joshi M</p>
            </div>

            <div className="h-px bg-zevion-border" />

            <a
              href="mailto:zevion.innovation@gmail.com"
              className="flex items-center gap-3 text-zevion-gray hover:text-zevion-gold transition-colors break-all"
            >
              <Mail className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              zevion.innovation@gmail.com
            </a>

            <a
              href="https://www.instagram.com/zevion.innovation/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zevion-gray hover:text-zevion-gold transition-colors"
            >
              <Instagram className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              @zevion.innovation
            </a>

            <a
              href="https://www.linkedin.com/in/zevion-undefined-a25857433"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zevion-gray hover:text-zevion-gold transition-colors"
            >
              <Linkedin className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              ZEVION on LinkedIn
            </a>
          </div>
        </Reveal>

        {/* Contact form */}
        <Reveal delay={150} className="lg:col-span-3">
          <form onSubmit={handleSubmit} noValidate className="card flex flex-col gap-5">
            {/* Honeypot field - hidden from real users, catches simple bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={form.company}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-white">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="rounded-md border border-zevion-border bg-zevion-black px-4 py-3 text-white placeholder:text-zevion-gray/50 focus:border-zevion-gold outline-none transition-colors"
                placeholder="Your full name"
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="rounded-md border border-zevion-border bg-zevion-black px-4 py-3 text-white placeholder:text-zevion-gray/50 focus:border-zevion-gold outline-none transition-colors"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="resize-none rounded-md border border-zevion-border bg-zevion-black px-4 py-3 text-white placeholder:text-zevion-gray/50 focus:border-zevion-gold outline-none transition-colors"
                placeholder="Tell us what's on your mind..."
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            {status === 'error' && (
              <p role="alert" className="text-sm text-red-400">
                {serverError}
              </p>
            )}

            {status === 'success' && (
              <div
                role="status"
                className="flex items-center gap-2 rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                Thank you. Your message has been received.
              </div>
            )}

            <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full sm:w-auto">
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </section>
    </div>
  );
}
