// pages/login_people/login_people.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 默认值
    NavIndex: 0,
    LoginPeoplePageNavList: [{
      icon: "financial_fill",
      LoginPeoplePageNavListTitle: "我的余额"
    }, {
      icon: "flag_fill",
      LoginPeoplePageNavListTitle: "我的积分"
    }],
    productList: [{
      productListImg: "https://img11.360buyimg.com/n7/jfs/t1/104637/18/17274/270863/5e854316E7f884bb0/bccf329824739adc.jpg",
      productListTitles: "春风NK250 高配版本 ABS TTF液晶仪表",
      productListProple: 16800
    }, {
      productListImg: "//img12.360buyimg.com/n1/jfs/t1/94323/39/17121/340952/5e854318Ee22cb365/2bd5f5e783bcb148.jpg",
      productListTitles: "春风650GT 高配版本 ABS TTF液晶仪表",
      productListProple: 43800
    }, {
      productListImg: "https://www.cfmoto.com/upload/image/20180619/20180619091004.jpg",
      productListTitles: "春风650MT 高配版本 ABS TTF液晶仪表",
      productListProple: 43800
    }, {
      productListImg: "https://www.cfmoto.com/upload/image/20200224/20200224121541.jpg",
      productListTitles: "春风250SR标准版 赛道玩家",
      productListProple: 18580
    }, {
      productListImg: "https://www.cfmoto.com/upload/image/20200224/20200224122159.jpg",
      productListTitles: "春风250SR 高配版本 ABS TTF液晶仪表",
      productListProple: 21680
    }],
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
  // 点击下方导航切换
  NavFun(e) {
    let that = this;
    // 得到当前元素的下标
    var index = e.currentTarget.dataset.index;
    console.log(index);
    that.setData({
      NavIndex: index
    })
  },
  // 点击产品进行跳转链接
  ProductFun() {
    wx.navigateTo({
      url: '../product_detail/product_detail',
    })
  },
  // 跳转积分商城
  IntegralFun() {
    wx.navigateTo({
      url: '../Integral_mall/Integral_mall',
    })
  }
})