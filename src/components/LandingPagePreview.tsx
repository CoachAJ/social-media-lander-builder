import React, { useState, useCallback, useRef } from 'react';
import { GeneratorInput, GeneratedCopy } from '../types';
import { generateCopy, getFdaDisclaimer, PRODUCT_DESCRIPTIONS } from '../utils/copyGenerator';
import { PRODUCTS } from '../contexts/CartContext';
import { buildShareableUrl } from '../utils/shareLink';
import { downloadStandaloneHtml } from '../utils/exportHtml';
import ProductCard from './ProductCard';
import YGYPopup from './YGYPopup';
import FloatingContactWidget from './FloatingContactWidget';

interface LandingPagePreviewProps {
  input: GeneratorInput;
  /** Hides the internal Copy Link / Download HTML toolbar (used for visitors on a shared link). */
  hideToolbar?: boolean;
}

const LandingPagePreview: React.FC<LandingPagePreviewProps> = ({ input, hideToolbar = false }) => {
  // Show the static, topic-templated copy immediately (no blank/loading flash),
  // then swap in AI-personalized copy from Gemini once it resolves. Falls back
  // silently to the static version if the AI call fails or isn't configured.
  const [copy, setCopy] = useState<GeneratedCopy>(() => generateCopy(input));
  const [ygyPopupNavigate, setYgyPopupNavigate] = useState<((url: string) => void) | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    generateCopyWithAI(input).then((aiCopy) => {
      if (!cancelled) setCopy(aiCopy);
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const handleYgyNavigate = useCallback((fn: (url: string) => void) => {
    setYgyPopupNavigate(() => fn);
  }, []);

  const triggerYgyPopup = (url: string) => {
    if (ygyPopupNavigate) {
      ygyPopupNavigate(url);
    }
  };

  const handleCopyLink = async () => {
    const url = buildShareableUrl(input);
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt('Copy this link:', url);
    }
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleDownload = () => {
    if (contentRef.current) {
      const filename = `landing-page-${input.ygyId || 'draft'}.html`;
      downloadStandaloneHtml(contentRef.current, filename);
    }
  };

  const recommendedProducts = copy.recommendedProducts.map((code) => ({
    code,
    product: PRODUCTS[code],
    description: copy.productDescriptions[code] || PRODUCT_DESCRIPTIONS[code]?.description || '',
  })).filter((p) => p.product);

  const ygySiteUrl = `https://${input.ygyId}.youngevity.com`;

  return (
    <>
      {/* Share / Export toolbar - internal use only, hidden for visitors on a shared link */}
      {!hideToolbar && (
        <div className="bg-white border-b border-gray-200 py-3 px-4">
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleCopyLink}
              className="bg-health-blue text-white font-proxima font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-sky transition-colors"
            >
              {linkCopied ? '✓ Link Copied!' : '🔗 Copy Shareable Link'}
            </button>
            <button
              onClick={handleDownload}
              className="bg-gray-100 text-gray-700 font-proxima font-semibold text-sm px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              ⬇ Download as HTML
            </button>
            <span className="text-xs font-montserrat text-gray-500 max-w-md text-center">
              Deployed once on Netlify, this exact page stays live at the copied link — no re-deploy needed per TikTok.
            </span>
          </div>
        </div>
      )}

      <div ref={contentRef} className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-health-blue to-blue-sky text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-proxima font-bold text-3xl md:text-5xl mb-6 leading-tight">
            {copy.headline}
          </h1>
          <h2 className="text-xl md:text-2xl font-montserrat font-medium opacity-95 leading-relaxed">
            {copy.subHeadline}
          </h2>
        </div>
      </section>

      {/* Topic Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold font-proxima text-health-blue mb-6">
            {copy.topicSectionTitle}
          </h3>
          <div className="space-y-4">
            {copy.topicSectionBody.map((paragraph, i) => (
              <p key={i} className="text-lg font-montserrat text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Body Starving Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold font-proxima text-glorious-sunset mb-6">
            {copy.bodyStarvingTitle}
          </h3>
          <div className="space-y-4">
            {copy.bodyStarvingBody.map((paragraph, i) => (
              <p key={i} className="text-lg font-montserrat text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white" id="products">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-3xl font-bold font-proxima text-health-blue mb-4 text-center">
            The Foundation for Nutritional Saturation
          </h3>
          <p className="text-lg font-montserrat text-gray-600 mb-10 text-center max-w-3xl mx-auto">
            {copy.foundationIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {recommendedProducts.map(({ code, product, description }) => (
              <ProductCard
                key={code}
                productCode={code}
                productName={product.name}
                productPrice={product.price}
                productImage={product.image || '/images/basic-mighty-90.png'}
                description={description}
                ygyId={input.ygyId}
                onYgyNavigate={triggerYgyPopup}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-glorious-sunset to-tangy-yellow text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-bold font-proxima mb-4">
            {copy.ctaTitle}
          </h3>
          <p className="text-xl font-montserrat mb-8 opacity-95">
            {copy.ctaBody}
          </p>

          {input.healthEvaluationLink && (
            <a
              href={input.healthEvaluationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-glorious-sunset font-proxima font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-colors mb-8"
            >
              Take the Free Comprehensive Health Evaluation →
            </a>
          )}

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-4">
            <p className="text-lg font-montserrat mb-4">
              Once you complete your evaluation, or if you have immediate questions about
              which protocol is right for you, reach out directly:
            </p>
            <p className="text-xl font-proxima font-bold mb-2">
              Contact {input.contactName}:
            </p>
            {input.contactPhone && (
              <p className="font-montserrat text-lg mb-1">
                📱 Text:{' '}
                <a href={`tel:${input.contactPhone}`} className="underline hover:no-underline">
                  {input.contactPhone}
                </a>
              </p>
            )}
            {input.contactEmail && (
              <p className="font-montserrat text-lg mb-1">
                ✉️ Email:{' '}
                <a href={`mailto:${input.contactEmail}`} className="underline hover:no-underline">
                  {input.contactEmail}
                </a>
              </p>
            )}
            <div className="mt-4">
              <button
                onClick={() => triggerYgyPopup(ygySiteUrl)}
                className="inline-block bg-white/20 hover:bg-white/30 text-white font-proxima font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Visit Our Youngevity Store
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm font-montserrat italic leading-relaxed">
            {getFdaDisclaimer()}
          </p>
        </div>
      </section>

      {/* YGY Popup */}
      <YGYPopup ygyId={input.ygyId} onNavigate={handleYgyNavigate} />

      {/* Floating lead-capture widget — visible to visitors on shared links too, so leads
          can reach out directly, and the Netlify email notification includes the
          distributor's ID/contact info so you know who to route the lead to. */}
      <FloatingContactWidget
        distributorYgyId={input.ygyId}
        distributorName={input.contactName}
        distributorPhone={input.contactPhone}
        distributorEmail={input.contactEmail}
      />
      </div>
    </>
  );
};

export default LandingPagePreview;
