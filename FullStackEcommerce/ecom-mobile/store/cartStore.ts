import { create } from 'zustand';

export const useCart = create((set) => ({
    items: [],
    wishlist: [],

    addProduct: (product) =>
        set((state) => ({
            items: [...state.items, { product, quantity: 1 }],
        })),
               

     // Add a product to the wishlist
  addToWishlist: (product) =>
    set((state) => {
      // Avoid duplicates in the wishlist
      if (state.wishlist.some((item) => item.id === product.id)) {
        return state; // If already in wishlist, do nothing
      }
      return { wishlist: [...state.wishlist, product] };
    }),

  // Remove a product from the wishlist
  removeFromWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== productId),
    })),

  // Reset cart and wishlist
  resetCart: () => set({ items: [] }),
  resetWishlist: () => set({ wishlist: [] }),

}));

