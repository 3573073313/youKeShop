// pages/shopStreet_detail/shopStreet_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Navindex: 0,
    NavActive: 0,
    Show: 0,
    // 公告初始化
    title: "春風250SR新款跑車上市！！！",
    businessNav: [{
      businessNavTitle: "首页"
    }, {
      businessNavTitle: "宝贝"
    }, {
      businessNavTitle: "新品"
    }, {
      businessNavTitle: "折扣"
    }],
    // 店铺轮播图
    businessBanner: [{
      businessBannerImg: "https://group.dmeit.cn/businessBanner3.jpg"
    }, {
      businessBannerImg: "https://group.dmeit.cn/businessBanner2.jpg"
    }, {
      businessBannerImg: "https://group.dmeit.cn/businessBanner.jpg"
    }],
    // 店铺导航
    productTitleNav: [{
        productTitleNavTitle: "综合"
      },
      {
        productTitleNavTitle: "销量"
      },
      {
        productTitleNavTitle: "价格"
      }
    ],
    ImgFlag: true,
    ImgFlagOne: "https://group.dmeit.cn/pxIconUp.png",
    // 店铺产品
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
    // 店铺最新产品
    productListNews: [{
      productListImg: "https://www.cfmoto.com/upload/image/20200224/20200224121541.jpg",
      productListTitles: "春风250SR标准版 赛道玩家",
      productListProple: 18580
    }, {
      productListImg: "https://www.cfmoto.com/upload/image/20200224/20200224122159.jpg",
      productListTitles: "春风250SR 高配版本 ABS TTF液晶仪表",
      productListProple: 21680
    }]
  },

  ImgFunLoad(e) {
    console.log(e)
    let that = this;
    var HeightImg = e.detail.height;
    console.log(HeightImg);
    that.setData({
      height: HeightImg
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

  },
  // 点击导航栏
  NavFun(e) {
    let that = this;
    var index = e.currentTarget.dataset.index;
    that.setData({
      Show: index
    })
  },
  // 点击宝贝导航
  productTitleNavFun(e) {
    let that = this;
    // 获取当前下标
    var Navindex = e.currentTarget.dataset.navindex;
    console.log(Navindex)
    that.setData({
      Navindex: Navindex
    })
  },
  // 点击排序
  ImgFuns() {
    // 
    let that = this;
    var ImgFlag = that.data.ImgFlag;
    console.log(ImgFlag);
    that.setData({
      ImgFlag: !ImgFlag
    })
    if (that.data.ImgFlag == false) {
      that.setData({
        ImgFlagOne: "https://group.dmeit.cn/pxIconDown.png"
      })
    } else {
      that.setData({
        ImgFlagOne: "https://group.dmeit.cn/pxIconUp.png"
      })
    }
  },
  // 点击店铺名称进入店铺详情信息
  InformationFun() {
    wx.navigateTo({
      url: '../store_information/store_information',
    })

  }
})