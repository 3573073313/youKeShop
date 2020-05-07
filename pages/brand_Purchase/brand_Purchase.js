// pages/brand_Purchase/brand_Purchase.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    NavIndex: 0,
    // 初始化导航类目 
    NavTitle: [{
        NavTitle: "今日新品",
        NavConternt: [{
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/16251840/O1CN01NI0NYJ1PSlLV3QYcq_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "INBIKE 夏季骑行手套山地车半指减震掌垫透气公路自行车装备男女",
          NavConterntMainPeople: 79
        }, {
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/126256772/O1CN01IGSpwE1ztckpDVToo_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "慕梵迪皮艺沙发123组合意式轻奢简约现代高档大户型沙发客厅家具",
          NavConterntMainPeople: 70
        }, {
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/126256772/O1CN01IGSpwE1ztckpDVToo_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "慕梵迪皮艺沙发123组合意式轻奢简约现代高档大户型沙发客厅家具",
          NavConterntMainPeople: 70
        }, {
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/126256772/O1CN01IGSpwE1ztckpDVToo_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "慕梵迪皮艺沙发123组合意式轻奢简约现代高档大户型沙发客厅家具",
          NavConterntMainPeople: 70
        }, {
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/126256772/O1CN01IGSpwE1ztckpDVToo_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "慕梵迪皮艺沙发123组合意式轻奢简约现代高档大户型沙发客厅家具",
          NavConterntMainPeople: 70
        }, {
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/126256772/O1CN01IGSpwE1ztckpDVToo_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "慕梵迪皮艺沙发123组合意式轻奢简约现代高档大户型沙发客厅家具",
          NavConterntMainPeople: 70
        }, {
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/126256772/O1CN01IGSpwE1ztckpDVToo_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "慕梵迪皮艺沙发123组合意式轻奢简约现代高档大户型沙发客厅家具",
          NavConterntMainPeople: 70
        }, {
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/126256772/O1CN01IGSpwE1ztckpDVToo_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "慕梵迪皮艺沙发123组合意式轻奢简约现代高档大户型沙发客厅家具",
          NavConterntMainPeople: 70
        }, {
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/126256772/O1CN01IGSpwE1ztckpDVToo_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "慕梵迪皮艺沙发123组合意式轻奢简约现代高档大户型沙发客厅家具",
          NavConterntMainPeople: 70
        }]
      },
      {
        NavTitle: "日用家居",
        NavConternt: [{
          NavConterntMainImg: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/1967929743/O1CN01nvWOd92LqLPueWvm0_!!0-item_pic.jpg_250x250.jpg",
          NavConterntMainTitle: "实木全身镜子欧式落地镜挂墙卧室家用穿衣镜服装店学生宿舍试衣镜",
          NavConterntMainPeople: 39
        }, {
          NavConterntMainImg: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/470164086/O1CN011xQKi91g3QvGgCQgZ_!!0-item_pic.jpg_250x250.jpg",
          NavConterntMainTitle: "维莎纯实木沙发简约现代小户型可拆洗型布艺沙发2019客厅新款家具",
          NavConterntMainPeople: 2700
        }, {
          NavConterntMainImg: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/726988609/O1CN015iRcpQ2DSyKPSn0UR_!!0-item_pic.jpg_250x250.jpg",
          NavConterntMainTitle: "米兰纳沙发北欧现代布艺沙发客厅组合大小户型简约拆洗实木家具*",
          NavConterntMainPeople: 4099
        }]
      }, {
        NavTitle: "品牌服饰",
        NavConternt: [{
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/18715807/O1CN019oQXrl1sleYD2qGnD_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "阿迪达斯官网 UltraBOOST男子跑步运动鞋BB6166 CP9248 BB6167",
          NavConterntMainPeople: 1039
        }, {
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/325718097/O1CN01tQazzr29gTX0cSLmA_!!0-item_pic.jpg_250x250.jpg",
          NavConterntMainTitle: "adidas neo阿迪休闲2020年新款男子M SS GR WB防风夹克FN6524",
          NavConterntMainPeople: 369
        }]
      }, {
        NavTitle: "美妆产品",
        NavConternt: [{
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/16251840/O1CN01NI0NYJ1PSlLV3QYcq_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "INBIKE 夏季骑行手套山地车半指减震掌垫透气公路自行车装备男女",
          NavConterntMainPeople: 79
        }, {
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/126256772/O1CN01IGSpwE1ztckpDVToo_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "慕梵迪皮艺沙发123组合意式轻奢简约现代高档大户型沙发客厅家具",
          NavConterntMainPeople: 79
        }]
      }, {
        NavTitle: "品牌穿搭",
        NavConternt: [{
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/16251840/O1CN01NI0NYJ1PSlLV3QYcq_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "INBIKE 夏季骑行手套山地车半指减震掌垫透气公路自行车装备男女",
          NavConterntMainPeople: 79
        }, {
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/126256772/O1CN01IGSpwE1ztckpDVToo_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "慕梵迪皮艺沙发123组合意式轻奢简约现代高档大户型沙发客厅家具",
          NavConterntMainPeople: 79
        }]
      }, {
        NavTitle: "骑行记录",
        NavConternt: [{
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/16251840/O1CN01NI0NYJ1PSlLV3QYcq_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "INBIKE 夏季骑行手套山地车半指减震掌垫透气公路自行车装备男女",
          NavConterntMainPeople: 79
        }, {
          NavConterntMainImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/126256772/O1CN01IGSpwE1ztckpDVToo_!!0-saturn_solar.jpg_250x250.jpg",
          NavConterntMainTitle: "慕梵迪皮艺沙发123组合意式轻奢简约现代高档大户型沙发客厅家具",
          NavConterntMainPeople: 79
        }]
      }
    ],
  },
  // 点击导航
  NavFun(e) {
    // 获取当前下标
    var index = e.currentTarget.dataset.index;
    console.log(index);
    this.setData({
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