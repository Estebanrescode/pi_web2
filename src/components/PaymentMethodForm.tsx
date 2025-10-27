import React from 'react';

type PaymentMethod = { id: number; name: string };

type Props = {
  paymentMethods: PaymentMethod[];
  selectedPayment: number | null;
  setSelectedPayment: (id: number | null) => void;
};

export default function PaymentMethodForm({ paymentMethods, selectedPayment, setSelectedPayment }: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Método de pago</h2>
      {paymentMethods.length > 0 ? (
        <select
          className="w-full border rounded p-2"
          value={selectedPayment ?? ''}
          onChange={e => setSelectedPayment(e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">Seleccione un método</option>
          {paymentMethods.map((pm) => (
            <option key={pm.id} value={pm.id}>
              {pm.name}
            </option>
          ))}
        </select>
      ) : (
        <p className="text-sm text-gray-500">No hay métodos de pago activos.</p>
      )}
    </div>
  );
}
