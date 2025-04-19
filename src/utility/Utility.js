import toast from "react-hot-toast";

export const getFavorite = () => {
  const favorite = localStorage.getItem("favorite");
  if (favorite) return JSON.parse(favorite);
  return [];
};

export const addFavorite = (phone) => {
  const favorite = getFavorite();
  const isExit = favorite.find((p) => p.id === phone.id);
  if (isExit) return toast.error("Phone Already Added");
  favorite.push(phone);
  toast.success('Phone Added Successfully!!!')
  localStorage.setItem("favorite", JSON.stringify(favorite));
};
export const removeFavorite = (id) => {
  const favorite = getFavorite();
  const remainingFavorite = favorite.filter((phone) => phone.id !== id);
  localStorage.setItem("favorite", JSON.stringify(remainingFavorite));
  toast.remove("Item Successfully Remove")
};





export const getCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) return JSON.parse(cart);
  return [];
};

export const addToCart = (phone) => {
  const cart = getCart();
  const isExit = cart.find((p) => p.id === phone.id);
  if (isExit) return toast.error("Phone Already Added");
  cart.push(phone);
  toast.success('Phone Added Successfully!!!')

  localStorage.setItem("cart", JSON.stringify(cart));
};
export const removeCart = (id) => {
  const cart = getCart();
  const remainingCart = cart.filter((phone) => phone.id !== id);
  localStorage.setItem("cart", JSON.stringify(remainingCart));
  toast.remove("Item Successfully Remove")

};
