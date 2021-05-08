    // 接口返回数据结构
    // {    
    //     shopId:{   
    //       shopname: '沃尔玛',      //商铺id
    //       productList:{
    //         productId:{    //商品id
    //           _id: "1",
    //           imgUrl: "http://www.dell-lee.com/imgs/vue3/tomato.png",
    //           name: "番茄 250g / 份",
    //           oldPrice: 39.6,
    //           price: 33.6,
    //           sales: 10,
    //           count: 2,
    //         }
    //       }
    //     }
    // }
import Vuex from 'vuex'
const setLocalCartList = ( state ) => {
  const { cartList } = state;
  const cartListString = JSON.stringify(cartList);
  localStorage.cartList = cartListString
}
const getLocalCartList = () => {
  return JSON.parse(localStorage.cartList) || {}
}
export default Vuex.createStore({
  state: {
    cartList: getLocalCartList()
  },
  mutations: {
    changeCartItemInfo(state, payload){
        const { shopId, productId, productInfo } = payload
        let shopInfo = state.cartList[shopId]
        if(!shopInfo) {  shopInfo = {
          shopname:'', productList:{}
        } }
        let product = shopInfo.productList[productId]
        if(!product) {
          product = productInfo
          product.count = 0
          }
        product.count += payload.num
        if(payload.num > 0) { product.check = true }
        if(product.count < 0) { product.count = 0 }
        shopInfo.productList[productId] = product
        state.cartList[shopId] = shopInfo
        setLocalCartList(state)
    },
    updateShopName(state, payload){
        const { shopId, shopname } = payload
        const shopInfo = state.cartList[shopId] || {
          shopname:'', productList:{}
        }
        shopInfo.shopname = shopname
        state.cartList[shopId] = shopInfo
        setLocalCartList(state)
    },
    changeCartItemChecked(state, payload){
        const { shopId, productId } = payload
        const product = state.cartList[shopId].productList[productId]
        product.check = !product.check
        setLocalCartList(state)
    },
    cleanCartProducts(state, payload){
        const { shopId } = payload
        state.cartList[shopId].productList = {}
        setLocalCartList(state)
    },
    setCartItemsChecked(state, payload){
        const { shopId } = payload
        const products = state.cartList[shopId].productList
        if(products){
          for(let key in products){
            const product = products[key]
            product.check = true
          }
        } 
        setLocalCartList(state) 
    }
  }
})
