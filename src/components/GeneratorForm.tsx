import React, { useState } from 'react';
import { GeneratorInput } from '../types';
import { setSponsorId } from '../utils/cartUtils';

interface GeneratorFormProps {
  onGenerate: (input: GeneratorInput) => void;
}

const GeneratorForm: React.FC<GeneratorFormProps> = ({ onGenerate }) => {
  const [formData, setFormData] = useState<GeneratorInput>({
    ygyId: '',
    transcript: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    healthEvaluationLink: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.ygyId.trim()) {
      newErrors.ygyId = 'YGY ID is required (used for shopping cart and external site link)';
    }
    if (!formData.transcript.trim()) {
      newErrors.transcript = 'Please paste a TikTok or social media video transcript';
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact name is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSponsorId(formData.ygyId.trim());
      onGenerate(formData);
    }
  };

  const inputClass =
    'w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-health-blue transition-colors font-montserrat';
  const errorClass = 'border-red-400 focus:ring-red-400';
  const labelClass =
    'block text-sm font-bold font-proxima text-gray-700 mb-1';

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-proxima text-health-blue mb-2">
          Landing Page Generator
        </h2>
        <p className="text-gray-600 font-montserrat">
          Paste your TikTok or social media transcript below. The tool will analyze it,
          generate compliant landing page copy, and create a full landing page with
          product recommendations and shopping cart integration.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* YGY ID */}
        <div>
          <label className={labelClass} htmlFor="ygyId">
            YGY Distributor ID <span className="text-glorious-sunset">*</span>
          </label>
          <input
            type="text"
            id="ygyId"
            name="ygyId"
            value={formData.ygyId}
            onChange={handleChange}
            placeholder="e.g., 102742703"
            className={`${inputClass} ${errors.ygyId ? errorClass : 'border-gray-300'}`}
          />
          {errors.ygyId && (
            <p className="text-red-500 text-sm mt-1 font-montserrat">{errors.ygyId}</p>
          )}
          <p className="text-gray-500 text-xs mt-1 font-montserrat">
            Used for the shopping cart sponsor ID and external link: {formData.ygyId || '[ID]'}.youngevity.com
          </p>
        </div>

        {/* Transcript */}
        <div>
          <label className={labelClass} htmlFor="transcript">
            TikTok / Social Media Transcript <span className="text-glorious-sunset">*</span>
          </label>
          <textarea
            id="transcript"
            name="transcript"
            value={formData.transcript}
            onChange={handleChange}
            placeholder="Paste the full transcript of the TikTok or social media video here..."
            rows={8}
            className={`${inputClass} ${errors.transcript ? errorClass : 'border-gray-300'} resize-y`}
          />
          {errors.transcript && (
            <p className="text-red-500 text-sm mt-1 font-montserrat">{errors.transcript}</p>
          )}
          <p className="text-gray-500 text-xs mt-1 font-montserrat">
            The transcript will be analyzed to identify the core health topic and generate targeted copy.
          </p>
        </div>

        {/* Contact Name */}
        <div>
          <label className={labelClass} htmlFor="contactName">
            Contact Name <span className="text-glorious-sunset">*</span>
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            placeholder="e.g., Brian"
            className={`${inputClass} ${errors.contactName ? errorClass : 'border-gray-300'}`}
          />
          {errors.contactName && (
            <p className="text-red-500 text-sm mt-1 font-montserrat">{errors.contactName}</p>
          )}
        </div>

        {/* Contact Phone */}
        <div>
          <label className={labelClass} htmlFor="contactPhone">
            Contact Phone (optional)
          </label>
          <input
            type="tel"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            placeholder="e.g., 555-123-4567"
            className={`${inputClass} border-gray-300`}
          />
        </div>

        {/* Contact Email */}
        <div>
          <label className={labelClass} htmlFor="contactEmail">
            Contact Email (optional)
          </label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            placeholder="e.g., contact@example.com"
            className={`${inputClass} border-gray-300`}
          />
        </div>

        {/* Health Evaluation Link */}
        <div>
          <label className={labelClass} htmlFor="healthEvaluationLink">
            Health Evaluation Link (optional)
          </label>
          <input
            type="url"
            id="healthEvaluationLink"
            name="healthEvaluationLink"
            value={formData.healthEvaluationLink}
            onChange={handleChange}
            placeholder="e.g., https://example.com/health-evaluation"
            className={`${inputClass} border-gray-300`}
          />
          <p className="text-gray-500 text-xs mt-1 font-montserrat">
            If provided, a prominent CTA button will link to this evaluation.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-glorious-sunset text-white font-proxima font-bold text-lg py-4 rounded-lg hover:bg-glorious-sunset/90 transition-colors shadow-lg"
        >
          Generate Landing Page
        </button>
      </form>
    </div>
  );
};

export default GeneratorForm;
