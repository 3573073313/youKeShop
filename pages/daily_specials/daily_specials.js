// pages/daily_specials/daily_specials.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    NavIndex: 0,
    // 分类 + 产品
    dailyProduct: [{
        dailyProductClass: "家电产品",
        dailyProductSonTitle: [{
          dailyProductSonTitles: "物美价廉",
        }, {
          dailyProductSonTitles: "30天最低",
        }, {
          dailyProductSonTitles: "0点结束",
        }],
        dailyProductSonCont: [{
          dailyProductSonContImg: "https://img.alicdn.com/imgextra/i4/1714128138/TB2znKyci6guuRkSnb4XXbu4XXa_!!1714128138.jpg_430x430q90.jpg",
          dailyProductSonContTitle: "小米电视4A50英寸4K高清智能网络平板液晶屏家电视机家电官方旗舰",
          dailyProductSonContNumA: 1200,
          dailyProductSonContPeople: 1499
        }]
      },
      {
        dailyProductClass: "名品手表",
        dailyProductSonTitle: [{
          dailyProductSonTitles: "欧洲机芯",
        }, {
          dailyProductSonTitles: "5折优惠",
        }, {
          dailyProductSonTitles: "科技十足",
        }],
        dailyProductSonCont: [{
          dailyProductSonContImg: "https://gd1.alicdn.com/imgextra/i1/1023282504/O1CN01ubjjSd1UMsIgvyTqg_!!1023282504.jpg_400x400.jpg",
          dailyProductSonContTitle: "卡西欧35周年限定小方块金属方块小方表金砖银砖手表",
          dailyProductSonContNumA: 1200,
          dailyProductSonContNumE: 520,
          dailyProductSonContPeople: 1980
        }, {
          dailyProductSonContImg: "https://img.alicdn.com/imgextra/i3/2616970884/O1CN01NOkhXZ1IOugyAnS8L_!!2616970884.jpg_430x430q90.jpg",
          dailyProductSonContTitle: "Apple Watch Series5 苹果智能手表5代运动跑步手表iwatch五代S5GPS款/蜂窝款",
          dailyProductSonContNumA: 1200,
          dailyProductSonContNumE: 520,
          dailyProductSonContPeople: 2958
        }]
      },
      {
        dailyProductClass: "美味零食",
        dailyProductSonTitle: [{
          dailyProductSonTitles: "好吃美味",
        }, {
          dailyProductSonTitles: "质量保证",
        }, {
          dailyProductSonTitles: "网红产品",
        }],
        dailyProductSonCont: [{
          dailyProductSonContImg: "https://img.alicdn.com/imgextra/i3/2616970884/O1CN01NOkhXZ1IOugyAnS8L_!!2616970884.jpg_430x430q90.jpg",
          dailyProductSonContTitle: "Apple Watch Series5 苹果智能手表5代运动跑步手表iwatch五代S5GPS款/蜂窝款",
          dailyProductSonContNumA: 1200,
          dailyProductSonContNumE: 520,
          dailyProductSonContPeople: 2958
        }]
      },{
        dailyProductClass: "家电产品",
        dailyProductSonTitle: [{
          dailyProductSonTitles: "物美价廉",
        }, {
          dailyProductSonTitles: "30天最低",
        }, {
          dailyProductSonTitles: "0点结束",
        }],
        dailyProductSonCont: [{
          dailyProductSonContImg: "https://img.alicdn.com/imgextra/i4/1714128138/TB2znKyci6guuRkSnb4XXbu4XXa_!!1714128138.jpg_430x430q90.jpg",
          dailyProductSonContTitle: "小米电视4A50英寸4K高清智能网络平板液晶屏家电视机家电官方旗舰",
          dailyProductSonContNumA: 1200,
          dailyProductSonContPeople: 1499
        }]
      },
      {
        dailyProductClass: "名品手表",
        dailyProductSonTitle: [{
          dailyProductSonTitles: "欧洲机芯",
        }, {
          dailyProductSonTitles: "5折优惠",
        }, {
          dailyProductSonTitles: "科技十足",
        }],
        dailyProductSonCont: [{
          dailyProductSonContImg: "https://gd1.alicdn.com/imgextra/i1/1023282504/O1CN01ubjjSd1UMsIgvyTqg_!!1023282504.jpg_400x400.jpg",
          dailyProductSonContTitle: "卡西欧35周年限定小方块金属方块小方表金砖银砖手表",
          dailyProductSonContNumA: 1200,
          dailyProductSonContNumE: 520,
          dailyProductSonContPeople: 1980
        }, {
          dailyProductSonContImg: "https://img.alicdn.com/imgextra/i3/2616970884/O1CN01NOkhXZ1IOugyAnS8L_!!2616970884.jpg_430x430q90.jpg",
          dailyProductSonContTitle: "Apple Watch Series5 苹果智能手表5代运动跑步手表iwatch五代S5GPS款/蜂窝款",
          dailyProductSonContNumA: 1200,
          dailyProductSonContNumE: 520,
          dailyProductSonContPeople: 2958
        }]
      },
      {
        dailyProductClass: "美味零食",
        dailyProductSonTitle: [{
          dailyProductSonTitles: "好吃美味",
        }, {
          dailyProductSonTitles: "质量保证",
        }, {
          dailyProductSonTitles: "网红产品",
        }],
        dailyProductSonCont: [{
          dailyProductSonContImg: "https://img.alicdn.com/imgextra/i3/2616970884/O1CN01NOkhXZ1IOugyAnS8L_!!2616970884.jpg_430x430q90.jpg",
          dailyProductSonContTitle: "Apple Watch Series5 苹果智能手表5代运动跑步手表iwatch五代S5GPS款/蜂窝款",
          dailyProductSonContNumA: 1200,
          dailyProductSonContNumE: 520,
          dailyProductSonContPeople: 2958
        }]
      }
    ]
  },
  // 点击选中
  NavFun(e) {
    let that = this;
    // 获取当前下标
    var index = e.currentTarget.dataset.index;
    that.setData({
      NavIndex: index
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