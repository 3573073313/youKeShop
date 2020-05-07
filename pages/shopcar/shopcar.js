// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 购物车列表
    ShoppigProduct: [{
      ShoppigProduct_Img: "https://img.alicdn.com/imgextra/i1/1029962752/O1CN01e3Rfwf1WCSULYDNp9_!!1029962752-0-daren.jpg_250x250xz.jpg",
      ShoppigProduct_Title: "现货shoei x14 招财祭柳川明小绿人红加藤白黑红蚂蚁犀牛蚊子头盔",
      ShoppigProduct_Specs: [{
        ShoppigProduct_Specs_Model: 40,
        ShoppigProduct_Specs_colour: "黑色"
      }],
      ShoppigProduct_Moeny: 5000,
      ShoppigProduct_Num: 1
    }],
    CarShopMoney: 0, // 初始化结算总价
    ArrLength: 0, //结算件数
    checked: false,
    disabled: false,
    OnShow: true,
    editTitle: true,
    scrollTop: 0,
    ProductShop: true,
    checkedTrue: false,
    whole: false,
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
  
  // 点击前往首页
  GoShopFun() {
    wx.reLaunch({
      url: '../index/index',
    })
  },
  // 点击编辑
  editFun() {
    let that = this;
    this.setData({
      OnShow: !that.data.OnShow,
      editTitle: !that.data.editTitle,
      ProductShop: !that.data.ProductShop
    })

    console.log(that.data.ProductShop)
  }
})