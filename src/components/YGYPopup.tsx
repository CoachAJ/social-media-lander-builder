import React, { useState, useEffect } from 'react';

interface YGYPopupProps {
  ygyId: string;
  /** Called once on mount with a function the parent can invoke to trigger the popup. */
  onNavigate: (trigger: (url: string) => void) => void;
}

const YGYPopup: React.FC<YGYPopupProps> = ({ onNavigate }) => {
  const [show, setShow] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string>('');

  const handleNavigate = (url: string) => {
    setPendingUrl(url);
    setShow(true);
  };

  useEffect(() => {
    onNavigate(handleNavigate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const proceed = () => {
    setShow(false);
    window.open(pendingUrl, '_blank');
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setShow(false)}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-health-blue/10 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-health-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold font-proxima text-health-blue mb-2">
            Wait! Want Wholesale Pricing?
          </h3>
          <p className="text-gray-700 font-montserrat mb-6">
            You're about to visit our Youngevity store. To get <strong>wholesale pricing</strong>,
            look for the <strong>"Join Us"</strong> button at the top of the page and sign up
            as a preferred customer. It's free to join and saves you up to 30%!
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button
            onClick={proceed}
            className="w-full bg-glorious-sunset text-white font-proxima font-bold py-3 rounded-lg hover:bg-glorious-sunset/90 transition-colors"
          >
            Got it — Take Me to the Store
          </button>
          <button
            onClick={() => setShow(false)}
            className="w-full text-gray-500 font-montserrat py-2 hover:text-gray-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default YGYPopup;
