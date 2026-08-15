import * as React from 'react';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import GeneratorForm from './components/GeneratorForm';
import LandingPagePreview from './components/LandingPagePreview';
import { GeneratorInput } from './types';

/**
 * Main App component - Landing Page Generator Tool
 * Users input a TikTok transcript + contact info + YGY ID,
 * and the tool generates a compliant, high-converting landing page.
 */
function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [generatedInput, setGeneratedInput] = React.useState<GeneratorInput | null>(null);

  const handleGenerate = (input: GeneratorInput) => {
    setGeneratedInput(input);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setGeneratedInput(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header
          setCartOpen={setCartOpen}
          variant={generatedInput ? 'landing' : 'tool'}
          onReset={generatedInput ? handleReset : undefined}
        />

        <main role="main" className="flex-grow">
          {generatedInput ? (
            <div className="relative">
              {/* Mobile-only reset button (desktop version lives in the header) */}
              <div className="sm:hidden bg-white border-b border-gray-200 py-2 px-4">
                <button
                  onClick={handleReset}
                  className="w-full bg-health-blue text-white font-proxima font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-sky transition-colors"
                >
                  ← New Landing Page
                </button>
              </div>
              <LandingPagePreview input={generatedInput} />
            </div>
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
