// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Navindex: 0,
    NavList: [{
      icon: "service_fill",
      NavListTitle: "产品排行"
    }, {
      icon: "shop_fill",
      NavListTitle: "店铺排行"
    }],
    // 产品
    NavCont: [{
        NavContImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/890482188/O1CN01rmaqi81S29B6mw2mj_!!0-item_pic.jpg_250x250.jpg",
        NavContTxt: "Nike耐克官方AIR FORCE 1 '07 AF1男子运动鞋休闲板鞋气垫",
        NavContPeople: 749
      },
      {
        NavContImg: "https://img.alicdn.com/imgextra/i1/2200719164073/O1CN01Vt7SSe1fxTkNat5bX_!!2200719164073.jpg_430x430q90.jpg",
        NavContTxt: "Apple/苹果2019新款AirPods Pro真无线耳机入耳式蓝牙降噪充电盒",
        NavContPeople: 1899
      },

      {
        NavContImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/58854583/O1CN01IxuphB1jj3lYfhj5i_!!0-saturn_solar.jpg_250x250.jpg",
        NavContTxt: "苹果AirPods Pro保护套AirPods 1代2代耳机盒真碳纤维壳无线蓝牙3",
        NavContPeople: 149
      },
      {
        NavContImg: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/890482188/O1CN01v3ZlQq1S29BUXZFe4_!!890482188-0-lubanu-s.jpg_250x250.jpg",
        NavContTxt: "Nike 耐克官方NIKE AIR FORCE 1 '07 ESS 女子运动鞋CJ1646",
        NavContPeople: 749
      },
      {
        NavContImg: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/890482188/O1CN01e8i8Kb1S29BlinUct_!!890482188-0-lubanu-s.jpg_250x250.jpg",
        NavContTxt: "Nike 耐克官方AIR MAX GRAVITON LEA 男子运动鞋休闲气垫 CD4151",
        NavContPeople: 349
      },
      {
        NavContImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/890482188/O1CN01mgcejM1S29Bejd3Ts_!!890482188-0-lubanu-s.jpg_250x250.jpg",
        NavContTxt: "Nike 耐克官方 NIKE AIR MAX GUILE女子运动鞋 916787",
        NavContPeople: 349
      }
    ],
    // 店铺
    NavShop: [{
      NavShopImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587724674831&di=123952d069b7b799c9762293a86758c1&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Ffa%2F28%2Ff2%2Ffa28f2ee419988b019454955b1529c52.jpg",
      NavShopNum: 536321,
      NavShopTitle: "春风官方旗舰店",
      NavShop: [{
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }, {
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }, {
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }]
    }, {
      NavShopImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587724674831&di=123952d069b7b799c9762293a86758c1&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Ffa%2F28%2Ff2%2Ffa28f2ee419988b019454955b1529c52.jpg",
      NavShopNum: 536321,
      NavShopTitle: "春风官方旗舰店",
      NavShop: [{
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }, {
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }, {
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }]
    }, {
      NavShopImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587724674831&di=123952d069b7b799c9762293a86758c1&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Ffa%2F28%2Ff2%2Ffa28f2ee419988b019454955b1529c52.jpg",
      NavShopNum: 536321,
      NavShopTitle: "春风官方旗舰店",
      NavShop: [{
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }, {
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }, {
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }]
    }, {
      NavShopImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587724674831&di=123952d069b7b799c9762293a86758c1&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Ffa%2F28%2Ff2%2Ffa28f2ee419988b019454955b1529c52.jpg",
      NavShopNum: 536321,
      NavShopTitle: "春风官方旗舰店",
      NavShop: [{
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }, {
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }, {
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }]
    }, {
      NavShopImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587724674831&di=123952d069b7b799c9762293a86758c1&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Ffa%2F28%2Ff2%2Ffa28f2ee419988b019454955b1529c52.jpg",
      NavShopNum: 536321,
      NavShopTitle: "春风官方旗舰店",
      NavShop: [{
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }, {
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }, {
        NavShopImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg"
      }]
    }]
  },

  // 点击获取当前下标
  NavFun(e) {
    let that = this;
    // 获取当前index下标
    let index = e.currentTarget.dataset.index;
    console.log(index);
    that.setData({
      Navindex: index
    })
  },

  // 点击产品跳转
  ProductFun() {
    wx.navigateTo({
      url: '../product_detail/product_detail',
    })
  },

  // 点击店铺跳转店铺详情
  ShopFun() {
    wx.navigateTo({
      url: '../shopStreet_detail/shopStreet_detail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})