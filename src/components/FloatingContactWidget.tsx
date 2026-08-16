import React, { useState } from 'react';

interface FloatingContactWidgetProps {
  /** Distributor's YGY ID — included in the lead email so you know who to route it to. */
  distributorYgyId?: string;
  distributorName?: string;
  distributorPhone?: string;
  distributorEmail?: string;
}

function encodeFormData(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({
  distributorYgyId = '',
  distributorName = '',
  distributorPhone = '',
  distributorEmail = '',
}) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const payload = {
      'form-name': 'lead-contact',
      name,
      phone,
      email,
      message,
      distributorYgyId,
      distributorName,
      distributorPhone,
      distributorEmail,
    };

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(payload),
      });
      setStatus('success');
      resetForm();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-montserrat">
      {open && (
        <div className="mb-3 w-80 max-w-[90vw] bg-white rounded-xl shadow-soft-lg border border-gray-200 overflow-hidden">
          <div className="bg-health-blue text-white px-4 py-3 flex items-center justify-between">
            <h4 className="font-proxima font-bold text-sm">Contact Us</h4>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close contact form"
              className="text-white/80 hover:text-white text-lg leading-none"
            >
              &times;
            </button>
          </div>

          <div className="p-4">
            {status === 'success' ? (
              <div className="text-center py-4">
                <p className="text-health-blue font-proxima font-semibold mb-1">Thanks for reaching out!</p>
                <p className="text-sm text-gray-600">
                  {distributorName ? `${distributorName} will` : 'Someone will'} be in touch with you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-3 text-sm text-health-blue underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-health-blue"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-health-blue"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-health-blue"
                />
                <textarea
                  placeholder="How can we help?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-health-blue resize-none"
                />

                {status === 'error' && (
                  <p className="text-xs text-red-600">
                    Something went wrong sending your message. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-glorious-sunset text-white font-proxima font-bold text-sm py-2 rounded-md hover:bg-glorious-sunset/90 transition-colors disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {(distributorPhone || distributorEmail) && (
                  <p className="text-xs text-gray-400 text-center pt-1">
                    Or reach {distributorName || 'us'} directly
                    {distributorPhone ? ` at ${distributorPhone}` : ''}
                    {distributorEmail ? ` / ${distributorEmail}` : ''}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open contact form"
        className="bg-health-blue hover:bg-blue-sky text-white rounded-full w-14 h-14 shadow-soft-lg flex items-center justify-center transition-colors"
      >
        {open ? (
          <span className="text-2xl leading-none">&times;</span>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.284 0-2.503-.24-3.607-.673L3 20l1.673-4.393C4.24 14.503 4 13.284 4 12c0-4.418 4.03-8 9-8s8 3.582 8 8z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default FloatingContactWidget;
