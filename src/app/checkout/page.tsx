"use client";

import { useCart } from "@/context/cartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartItems, total } = useCart();

  // 🏠 Estado para la dirección
  const [direccion, setDireccion] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
  });

  // 💳 Estado para método de pago
  const [metodoPago, setMetodoPago] = useState("tarjeta");

  const envio = total > 0 ? 10000 : 0;
  const totalFinal = total + envio;

  const handleConfirmar = () => {
    if (!direccion.nombre || !direccion.direccion || !direccion.ciudad) {
      alert("Por favor completa la dirección de envío");
      return;
    }
    alert(`✅ Pedido confirmado. Total: $${totalFinal.toFixed(2)}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* ===================== IZQUIERDA ===================== */}
      <div>
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        {/* 🏠 FORMULARIO DIRECCIÓN DE ENVÍO */}
        <div className="mb-8 border rounded-lg p-5 shadow-sm">
          <h2 className="font-semibold text-lg mb-4">Dirección de envío</h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Nombre completo"
              value={direccion.nombre}
              onChange={(e) =>
                setDireccion({ ...direccion, nombre: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="text"
              placeholder="Dirección"
              value={direccion.direccion}
              onChange={(e) =>
                setDireccion({ ...direccion, direccion: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="text"
              placeholder="Ciudad"
              value={direccion.ciudad}
              onChange={(e) =>
                setDireccion({ ...direccion, ciudad: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="text"
              placeholder="Código postal"
              value={direccion.codigoPostal}
              onChange={(e) =>
                setDireccion({ ...direccion, codigoPostal: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>
        </div>

        {/* 💳 FORMULARIO MÉTODO DE PAGO */}
        <div className="border rounded-lg p-5 shadow-sm">
          <h2 className="font-semibold text-lg mb-4">Método de pago</h2>

          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="pago"
                value="tarjeta"
                checked={metodoPago === "tarjeta"}
                onChange={() => setMetodoPago("tarjeta")}
              />
              <span>Tarjeta de crédito / débito</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="pago"
                value="efectivo"
                checked={metodoPago === "efectivo"}
                onChange={() => setMetodoPago("efectivo")}
              />
              <span>Pago en efectivo</span>
            </label>
          </div>

          {metodoPago === "tarjeta" && (
            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Número de tarjeta"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="MM/AA"
                  className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ===================== DERECHA ===================== */}
      <div>
        {/* Resumen del carrito */}
        <div className="border rounded-lg p-4 mb-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-3 flex justify-between">
            <span>Resumen del carrito</span>
            <span>Total: ${total.toFixed(2)}</span>
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-sm">Tu carrito está vacío 🛒</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-2"
                >
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Resumen del pedido */}
        <div className="border rounded-lg p-4 bg-gray-50 shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Resumen del pedido</h2>
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Envío:</span>
            <span>${envio.toFixed(2)}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>${totalFinal.toFixed(2)}</span>
          </div>
        </div>

        <button
          className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition"
          onClick={handleConfirmar}
        >
          Confirmar pedido
        </button>
      </div>
    </div>
  );
}
