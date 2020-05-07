// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 可更换个人背景
    Login_Img_bg: "https://group.dmeit.cn/bglogin.jpg",
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 个人中心订单栏目图片初始化[可在后台自行更改]
    OrderIcon: [{
      OrderIconTitle: "待付款",
      OrderIconImg: "https://group.dmeit.cn/DfukuanIcon.png"
    }, {
      OrderIconTitle: "待收货",
      OrderIconImg: "https://group.dmeit.cn/DshouhuoIcon.png"
    }, {
      OrderIconTitle: "待评价",
      OrderIconImg: "https://group.dmeit.cn/DpingjiaIcon.png"
    }, {
      OrderIconTitle: "退款/售后",
      OrderIconImg: "https://group.dmeit.cn/ShoufuIcon.png"
    }, {
      OrderIconTitle: "全部订单",
      OrderIconImg: "https://group.dmeit.cn/quanbuDingIcon.png"
    }],
    // 广告位初始化
    LoginPoster: [{
        LoginPosterImg: "https://group.dmeit.cn/hlkerit.jpg",
      },
      {
        LoginPosterImg: "https://group.dmeit.cn/hlkerit.jpg",
      }
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

  // 点击获取用户信息
  UserInfoFun(e) {
    var that = this;
    var userImg = e.detail.userInfo.avatarUrl;
    var userName = e.detail.userInfo.nickName;
    var gender = e.detail.userInfo.gender;
    var UserSign = e.currentTarget.dataset.sign;
    this.setData({
      userImg: userImg,
      userName: userName,
      gender: gender,
      UserSign: UserSign
    });
  },

  // 点击签到按钮
  SignFun() {
    wx.showToast({
      title: '开发中',
      icon: 'none'
    })
  },

  // 点击查看特权按钮
  LookVipFun() {
    wx.showToast({
      title: '开发中',
      icon: 'none'
    })
  },
  LoginPeople() {
    wx.navigateTo({
      url: '../login_people/login_people',
    })
  }

})