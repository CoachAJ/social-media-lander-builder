import React from 'react';

interface FooterProps {
  /** YGY distributor ID. When present, shows distributor-specific legal links and badge. */
  ygyId?: string;
  contactName?: string;
  contactPhone?: string;
  contactEmail?: string;
}

const Footer: React.FC<FooterProps> = ({ ygyId, contactName, contactPhone, contactEmail }) => {
  const hasDistributor = Boolean(ygyId);

  return (
    <footer className="bg-health-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-white/15 flex items-center justify-center">
                <span className="text-white font-proxima font-extrabold text-sm">90</span>
              </div>
              <h3 className="text-lg font-bold font-proxima">90 For Life</h3>
            </div>
            <p className="font-montserrat text-blue-100 text-sm leading-relaxed">
              Foundational nutrition built on Dr. Wallach's 90 Essential Nutrients and
              Pharmacist Ben Fuchs' cellular health philosophy.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-lg font-bold font-proxima mb-4">Contact</h3>
            <div className="font-montserrat text-sm space-y-2">
              {contactName && <p className="text-blue-100">{contactName}</p>}
              {contactPhone && (
                <p>
                  <a href={`tel:${contactPhone}`} className="hover:text-tangy-yellow transition-colors">
                    📱 {contactPhone}
                  </a>
                </p>
              )}
              {contactEmail && (
                <p>
                  <a href={`mailto:${contactEmail}`} className="hover:text-tangy-yellow transition-colors">
                    ✉️ {contactEmail}
                  </a>
                </p>
              )}
              {!contactPhone && !contactEmail && (
                <p className="text-blue-100">Complete the form above to generate your custom landing page.</p>
              )}
            </div>
          </div>

          {/* Column 3: Legal Links */}
          <div>
            <h3 className="text-lg font-bold font-proxima mb-4">Legal</h3>
            {hasDistributor ? (
              <ul className="space-y-2 font-montserrat text-sm">
                <li>
                  <a
                    href={`https://${ygyId}.youngevity.com/us_en/privacy-policy`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-tangy-yellow transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href={`https://${ygyId}.youngevity.com/us_en/terms-of-use`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-tangy-yellow transition-colors"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href={`https://${ygyId}.youngevity.com/us_en/youngevity-data-protection-policy`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-tangy-yellow transition-colors"
                  >
                    Data Protection Policy
                  </a>
                </li>
                <li>
                  <a
                    href={`https://${ygyId}.youngevity.com/us_en/customer-care#returns`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-tangy-yellow transition-colors"
                  >
                    Shipping & Returns
                  </a>
                </li>
              </ul>
            ) : (
              <p className="font-montserrat text-sm text-blue-100">
                Legal links populate once a landing page is generated.
              </p>
            )}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 pt-8 border-t border-blue-sky/40 text-center">
          {hasDistributor && (
            <p className="mb-2 font-montserrat text-sm text-blue-100">
              Independent YGY Distributor ID: {ygyId}
            </p>
          )}
          <p className="text-sm font-montserrat text-blue-100">
            &copy; {new Date().getFullYear()} 90 For Life. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
