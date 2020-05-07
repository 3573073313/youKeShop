// pages/seckill_detail/seckill_detail.js
const {
  $Toast
} = require('../../dist/base/index');
const {
  $Message
} = require('../../dist/base/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 倒计时
    clearTimer: false,
    // 产品轮播图
    productSwiper: [{
      productSwiperImg: "https://img.alicdn.com/imgextra/i3/2863054326/O1CN01DTGsxb1hpLyeg3vYn_!!0-item_pic.jpg_430x430q90.jpg",
    }, {
      productSwiperImg: "https://img.alicdn.com/imgextra/i3/2863054326/O1CN011hpLqx5i1JxJUwr_!!2863054326.png_430x430q90.jpg",
    }, {
      productSwiperImg: "https://img.alicdn.com/imgextra/i3/2863054326/O1CN01IlBvRF1hpLxBR77nC_!!2863054326.jpg_430x430q90.jpg",
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      targetTime: new Date().getTime() + 1587537940948
    });
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
    this.setData({
      clearTimer: true
    });
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
  // 点击返回顶部
  goTop(e) { // 一键回到顶部
    console.log(123)
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },

  // 获取滚动条当前位置
  onPageScroll(e) {
    console.log(e)
    if (e.scrollTop > 300) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
})