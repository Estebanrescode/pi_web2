type Props = { total: number };

export default function OrderSummary({ total }: Props) {
  return (
    <div className="border rounded-lg p-4 bg-gray-50 mb-4">
      <h2 className="text-lg font-semibold mb-2">Resumen del pedido</h2>
      <p>Subtotal: ${total.toFixed(2)}</p>
      <p>Envío: $0.00</p>
      <hr className="my-2" />
      <p className="font-bold">Total: ${total.toFixed(2)}</p>
    </div>
  );
}
