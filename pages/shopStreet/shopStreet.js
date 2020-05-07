// pages/shopStreet/shopStreet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    Nav: [{
        NavTitle: "综合排序"
      },
      {
        NavTitle: "销量"
      },
      {
        NavTitle: "信用"
      },
      {
        NavTitle: "人气"
      },
    ],

    // 商鋪產品分類
    shopStreetProduct: [{
        ProductShopLogoImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587724674831&di=123952d069b7b799c9762293a86758c1&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Ffa%2F28%2Ff2%2Ffa28f2ee419988b019454955b1529c52.jpg",
        ProductShopTitle: "春风官方旗舰店铺",
        ProductShopGrade: 43,
        ProductShopDateTime: 3,
        ProductShopEvaluate: 80.5,
        Product: [{
            ProductImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg",
            ProductProple: 16800
          },
          {
            ProductImg: "//img12.360buyimg.com/n1/jfs/t1/114781/26/726/264042/5e9003adEbc6d5b6a/71350bd51ecfeda9.jpg",
            ProductProple: 21680
          }, {
            ProductImg: "//img12.360buyimg.com/n1/jfs/t1/94323/39/17121/340952/5e854318Ee22cb365/2bd5f5e783bcb148.jpg",
            ProductProple: 43800
          }
        ],
        TitleFenlei: [{
            TitleFenleiText: "运动版"
          },
          {
            TitleFenleiText: "跑车版"
          }, {
            TitleFenleiText: "街车版"
          }
        ]
      },

      {
        ProductShopLogoImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587729006168&di=1526e67f0f94c19e9ed300980d0f5894&imgtype=0&src=http%3A%2F%2Fbeetify.com%2Fphoto%2Fe%2F1551590601_2cfc041f_0_600.jpg",
        ProductShopTitle: "华为官方旗舰店",
        ProductShopGrade: 23,
        ProductShopDateTime: 6,
        ProductShopEvaluate: 90.5,
        Product: [{
            ProductImg: "https://img.alicdn.com/imgextra/i2/2838892713/O1CN01ac1V3a1Vub7XFvsOC_!!2838892713.jpg_430x430q90.jpg",
            ProductProple: 4188
          },
          {
            ProductImg: "https://img.alicdn.com/imgextra/i1/2838892713/O1CN01NY0t2L1Vub5Pu8Hh9_!!2-item_pic.png_430x430q90.jpg",
            ProductProple: 5899
          }, {
            ProductImg: "https://img.alicdn.com/imgextra/i4/2838892713/O1CN01oJqZKD1Vub7fie5gp_!!2838892713.jpg_430x430q90.jpg",
            ProductProple: 2999
          }
        ],
        TitleFenlei: [{
            TitleFenleiText: "P系列"
          },
          {
            TitleFenleiText: "Mate系列"
          }, {
            TitleFenleiText: "nova系列"
          }
        ]
      },


    ]
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

  },
  // 点击导航
  NavFun(e) {
    console.log(e);
    let that = this;
    var index = e.currentTarget.dataset.index;
    console.log(index);
    that.setData({
      active: index
    })
  },
  // 点击进店
  GoShop(e) {
    console.log(e);
    wx.navigateTo({
      url: '../shopStreet_detail/shopStreet_detail',
    })
  }
})