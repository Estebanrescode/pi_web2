import React from 'react';

type Address = {
  id: number;
  street: string;
  city: string;
  country: string;
};

type Props = {
  addresses: Address[];
  selectedAddress: number | null;
  setSelectedAddress: (id: number | null) => void;
};

export default function ShippingAddressForm({ addresses, selectedAddress, setSelectedAddress }: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Dirección de envío</h2>
      {addresses.length > 0 ? (
        <select
          className="w-full border rounded p-2"
          value={selectedAddress ?? ''}
          onChange={e => setSelectedAddress(e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">Seleccione una dirección</option>
          {addresses.map((addr) => (
            <option key={addr.id} value={addr.id}>
              {addr.street}, {addr.city}, {addr.country}
            </option>
          ))}
        </select>
      ) : (
        <p className="text-sm text-gray-500">No tienes direcciones guardadas.</p>
      )}
    </div>
  );
}
