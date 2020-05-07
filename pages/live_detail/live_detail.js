var app = getApp();
const {
  $Message
} = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false,
    count: 0,
    FollowTitleTrue: "关注",
    follow: true,
    //直播產品
    LiveProduct: [{
      LiveProductImg: "http://img5.imgtn.bdimg.com/it/u=2123417762,1465212519&fm=26&gp=0.jpg",
      LiveProductTitle: "测试产品请勿购买！",
      LiveProductPeople: 2033
    }, {
      LiveProductImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/676606897/O1CN010k5dDV20osGSCRcAO-676606897.jpg_250x250.jpg",
      LiveProductTitle: "斐乐情侣款帆布鞋2020夏季新款休闲运动鞋男女板鞋",
      LiveProductPeople: 389
    }, {
      LiveProductImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/3327042818/O1CN01B6qFLM1WggiDuqA4f_!!3327042818.jpg_250x250.jpg",
      LiveProductTitle: "Jordan官方AIR JORDAN 1 MID AJ1女子运动鞋休闲马卡龙色",
      LiveProductPeople: 999
    }]
  },

  inputFun() {
    this.setData({
      visible3: true
    });
  },

  handleOpen1() {
    this.setData({
      visible1: true
    });
  },

  handleCancel1() {
    this.setData({
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false
    });
  },

  // 点击执行
  chatFun() {
    this.setData({
      visible2: true
    });
  },

  // 点击关注
  FollowFun() {
    let that = this;
    that.setData({
      follow: !that.data.follow
    })
    // 判断状态
    if (that.data.follow == true) {
      wx.showModal({
        title: '温馨提示',
        content: '确定取消关注？',
        success(res) {
          if (res.confirm) {
            wx.showToast({
              title: '取消关注',
              icon: 'success'
            })
          } else if (res.cancel) {
            that.setData({
              follow: !that.data.follow
            })
            wx.showToast({
              title: '取消',
              icon: 'success'
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '已关注',
        icon: 'success'
      })
    }

  },

  ShopListFun() {
    this.setData({
      visible4: true
    });
  },

  clickHandler() {
    this.setData({
      count: this.data.count + 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */

  statechange(e) {
    console.log('live-pusher code:', e.detail.code)
  },


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