import React from 'react';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  productCode: string;
  productName: string;
  productPrice: number;
  productImage: string;
  description: string;
  ygyId: string;
  onYgyNavigate: (url: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productCode,
  productName,
  productPrice,
  productImage,
  description,
  ygyId,
  onYgyNavigate,
}) => {
  const { addToCart } = useCart();

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault();
    if (ygyId) {
      const url = `https://${ygyId}.youngevity.com`;
      onYgyNavigate(url);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-105 flex flex-col">
      <div className="h-56 bg-gray-100 flex items-center justify-center">
        <img
          src={productImage}
          alt={productName}
          className="object-contain h-full w-full p-4"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-bold font-proxima text-health-blue leading-tight">
            {productName}
          </h4>
          <span className="text-lg font-bold font-proxima text-glorious-sunset whitespace-nowrap ml-2">
            ${productPrice.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-700 font-montserrat text-sm mb-4 flex-grow">{description}</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <button
            className="bg-glorious-sunset text-white hover:bg-glorious-sunset/90 font-proxima font-bold px-5 py-2 rounded-md text-center transition-colors"
            onClick={() => addToCart(productCode)}
          >
            Buy Now
          </button>
          {ygyId && (
            <a
              href="#"
              className="border border-health-blue text-health-blue hover:bg-health-blue/10 font-proxima font-bold px-5 py-2 rounded-md text-center transition-colors"
              onClick={handleLearnMore}
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
