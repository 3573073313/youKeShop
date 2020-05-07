// pages/live/live.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    live: [{
      liveState: 0,
      liveNum: 10340,
      liveTitle: "大茂跑车讲解，性能测试",
      liveShopImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587724674831&di=123952d069b7b799c9762293a86758c1&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Ffa%2F28%2Ff2%2Ffa28f2ee419988b019454955b1529c52.jpg",
      liveShopTitle: "春风官方旗舰店",
      liveBgImg: "https://group.dmeit.cn/43c8e910aaea8c1a7f4ce4c53cb656b.png"
    }, {
      liveState: 0,
      liveNum: 1040,
      liveTitle: "这个零食很好吃",
      liveShopImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587724674831&di=123952d069b7b799c9762293a86758c1&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Ffa%2F28%2Ff2%2Ffa28f2ee419988b019454955b1529c52.jpg",
      liveShopTitle: "春风官方旗舰店",
      liveBgImg: "https://group.dmeit.cn/43c8e910aaea8c1a7f4ce4c53cb656b.png"
    }, {
      liveState: 1,
      liveNum: 10340,
      liveTitle: "大茂跑车讲解，性能测试",
      liveShopImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587724674831&di=123952d069b7b799c9762293a86758c1&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Ffa%2F28%2Ff2%2Ffa28f2ee419988b019454955b1529c52.jpg",
      liveShopTitle: "春风官方旗舰店",
      liveBgImg: "https://group.dmeit.cn/43c8e910aaea8c1a7f4ce4c53cb656b.png"
    }, {
      liveState: 2,
      liveNum: 10340,
      liveTitle: "大茂跑车讲解，性能测试",
      liveShopImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587724674831&di=123952d069b7b799c9762293a86758c1&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Ffa%2F28%2Ff2%2Ffa28f2ee419988b019454955b1529c52.jpg",
      liveShopTitle: "杜卡迪官方旗舰店",
      liveBgImg: "https://group.dmeit.cn/43c8e910aaea8c1a7f4ce4c53cb656b.png"
    }, {
      liveState: 0,
      liveNum: 10340,
      liveTitle: "大茂跑车讲解，性能测试",
      liveShopImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587724674831&di=123952d069b7b799c9762293a86758c1&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Ffa%2F28%2Ff2%2Ffa28f2ee419988b019454955b1529c52.jpg",
      liveShopTitle: "春风官方旗舰店",
      liveBgImg: "https://group.dmeit.cn/43c8e910aaea8c1a7f4ce4c53cb656b.png"
    }, {
      liveState: 0,
      liveNum: 1040,
      liveTitle: "这个零食很好吃",
      liveShopImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587724674831&di=123952d069b7b799c9762293a86758c1&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Ffa%2F28%2Ff2%2Ffa28f2ee419988b019454955b1529c52.jpg",
      liveShopTitle: "春风官方旗舰店",
      liveBgImg: "https://group.dmeit.cn/43c8e910aaea8c1a7f4ce4c53cb656b.png"
    }, {
      liveState: 1,
      liveNum: 10340,
      liveTitle: "大茂跑车讲解，性能测试",
      liveShopImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587724674831&di=123952d069b7b799c9762293a86758c1&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Ffa%2F28%2Ff2%2Ffa28f2ee419988b019454955b1529c52.jpg",
      liveShopTitle: "春风官方旗舰店",
      liveBgImg: "https://group.dmeit.cn/43c8e910aaea8c1a7f4ce4c53cb656b.png"
    }, {
      liveState: 2,
      liveNum: 10340,
      liveTitle: "大茂跑车讲解，性能测试",
      liveShopImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587724674831&di=123952d069b7b799c9762293a86758c1&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Ffa%2F28%2Ff2%2Ffa28f2ee419988b019454955b1529c52.jpg",
      liveShopTitle: "杜卡迪官方旗舰店",
      liveBgImg: "https://group.dmeit.cn/43c8e910aaea8c1a7f4ce4c53cb656b.png"
    }]
  },

  // 点击进入直播间
  LiveFun() {
    wx.navigateTo({
      url: '../live_detail/live_detail',
    });
    wx.showToast({
      title: '请稍后',
      icon: 'none'
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