// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         loading: false,
//         cartItems: [],
//         error: null,
//     },
//     reducers: {
//         addToCart: (state, action) => {
//             //action.payload will be product
//             const productId = action.payload._id;

//             const productInCart = state.cartItems.find((item) => item.product._id === productId);

//             if (productInCart) { //ive written Cart instead of Card
//                 const updatedCard = state.cartItems.map((cartElement) => {
//                     return cartElement.product._id === productId
//                         ? { ...cartElement, quantity: cartElement.quantity + 1 }
//                         : { ...cartElement };
//                 });
//                 state.cartItems = updatedCard;
//             } else {
//                 state.cartItems.push({ quantity: 1, product: { ...action.payload } })
//             }
//         },
//         removeFromCart: (state, action) => {

//             const productId = action.payload;

//             const productInCart = state.cartItems.find((item) => item.product._id === productId);


//             if (productInCart.quantity > 1) { //ive written Cart instead of Card
//                 const updatedCard = state.cartItems.map((cartElement) => {
//                     return cartElement.product._id === productId
//                         ? { ...cartElement, quantity: cartElement.quantity - 1 }
//                         : { ...cartElement };
//                 });
//                 state.cartItems = updatedCard;
//             } else {
//                 state.cartItems = state.cartItems.filter((item) => item.product._id !== productId);
//             }

//         },

//         removeProductFromCart: (state, action) => {
//             state.cartItems = state.cartItems.filter((item) => item.product._id !== action.payload)
//         }
//     },
// });

// export const cartReducer = cartSlice.reducer;
// export const { addToCart, removeFromCart, removeProductFromCart } = cartSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        loading: false,
        cartItems: [],
        error: null,
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const productId = product._id;

            const productInCart = state.cartItems.find((item) => item.product._id === productId);

            if (productInCart) {
                state.cartItems = state.cartItems.map((cartElement) =>
                    cartElement.product._id === productId
                        ? { ...cartElement, quantity: cartElement.quantity + 1 }
                        : cartElement
                );
            } else {
                state.cartItems.push({ quantity: 1, product: { ...product } });
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;

            const productInCart = state.cartItems.find((item) => item.product._id === productId);

            if (productInCart && productInCart.quantity > 1) {
                state.cartItems = state.cartItems.map((cartElement) =>
                    cartElement.product._id === productId
                        ? { ...cartElement, quantity: cartElement.quantity - 1 }
                        : cartElement
                );
            } else {
                state.cartItems = state.cartItems.filter((item) => item.product._id !== productId);
            }
        },
        removeProductFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.product._id !== action.payload);
        },
    },
});

export const { addToCart, removeFromCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;

