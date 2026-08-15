import React from 'react';
import { useCart, CartItem } from '../contexts/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, checkout } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    checkout();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-6 sm:px-6 bg-gradient-to-r from-[#0068B3] to-[#3CAADF]">
              <h2 className="text-xl font-bold text-white flex items-center">
                Your Shopping Cart
              </h2>
              <button
                type="button"
                className="text-white hover:text-gray-200"
                onClick={onClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 px-4 py-6 sm:px-6 overflow-auto">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 mb-4">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-[#F58A34] text-white rounded-md hover:bg-[#FFB81C] transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item: CartItem) => (
                    <li key={item.product.id} className="py-6 flex">
                      {/* Product image */}
                      <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden border border-gray-200">
                        <img
                          src={item.product.image || '/images/basic-mighty-90.png'} 
                          alt={item.product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Product details */}
                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm font-medium text-gray-900">
                              {item.product.name}
                            </h3>
                            <p className="ml-4 text-sm font-medium text-[#0068B3]">
                              ${item.product.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex-1 flex items-end justify-between">
                          {/* Quantity controls */}
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              {/* Minus icon */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </button>
                            <span className="px-2 py-1 text-gray-900 min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              {/* Plus icon */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </button>
                          </div>

                          {/* Remove button */}
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-sm font-medium text-[#F58A34] hover:text-[#784434]"
                          >
                            Remove
                          </button>
                        </div>

                        {/* Item subtotal */}
                        <p className="mt-1 text-sm text-gray-500">
                          Subtotal: ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer with checkout */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>${getCartTotal().toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <button
                    onClick={handleCheckout}
                    className="flex justify-center w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#0068B3] hover:bg-[#3CAADF] transition-colors"
                  >
                    Checkout
                  </button>
                </div>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                  <p>
                    or{' '}
                    <button
                      type="button"
                      className="font-medium text-[#F58A34] hover:text-[#FFB81C]"
                      onClick={onClose}
                    >
                      Continue Shopping
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
