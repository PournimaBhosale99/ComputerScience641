import { create } from 'zustand';

export const useCart = create((set) => ({
    items: [],

    addProduct: (product) =>
        set((state) => ({
            items: [...state.items, { product, quantity: 1 }],
        })),
               
    resetCart: () => set({ items: [] }),

}));

