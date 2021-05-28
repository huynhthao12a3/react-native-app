
import PRODUCTS from '../data/products';

const initialState = {
   products: PRODUCTS,
   filterProducts: PRODUCTS,
   favProducts: [],
   cartProducts:[],
   historyProducts:[],
}

const Reducer = (state = initialState, action) => {
   if(action.type === 'add_to_fav') {
      const index = state.favProducts.findIndex(item => item.id === action.productId && item.categoryId === action.categoryId);
      // console.log(index)
      if(index >= 0) {
         const updateFavProducts = [...state.favProducts]
         updateFavProducts.splice(index,1)
         return {...state, favProducts: updateFavProducts}
      }
      else {
         const product = state.products.find(item => item.id === action.productId && item.categoryId === action.categoryId);
         // console.log(state.favProducts)
         return {...state, favProducts: state.favProducts.concat(product)}
      }
   }


   if(action.type === 'add_to_cart') {
      const index = state.cartProducts.findIndex(item => item.id === action.productId && item.categoryId === action.categoryId);
      console.log(index)
      if(index >= 0) {
         const updateCartProducts = [...state.cartProducts]
         return {...state, cartProducts: updateCartProducts}
      }
      else {
         const product = state.products.find(item => item.id === action.productId && item.categoryId === action.categoryId);
         // console.log(state.favProducts)
         return {...state, cartProducts: state.cartProducts.concat(product)}
      }
   }

   if(action.type === 'remove_to_cart') {
      const indexCart = state.cartProducts.findIndex(item => item.id === action.productId && item.categoryId === action.categoryId);
      console.log(indexCart)
      const updateCartProducts = [...state.cartProducts]
      updateCartProducts.splice(indexCart,1)
      return {...state, cartProducts: updateCartProducts}
   }

   if(action.type === 'set_filter') {
      const filters = action.filters;
      // console.log(filters)
      const products = state.products.filter(item => {
         if(filters.isNewOn !== item.isNew) {
            return false;
         }
         if(filters.isSaleOn !== item.isSale) {
            return false;
         }
         return true;
      })
      return {...state, filterProducts: products}
   }

   if(action.type === 'no_filter') {
      const products = PRODUCTS.filter(item => item);
      return {...state, filterProducts: products}
   }

   if(action.type === 'add_to_history') {
      const index = state.historyProducts.findIndex(item => item.id === action.productid && item.categoryId === action.categoryid);
      console.log(index)
      if(index >= 0) {
         const product = state.products.find(item => item.id === action.productid && item.categoryId === action.categoryid);
         const updateHistoryProducts = [...state.historyProducts]
         updateHistoryProducts.splice(index, 1)
         return {...state, historyProducts: updateHistoryProducts.concat(product)}
      }
      else {
         const product = state.products.find(item => item.id === action.productid && item.categoryId === action.categoryid);
         // console.log(state.favProducts)
         return {...state, historyProducts: state.historyProducts.concat(product)}
      }
   }
   
   // Lọc sản phẩm khi bắt đầu (lúc chưa dùng filter)
   const products = PRODUCTS.filter(item => item);
   return {...state, filterProducts: products}

}
export default Reducer;