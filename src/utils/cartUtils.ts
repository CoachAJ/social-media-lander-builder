/**
 * Utility functions for handling shopping cart functionality
 */

// Global sponsor ID - set by the landing page generator
let globalSponsorId: string = "DISTRIBUTOR_ID";

export const setSponsorId = (id: string): void => {
  globalSponsorId = id;
};

export const getSponsorId = (): string => {
  return globalSponsorId;
};

/**
 * Creates a shopping cart URL with the specified products
 * @param products Array of product objects with code and quantity
 * @param sponsorId The sponsor ID to include in the cart URL (defaults to global)
 * @param redirectUrl Optional URL to redirect to after checkout
 * @returns Complete cart URL
 */
export const createCartUrl = (
  products: Array<{code: string, quantity: number}>,
  sponsorId?: string,
  redirectUrl: string = ""
): string => {
  const effectiveSponsorId = sponsorId || globalSponsorId;
  
  // Base URL for the cart
  const baseUrl = "https://ygy1.com/customer-checkout/v1.3/";
  
  // Add sponsor ID
  let url = `${baseUrl}?sponsorid=${effectiveSponsorId}`;
  
  // Add each product to the URL
  products.forEach((product, index) => {
    url += `&item-${index + 1}=${product.code}|${product.quantity}`;
  });
  
  // Add additional parameters
  url += `&destroy=1&ga_id=UA-20019232-44`;
  if (redirectUrl) {
    url += `&redirect=${encodeURIComponent(redirectUrl)}`;
  }
  
  return url;
};

/**
 * Adds a single product to cart and redirects to checkout
 * @param productCode The product code to add
 * @param quantity Quantity to add
 */
export const addToCart = (productCode: string, quantity: number = 1): void => {
  const url = createCartUrl([{code: productCode, quantity}]);
  window.open(url, '_blank');
};

/**
 * Adds multiple products to cart and redirects to checkout
 * @param products Array of product objects with code and quantity
 */
export const addMultipleToCart = (products: Array<{code: string, quantity: number}>): void => {
  const url = createCartUrl(products);
  window.open(url, '_blank');
};

/**
 * Product codes for Youngevity products
 */
export const PRODUCT_CODES = {
  // 90 For Life foundation products
  HEALTHY_BODY_START_PAK_ORIGINAL: "10245",
  HEALTHY_BODY_START_PAK_2_0: "10282",
  HEALTHY_BODY_START_PAK_2_5: "10282Q",
  BASIC_MIGHTY_90: "KT0001",
  // Targeted nutrition paks
  HEALTHY_BRAIN_AND_HEART_PAK_2_0: "10258",
  HEALTHY_BODY_DIGESTION_PAK_2_0: "10257",
  HEALTHY_BLOOD_SUGAR_PAK_2_0: "10254",
  // Individual products
  PLANT_DERIVED_MINERALS: "13203",
};

/**
 * Creates a Youngevity distributor site URL from a YGY ID
 * @param ygyId The distributor's YGY ID number
 * @returns The full youngevity.com URL for the distributor
 */
export const createYgySiteUrl = (ygyId: string): string => {
  return `https://${ygyId}.youngevity.com`;
};
