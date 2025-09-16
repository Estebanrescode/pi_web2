// src/components/ShippingAddressForm.tsx
import React, { useState } from 'react';

interface ShippingAddress {
  address1: string;
  city: string;
  state: string;
  zip: string;
}

interface ShippingAddressFormProps {
  initialData: ShippingAddress;
  onSubmit: (data: ShippingAddress) => void;
}

const ShippingAddressForm: React.FC<ShippingAddressFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<ShippingAddress>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validar que todos los campos estén completos
    if (!formData.address1 || !formData.city || !formData.state || !formData.zip) {
      alert('Por favor completa todos los campos');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="address1" className="block text-sm font-medium text-black">
          Dirección
        </label>
        <input
          type="text"
          id="address1"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
          placeholder="Calle y número"
        />
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-black">
          Ciudad
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
          placeholder="Ciudad"
        />
      </div>
      <div>
        <label htmlFor="state" className="block text-sm font-medium text-black">
          Estado
        </label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
          placeholder="Estado"
        />
      </div>
      <div>
        <label htmlFor="zip" className="block text-sm font-medium text-black">
          Código postal
        </label>
        <input
          type="text"
          id="zip"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
          placeholder="Código postal"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Continuar
      </button>
    </form>
  );
};

export default ShippingAddressForm;