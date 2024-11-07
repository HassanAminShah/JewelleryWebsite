import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";

export const cartData = (data = [], action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART condition", action);
      return [...data, action.data];

    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART condition", action);
      //   data.length = data.length ? data.length - 1 : [];
      const remainingItem = data.filter((item: any) => item.id !== action.data);
      return [...remainingItem];
    case EMPTY_CART:
      console.log("EMPTY_CART condition", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};

// import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";

// export const cartData = (data = [], action: any) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       console.log("ADD_TO_CART condition", action);

//       // Check if the item already exists in the cart
//       const itemIndex = data.findIndex(
//         (item: any) => item.id === action.data.id
//       );

//       if (itemIndex >= 0) {
//         // Item already exists, so update its quantity
//         const updatedData = data.map((item: any, index: number) =>
//           index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         return updatedData;
//       } else {
//         // Item does not exist, add it with an initial quantity of 1
//         return [...data, { ...action.data, quantity: 1 }];
//       }

//     case REMOVE_FROM_CART:
//       console.log("REMOVE_FROM_CART condition", action);

//       return data
//         .map((item: any) => {
//           if (item.id === action.data) {
//             // Decrease quantity by 1 if it's greater than 1
//             if (item.quantity > 1) {
//               return { ...item, quantity: item.quantity - 1 };
//             }
//             // Otherwise, filter out the item
//             return null;
//           }
//           return item;
//         })
//         .filter(Boolean); // Filter out any `null` items

//     case EMPTY_CART:
//       console.log("EMPTY_CART condition", action);
//       return [];

//     default:
//       return data;
//   }
// };
