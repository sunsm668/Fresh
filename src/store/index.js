import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    cartList:{
      //   shopId:{         //商铺id
      //     productId:{    //商品id
      //       _id: "1",
      //       imgUrl: "http://www.dell-lee.com/imgs/vue3/tomato.png",
      //       name: "番茄 250g / 份",
      //       oldPrice: 39.6,
      //       price: 33.6,
      //       sales: 10,
      //     }
      // }
    }
  },
  mutations: {
    changeCartItemInfo(state, payload){
        const { shopId, productId, productInfo } = payload
        let shopInfo = state.cartList[shopId]
        if(!shopInfo) {  shopInfo = {} }
        let product = shopInfo[productId]
        if(!product) {
          product = productInfo
          product.count = 0
          }
        product.count += payload.num
        if(payload.num > 0) { product.check = true }
        if(product.count < 0) { product.count = 0 }
        shopInfo[productId] = product
        state.cartList[shopId] = shopInfo
    },
    changeCartItemChecked(state, payload){
        const { shopId, productId } = payload
        const product = state.cartList[shopId][productId]
        product.check = !product.check
    },
    cleanCartProducts(state, payload){
        const { shopId } = payload
        state.cartList[shopId] = {}
    },
    setCartItemsChecked(state, payload){
        const { shopId } = payload
        const products = state.cartList[shopId]
        if(products){
          for(let key in products){
            const product = products[key]
            product.check = true
          }
        }

        
    }
  },
  actions: {
  },
  modules: {
  }
})
