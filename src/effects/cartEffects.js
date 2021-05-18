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
import { computed } from 'vue';
import { useStore } from 'vuex';
// 购物车相关逻辑
export const useCommonCartEffect = (shopId) => {
    const store = useStore();
    const cartList = store.state.cartList;
    const changeCartItemInfo = ( shopId, productId, productInfo, num ) => {
        store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
    };
    // 获取商品列表
    const productList = computed(() => {
        const productList = cartList[shopId]?.productList || {};
        const notEmptyproductList = {};
        for( let i in productList){
            const product = productList[i]
            if(product.count > 0){
                notEmptyproductList[i] = product
            }
        }
        return notEmptyproductList;
    });
    // 获取商铺名称
    const shopName = computed(() => {
        const shopName = cartList[shopId]?.shopName || '';
        return shopName;
    });
    const calculations = computed(() => {
        const productList = cartList[shopId]?.productList;
        const result = { 
            total: 0,           //商品数量
            price: 0,           //商品总金额
            allChecked: true    //全选按钮切换icon图标
        };
        if(productList){
            for(let i in productList){
                const product = productList[i]
                // 计算加入购物车的商品数量
                result.total += product.count
                if(product.check){
                    // 计算加入购物车商品总金额
                    result.price += ( product.count * product.price )
                }
                if(product.count>0 && !product.check){
                    // 全选按钮切换icon图标
                    result.allChecked = false
                }
            }
        }
        // 加入购物车商品总金额保留两位小数
        result.price = result.price.toFixed(2);
        return result;
    });
    console.log(productList,'productList--------')
    return { cartList, productList, calculations, shopName, changeCartItemInfo };
}
