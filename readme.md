# 90 For Life Section Template

This template contains the "90 For Life" section including the "Multiple Ways to Get the 90 Essential Nutrients" section and products for Daily with Doc & Becca landing pages.

## Contents

- Complete React components for the 90 For Life section
- Cart functionality for the products
- Required images and assets
- Brand-compliant styling using Tailwind CSS

## Brand Guidelines

### Colors
- Blue Sky: #3CAADF
- Health/Cosmos blue: #0068B3
- Tangy Yellow: #FFB81C
- Glorious Sunset: #F58A34
- Hot Chocolate: #784434

### Fonts
- Proxima Nova (primary font for headers and titles)
- Montserrat (secondary font for body text)

## How to Use This Template

1. **Copy the files to your project:**
   - Copy the entire `src` and `public` directories to your React project
   - If you already have these directories, merge the contents

2. **Update the distributor information:**
   - Open `src/utils/cartUtils.ts` and update the `sponsorId` parameter in the `createCartUrl` function
   - Open `src/components/Footer.tsx` and update the `distributorId` constant

3. **Import the component:**
   ```jsx
   import NinetyForLife from './path/to/NinetyForLife';
   
   // In your component or page:
   <NinetyForLife />
   ```

4. **Ensure CartContext is available:**
   Make sure the component is wrapped in the CartProvider:
   ```jsx
   import { CartProvider } from './contexts/CartContext';
   
   // In your app:
   <CartProvider>
     <YourApp />
   </CartProvider>
   ```

5. **Tailwind CSS Configuration:**
   Ensure your `tailwind.config.js` includes these custom colors:
   ```js
   module.exports = {
     theme: {
       extend: {
         colors: {
           'health-blue': '#0068B3',
           'blue-sky': '#3CAADF',
           'tangy-yellow': '#FFB81C',
           'glorious-sunset': '#F58A34',
           'hot-chocolate': '#784434',
         },
         fontFamily: {
           'proxima': ['Proxima Nova', 'sans-serif'],
           'montserrat': ['Montserrat', 'sans-serif'],
         },
       },
     },
   };
   ```

## Product Information

The template includes these 90 For Life products:

1. **Basic Mighty 90** - $70.95 (Product Code: KT0001)
2. **Healthy Body Start Pak™ - Original** - $142.95 (Product Code: 10245)
3. **Healthy Body Start Pak™ 2.0** - $146.95 (Product Code: 10282)
4. **Healthy Body Start Pak™ 2.5** - $146.95 (Product Code: 10282Q)

## Customization

You can customize the component by:

- Updating product information in `src/contexts/CartContext.tsx`
- Modifying the layout in `src/NinetyForLife.tsx`
- Changing images in the `public/images` directory

## Notes

- This template is designed to work with React and Tailwind CSS
- The cart functionality uses Youngevity's checkout system
- All links and product information should be verified before deployment
