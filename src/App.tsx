import * as React from 'react';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import GeneratorForm from './components/GeneratorForm';
import LandingPagePreview from './components/LandingPagePreview';
import { GeneratorInput, GeneratedCopy } from './types';
import { setSponsorId } from './utils/cartUtils';
import { decodeSharedPage, buildShareableUrl } from './utils/shareLink';

/**
 * Main App component - Landing Page Generator Tool
 * Users input a TikTok transcript + contact info + YGY ID,
 * and the tool generates a compliant, high-converting landing page.
 *
 * Generated pages are shareable via a `?page=` URL parameter, so a single
 * Netlify deployment can serve unlimited unique landing pages without
 * redeploying per TikTok/video.
 */
function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [generatedInput, setGeneratedInput] = React.useState<GeneratorInput | null>(null);
  // The frozen copy for the current page, if any. Set either by decoding a
  // shared link that already froze it, or once the distributor's own AI
  // generation resolves — at which point the URL is updated to embed it so
  // every future visitor (and the distributor's own copied link) sees the
  // exact same page instead of triggering a brand-new AI generation.
  const [frozenCopy, setFrozenCopy] = React.useState<GeneratedCopy | undefined>(undefined);
  // True when the page was opened directly via a shared `?page=` link (i.e. an end
  // customer, not the distributor previewing inside the generator tool). Used to hide
  // internal tool branding/navigation and the copy-link/download-html toolbar.
  const [isSharedView, setIsSharedView] = React.useState(false);

  // On first load, check if a shareable link (?page=...) was opened directly.
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    if (pageParam) {
      const decoded = decodeSharedPage(pageParam);
      if (decoded) {
        setSponsorId(decoded.input.ygyId);
        setGeneratedInput(decoded.input);
        setFrozenCopy(decoded.copy);
        setIsSharedView(true);
      }
    }
  }, []);

  const handleGenerate = (input: GeneratorInput) => {
    setGeneratedInput(input);
    setFrozenCopy(undefined);
    setIsSharedView(false);
    const shareUrl = buildShareableUrl(input);
    window.history.pushState({}, '', shareUrl);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Called once the AI (or fallback static) copy resolves for the distributor's
  // own preview. Freezes it into the URL so the "Copy Shareable Link" button
  // (and this exact browser tab, on reload) always replays the identical copy.
  const handleCopyGenerated = (copy: GeneratedCopy) => {
    setFrozenCopy(copy);
    if (generatedInput) {
      const shareUrl = buildShareableUrl(generatedInput, copy);
      window.history.replaceState({}, '', shareUrl);
    }
  };

  const handleReset = () => {
    setGeneratedInput(null);
    setFrozenCopy(undefined);
    setIsSharedView(false);
    window.history.pushState({}, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header
          setCartOpen={setCartOpen}
          variant={generatedInput ? 'landing' : 'tool'}
          onReset={generatedInput ? handleReset : undefined}
          minimal={isSharedView}
        />

        <main role="main" className="flex-grow">
          {generatedInput ? (
            <LandingPagePreview
              input={generatedInput}
              hideToolbar={isSharedView}
              initialCopy={frozenCopy}
              onCopyGenerated={handleCopyGenerated}
            />
          ) : (
            <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-white">
              <div className="container mx-auto px-4">
                {/* Intro */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                  <span className="inline-block bg-health-blue/10 text-health-blue font-proxima font-semibold text-xs tracking-wide uppercase px-3 py-1 rounded-full mb-4">
                    90 For Life · TikTok to Landing Page
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-proxima text-gray-900 mb-5 leading-tight">
                    Turn Any <span className="text-health-blue">TikTok</span> Into a
                    <span className="text-glorious-sunset"> Landing Page</span>
                  </h1>
                  <p className="text-lg font-montserrat text-gray-600 leading-relaxed">
                    Paste a transcript. Get compliant, high-converting copy grounded in Dr. Wallach's
                    90 Essential Nutrients and Pharmacist Ben Fuchs' cellular health philosophy — complete
                    with product recommendations, shopping cart, and your Youngevity links.
                  </p>
                </div>

                {/* Generator Form */}
                <GeneratorForm onGenerate={handleGenerate} />

                {/* How it works */}
                <div className="mt-20 max-w-4xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold font-proxima text-gray-900 mb-10 text-center">
                    How It Works
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center bg-white rounded-2xl shadow-soft p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-health-blue/10 rounded-full mb-4">
                        <span className="text-xl font-bold text-health-blue">1</span>
                      </div>
                      <h3 className="font-proxima font-bold text-lg mb-2 text-gray-900">Paste Transcript</h3>
                      <p className="text-gray-600 font-montserrat text-sm leading-relaxed">
                        Paste your TikTok or social media video transcript. The tool analyzes it to identify the core health topic.
                      </p>
                    </div>
                    <div className="text-center bg-white rounded-2xl shadow-soft p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-glorious-sunset/10 rounded-full mb-4">
                        <span className="text-xl font-bold text-glorious-sunset">2</span>
                      </div>
                      <h3 className="font-proxima font-bold text-lg mb-2 text-gray-900">Generate Copy</h3>
                      <p className="text-gray-600 font-montserrat text-sm leading-relaxed">
                        Compliant, high-converting copy is generated using Dr. Wallach's and Pharmacist Ben's teachings.
                      </p>
                    </div>
                    <div className="text-center bg-white rounded-2xl shadow-soft p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-tangy-yellow/10 rounded-full mb-4">
                        <span className="text-xl font-bold text-tangy-yellow">3</span>
                      </div>
                      <h3 className="font-proxima font-bold text-lg mb-2 text-gray-900">Get Landing Page</h3>
                      <p className="text-gray-600 font-montserrat text-sm leading-relaxed">
                        A complete landing page with products, cart integration, YGY links, and FDA disclaimer is generated.
                        Copy the shareable link or download the standalone HTML — no redeploy needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>

        <Footer
          ygyId={generatedInput?.ygyId}
          contactName={generatedInput?.contactName}
          contactPhone={generatedInput?.contactPhone}
          contactEmail={generatedInput?.contactEmail}
        />
        <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;
