import * as React from 'react';
import { addMultipleToCart, PRODUCT_CODES } from './utils/cartUtils';
import { useCart } from './contexts/CartContext';

/**
 * NinetyForLife Component
 * 
 * This component renders the "90 FOR LIFE" section including the 
 * "Multiple Ways to Get the 90 Essential Nutrients" section and products.
 */
const NinetyForLife: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold font-proxima mb-4">
            <span className="text-health-blue">90 </span>
            <span className="text-glorious-sunset">FOR LIFE</span>
          </h2>
          <p className="text-xl font-montserrat text-gray-700 max-w-3xl mx-auto">
            Your Foundation for Optimal Health
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <p className="text-gray-700 font-montserrat mb-6">
              True health begins when we give our body the nutrients it needs to thrive. However, so many of our diets lack the basic nutritional needs to survive; much less thrive. Find out why you may not be getting the nutrients you need to maintain your health and what specific blend of vitamins, minerals, amino acids, and essential fatty acids can help you live your healthiest.
            </p>

            <div className="aspect-video w-full mb-6">
              <iframe 
                src='//players.brightcove.net/5975371686001/epPd797Th_default/index.html?videoId=6280345049001' 
                allowFullScreen 
                frameBorder="0"
                className="w-full h-full rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-proxima mb-4">THE PROBLEM</h3>
              <p className="text-lg font-bold font-montserrat text-glorious-sunset mb-3">
                You don't get the nutrition you need from food alone.
              </p>
              <p className="text-gray-700 font-montserrat">
                Even if you think you eat well, get enough sleep, exercise and live a healthy, active lifestyle, is it enough? Surprisingly, the Centers for Disease Control show 76 percent of adults do not meet fruit intake recommendations, and 87 percent do not meet vegetable intake recommendations.
              </p>
              <p className="text-gray-700 font-montserrat mt-4">
                Our consumption of sugar, fat, and carbohydrates has never been higher while depleted soil, crop changes and seasonal inconsistencies are yielding less nutrient-dense food. Our bodies are desperate for nutrients but can't solely rely on our food sources to deliver them anymore. This is why Youngevity's 90 For Life™ system was created.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-proxima mb-4">THE SOLUTION</h3>
              <p className="text-lg font-bold font-montserrat text-glorious-sunset mb-3">
                90 Essential Nutrients
              </p>
              <p className="text-gray-700 font-montserrat">
                Youngevity has taken the 90 For Life nutrients needed to thrive and created the Healthy Body Start Pak. This optimal mix of 60 minerals, 16 vitamins, 12 amino acids, and a powerful blend essential fatty acids has been molded from decades of research to deliver advanced nutrition. 90 carefully selected nutrients your body needs to thrive and feel its best.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold font-proxima text-center text-health-blue mb-8">Multiple Ways to Get the 90 Essential Nutrients</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Basic Mighty 90 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-105">
            <div className="h-64 bg-gray-100 flex items-center justify-center">
              <img 
                src="/images/basic-mighty-90.png" 
                alt="Basic Mighty 90" 
                className="object-contain h-full w-full p-4"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-bold font-proxima text-health-blue">Basic Mighty 90</h4>
                <span className="text-xl font-bold font-proxima text-glorious-sunset">$70.95</span>
              </div>
              <p className="text-gray-700 font-montserrat mb-4">The foundational supplement system</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="#" 
                  className="bg-glorious-sunset text-white hover:bg-glorious-sunset/90 font-proxima font-bold px-5 py-2 rounded-md text-center transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(PRODUCT_CODES.BASIC_MIGHTY_90);
                  }}
                >
                  Buy Now
                </a>
                <a 
                  href="https://dailywithdoc.com" 
                  className="border border-health-blue text-health-blue hover:bg-health-blue/10 font-proxima font-bold px-5 py-2 rounded-md text-center transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          
          {/* Healthy Body Start Pak Original */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-105">
            <div className="h-64 bg-gray-100 flex items-center justify-center">
              <img 
                src="/images/healthy-body-pak-original.png" 
                alt="Healthy Body Start Pak Original" 
                className="object-contain h-full w-full p-4"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-bold font-proxima text-health-blue">Healthy Body Start Pak™ - Original</h4>
                <span className="text-xl font-bold font-proxima text-glorious-sunset">$142.95</span>
              </div>
              <p className="text-gray-700 font-montserrat mb-4">The foundational supplement system</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="#" 
                  className="bg-glorious-sunset text-white hover:bg-glorious-sunset/90 font-proxima font-bold px-5 py-2 rounded-md text-center transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(PRODUCT_CODES.HEALTHY_BODY_START_PAK_ORIGINAL);
                  }}
                >
                  Buy Now
                </a>
                <a 
                  href="https://dailywithdoc.com" 
                  className="border border-health-blue text-health-blue hover:bg-health-blue/10 font-proxima font-bold px-5 py-2 rounded-md text-center transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          
          {/* Healthy Body Start Pak 2.0 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-105">
            <div className="h-64 bg-gray-100 flex items-center justify-center">
              <img 
                src="/images/healthy-body-pak-2.0.png" 
                alt="Healthy Body Start Pak 2.0" 
                className="object-contain h-full w-full p-4"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-bold font-proxima text-health-blue">Healthy Body Start Pak™ 2.0</h4>
                <span className="text-xl font-bold font-proxima text-glorious-sunset">$146.95</span>
              </div>
              <p className="text-gray-700 font-montserrat mb-4">Beyond Osteo-Fx Liquid</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="#" 
                  className="bg-glorious-sunset text-white hover:bg-glorious-sunset/90 font-proxima font-bold px-5 py-2 rounded-md text-center transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0);
                  }}
                >
                  Buy Now
                </a>
                <a 
                  href="https://dailywithdoc.com" 
                  className="border border-health-blue text-health-blue hover:bg-health-blue/10 font-proxima font-bold px-5 py-2 rounded-md text-center transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          
          {/* Healthy Body Start Pak 2.5 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-105">
            <div className="h-64 bg-gray-100 flex items-center justify-center">
              <img 
                src="/images/healthy-body-pak-2.5.png" 
                alt="Healthy Body Start Pak 2.5" 
                className="object-contain h-full w-full p-4"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-bold font-proxima text-health-blue">Healthy Body Start Pak™ 2.5</h4>
                <span className="text-xl font-bold font-proxima text-glorious-sunset">$146.95</span>
              </div>
              <p className="text-gray-700 font-montserrat mb-4">Beyond Osteo-Fx Liquid</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="#" 
                  className="bg-glorious-sunset text-white hover:bg-glorious-sunset/90 font-proxima font-bold px-5 py-2 rounded-md text-center transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_5);
                  }}
                >
                  Buy Now
                </a>
                <a 
                  href="https://dailywithdoc.com" 
                  className="border border-health-blue text-health-blue hover:bg-health-blue/10 font-proxima font-bold px-5 py-2 rounded-md text-center transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NinetyForLife;
