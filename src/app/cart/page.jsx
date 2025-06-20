'use client';
import Header from '@/components/common/header';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="p-6 bg-blue-200 min-h-screen text-black">
      <h1 className="text-3xl text-blue-900 font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg">No items in cart.</p>
      ) : (
        <>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <li key={item.id} className="bg-blue-400 p-4 rounded-md flex flex-col sm:flex-row gap-4 items-center justify-between shadow-md">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-sm mb-1">₹{item.price}</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity || 1}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="border rounded px-2 py-1 w-20 text-center"
                  />
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md mt-2 sm:mt-0"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-bold text-center text-blue-900">
            Total: ₹{totalPrice}
          </h3>
        </>
      )}
    </div>
  );
}
