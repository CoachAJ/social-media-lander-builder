import * as React from 'react';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  setCartOpen: (open: boolean) => void;
  /** 'tool' = the generator form page. 'landing' = the generated landing page preview. */
  variant?: 'tool' | 'landing';
  /** Shown as a call-to-action button when variant is 'landing' (e.g. "Create New Page"). */
  onReset?: () => void;
  /**
   * When true, hides all internal tool branding/navigation (wordmark, "New Landing
   * Page" button) and shows only the cart icon. Used when a visitor opens a
   * shared landing-page link directly, so they only see a clean storefront.
   */
  minimal?: boolean;
}

const Header: React.FC<HeaderProps> = ({ setCartOpen, variant = 'tool', onReset, minimal = false }) => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const isLanding = variant === 'landing';

  const CartButton = () => (
    <button
      onClick={() => setCartOpen(true)}
      aria-label="Open cart"
      className="relative p-2 text-gray-700 hover:text-health-blue transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 bg-glorious-sunset text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      )}
    </button>
  );

  if (minimal) {
    return (
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-end">
          <CartButton />
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-health-blue to-blue-sky flex items-center justify-center flex-shrink-0">
            <span className="text-white font-proxima font-extrabold text-lg">90</span>
          </div>
          <div className="leading-tight">
            <p className="font-proxima font-bold text-health-blue text-lg">For Life</p>
            <p className="font-montserrat text-xs text-gray-500 -mt-0.5">Landing Page Generator</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isLanding && onReset && (
            <button
              onClick={onReset}
              className="hidden sm:inline-block bg-health-blue text-white font-proxima font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-sky transition-colors"
            >
              ← New Landing Page
            </button>
          )}
          {isLanding && <CartButton />}
        </div>
      </div>
    </header>
  );
};

export default Header;
