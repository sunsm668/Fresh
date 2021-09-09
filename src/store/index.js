   // 接口返回数据结构
    // {    
    //     shopId:{                   //商铺id
    //       shopname: '沃尔玛',      //商铺名称
    //       productList:{           //商品列表
    //         productId:{           //商品id
    //           _id: "1",
    //           imgUrl: "http://www.dell-lee.com/imgs/vue3/tomato.png",
    //           name: "番茄 250g / 份",
    //           oldPrice: 39.6,      //商品原价
    //           price: 33.6,         //商品价格
    //           sales: 10,           //商品月售数量
    //           count: 2,            //商品数量
    //           check：true          //购物车状态
    //         }
    //       }
    //     }
    // }
import Vuex from 'vuex'
// 往 localStorage 中存储数据

const setLocalCartList = ( state ) => {
  const { cartList } = state;
  const cartListString = JSON.stringify(cartList);
  localStorage.cartList = cartListString;
}


const getLocalCartList = () => {
  // { shopId: {shopName:'', productList:{ productId: {} }}}
  return JSON.parse(localStorage.cartList || "{}");
};
export default Vuex.createStore({
  state: {
    cartList: getLocalCartList()
  },
  mutations: {
    // 商品数量加减功能
    changeCartItemInfo(state, payload){
        // 获取传入的店铺ID、商品ID、商品信息
        const { shopId, productId, productInfo } = payload;
        // 根据店铺ID获取店铺信息
        let shopInfo = state.cartList[shopId];
        if(!shopInfo) {  shopInfo = {
          shopname:'', productList:{}
        } }
        let product = shopInfo.productList[productId];
        if(!product) {
          product = productInfo;
          product.count = 0;
          }
        product.count += payload.num;
        if(payload.num > 0) { product.check = true }
        if(product.count < 0) { product.count = 0 }
        shopInfo.productList[productId] = product;
        state.cartList[shopId] = shopInfo;
        setLocalCartList(state);
    },
    // 更新商铺名称
    updateShopName(state, payload){
        const { shopId, shopname } = payload;
        const shopInfo = state.cartList[shopId] || {
          shopname:'', productList:{}
        };
        shopInfo.shopname = shopname;
        state.cartList[shopId] = shopInfo;

        setLocalCartList(state);
    },
    // 商品在购物车中状态
    changeCartItemChecked(state, payload){
        //获取传入的店铺ID、商品ID 
        const { shopId, productId } = payload;
        const product = state.cartList[shopId].productList[productId];
        // 商品状态取反
        product.check = !product.check;
        setLocalCartList(state);
    },
    // 清空购物车功能
    cleanCartProducts(state, payload){
        //获取传入的店铺ID 
        const { shopId } = payload;
        // 将店铺ID下的商品列表清空
        state.cartList[shopId].productList = {};
        setLocalCartList(state);
    },
    // 购物车全选功能
    setCartItemsChecked(state, payload){
        const { shopId } = payload;
        const products = state.cartList[shopId].productList;
        if(products){
          for(let key in products){
            const product = products[key];
            product.check = true;
          }
        } 
        setLocalCartList(state);
    },
    // 提交订单清除购物车
    clearCartData(state,shopId){
      state.cartList[shopId].productList = {}
    }
  }
})
