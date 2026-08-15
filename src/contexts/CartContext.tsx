import React from 'react';
import { PRODUCT_CODES, createCartUrl } from '../utils/cartUtils';

// Product information type
export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
}

// Cart item type
export interface CartItem {
  product: Product;
  quantity: number;
}

// Product database for Youngevity products
export const PRODUCTS: Record<string, Product> = {
  // Foundation products
  [PRODUCT_CODES.BASIC_MIGHTY_90]: {
    id: PRODUCT_CODES.BASIC_MIGHTY_90,
    name: 'Basic Mighty 90',
    price: 70.95,
    image: '/images/basic-mighty-90.png'
  },
  [PRODUCT_CODES.HEALTHY_BODY_START_PAK_ORIGINAL]: {
    id: PRODUCT_CODES.HEALTHY_BODY_START_PAK_ORIGINAL,
    name: 'Healthy Body Start Pak™ - Original',
    price: 142.95,
    image: '/images/healthy-body-pak-original.png'
  },
  [PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0]: {
    id: PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
    name: 'Healthy Body Start Pak™ 2.0',
    price: 146.95,
    image: '/images/healthy-body-pak-2.0.png'
  },
  [PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_5]: {
    id: PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_5,
    name: 'Healthy Body Start Pak™ 2.5',
    price: 146.95,
    image: '/images/healthy-body-pak-2.5.png'
  },
  // Targeted nutrition paks
  [PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0]: {
    id: PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0,
    name: 'Healthy Brain and Heart Pak™ 2.0',
    price: 219.95,
    image: '/images/healthy-body-pak-2.0.png'
  },
  [PRODUCT_CODES.HEALTHY_BODY_DIGESTION_PAK_2_0]: {
    id: PRODUCT_CODES.HEALTHY_BODY_DIGESTION_PAK_2_0,
    name: 'Healthy Body Digestion Pak™ 2.0',
    price: 202.95,
    image: '/images/healthy-body-pak-2.0.png'
  },
  [PRODUCT_CODES.HEALTHY_BLOOD_SUGAR_PAK_2_0]: {
    id: PRODUCT_CODES.HEALTHY_BLOOD_SUGAR_PAK_2_0,
    name: 'Healthy Blood Sugar Pak™ 2.0',
    price: 173.95,
    image: '/images/healthy-body-pak-2.0.png'
  },
  // Individual products
  [PRODUCT_CODES.PLANT_DERIVED_MINERALS]: {
    id: PRODUCT_CODES.PLANT_DERIVED_MINERALS,
    name: 'Plant Derived Minerals™',
    price: 23.95,
    image: '/images/basic-mighty-90.png'
  },
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  checkout: () => void;
}

const CartContext = React.createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  // Add item to cart
  const addToCart = (productId: string, quantity: number = 1) => {
    const product = PRODUCTS[productId];
    if (!product) return;

    setCartItems((prevItems: CartItem[]) => {
      const existingItem = prevItems.find((item: CartItem) => item.product.id === productId);
      
      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map((item: CartItem) => 
          item.product.id === productId 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        // Add new item
        return [...prevItems, { product, quantity }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId: string) => {
    setCartItems((prevItems: CartItem[]) => 
      prevItems.filter((item: CartItem) => item.product.id !== productId)
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Update quantity of an item
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems: CartItem[]) =>
      prevItems.map((item: CartItem) =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Calculate total price
  const getCartTotal = (): number => {
    return cartItems.reduce(
      (total: number, item: CartItem) => total + item.product.price * item.quantity,
      0
    );
  };

  // Get total number of items
  const getCartCount = (): number => {
    return cartItems.reduce(
      (count: number, item: CartItem) => count + item.quantity,
      0
    );
  };

  // Process checkout - creates URL with all items and opens in new tab
  const checkout = () => {
    if (cartItems.length === 0) return;
    
    const items = cartItems.map((item: CartItem) => ({
      code: item.product.id,
      quantity: item.quantity
    }));
    
    const checkoutUrl = createCartUrl(items);
    window.open(checkoutUrl, '_blank');
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    updateQuantity,
    getCartTotal,
    getCartCount,
    checkout
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use the cart context
export const useCart = (): CartContextType => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
