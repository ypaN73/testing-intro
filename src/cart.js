function addToCart(cart, product, n = 1) {
  if (!Number.isInteger(n) || n <= 0)
    throw new RangeError("количество должно быть положительным целым");
  const exist = cart.find((item) => item.id === product.id);
  const currentQty = exist ? exist.quantity : 0;
  if (currentQty + n > product.stock)
    throw new RangeError("недостаточно товара на складе");
  if (exist)
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + n } : item,
    );
  return [...cart, { ...product, quantity: n }];
}
function changeQuantity(cart, id, n) {
  if (!Number.isInteger(n) || n <= 0)
    throw new RangeError("количество должно быть положительным целым");
  const exist = cart.find((item) => item.id === id);
  if (!exist) return cart;
  if (n > exist.stock) throw new RangeError("недостаточно товара на складе");
  return cart.map((item) => (item.id === id ? { ...item, quantity: n } : item));
}
function removeFromCart(cart, id) {
  return cart.filter((item) => item.id !== id);
}
function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
function calculateOrderTotal(cart, code) {
  const subtotal = calculateCartSubtotal(cart);
  const discount =
    code === "SAVE10" && subtotal >= 20000 ? Math.round(subtotal * 0.1) : 0;
  const delivery = subtotal - discount >= 50000 ? 0 : 30000;
  const total = subtotal - discount + delivery;
  return {
    subtotal,
    discount,
    delivery,
    total,
  };
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
