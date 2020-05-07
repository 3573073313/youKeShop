// pages/seckill/seckill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 初始化下标
    IndexShow: 0,
    // 倒计时
    clearTimer: false,
    // 秒杀bannert图
    seckillBanner: [{
      seckillBanner_Img: "https://group.dmeit.cn/sckeillBanner1.jpg"
    }, {
      seckillBanner_Img: "https://group.dmeit.cn/sckeillBanner1.jpg"
    }, {
      seckillBanner_Img: "https://group.dmeit.cn/sckeillBanner1.jpg"
    }],
    // 分类下的产品
    seckillContent: [{
        id: 1,
        ProductClassification: "品牌头盔",
        Product: [{
            ProductImg: "https://img.alicdn.com/imgextra/i1/2219508746/TB2O5poXNnaK1RjSZFtXXbC2VXa_!!2219508746-0-beehive-scenes.jpg_180x180xzq90.jpg",
            ProductTitle: "现货shoei x14 招财祭柳川明小绿人红加藤白黑红蚂蚁犀牛蚊子头盔",
            ProductPrice: 2600,
            ProductMoenyOriginalPrice: 5000
          },

          {
            ProductImg: " https://img.alicdn.com/imgextra/i3/3031135351/O1CN013ts2b31pOnvwxV483_!!3031135351.jpg_430x430q90.jpg",
            ProductTitle: "KYT摩托车头盔夏季轻便男女士全盔防雾双镜片机车全覆式跑盔四季",
            ProductPrice: 1280,
            ProductMoenyOriginalPrice: 2000
          },


          {
            ProductImg: "https://img10.360buyimg.com/n7/jfs/t1/88255/31/14656/534041/5e68931fEd6783cc0/35bd0908bc4d8525.png",
            ProductTitle: "AGV K1 头盔四季通用夏季防雾摩托车机车赛车全盔覆式男女个性酷 小乌龟 M",
            ProductPrice: 1780,
            ProductMoenyOriginalPrice: 2000
          },


          {
            ProductImg: "https://img11.360buyimg.com/n7/jfs/t1/29530/29/7888/130994/5c6f7afeE18a751fe/9679a4b35417dd63.jpg",
            ProductTitle: "AGV进口K-5 S头盔男女防雾摩托车赛车全盔覆式四季通用冬季保暖双镜片 旋风黑 XL",
            ProductPrice: 2680,
            ProductMoenyOriginalPrice: 3000
          },
        ]
      },
      {
        id: 2,
        ProductClassification: "骑行服",
        Product: [{
          ProductImg: "https://img12.360buyimg.com/n7/jfs/t1/110014/13/1607/301313/5dff5d76E1191ae99/2ca29a42d6db3a7a.jpg",
          ProductTitle: "秋冬丹尼斯摩托车骑行服 街跑赛车裤驼峰衣 机车夹克骑士防摔套装 丹驼峰套装 M",
          ProductPrice: 1435,
          ProductMoenyOriginalPrice: 2000
        }, {
          ProductImg: "https://img10.360buyimg.com/n7/jfs/t1/3439/6/8207/43014/5ba8de13E74d5f26a/4bef9b2d4147af6f.jpg",
          ProductTitle: "丹尼斯DAINESE AVRO 4 2019新款摩托车保暖内胆厚实皮衣骑行服正品保证男女 适合冬季 黑白 56",
          ProductPrice: 4840,
          ProductMoenyOriginalPrice: 5000
        }, {
          ProductImg: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/3967626225/O1CN011vr5yGTIIpmIoGv_!!3967626225.png_250x250.jpg",
          ProductTitle: "越野摩托车骑行服套装男重机车赛车服女四季防水夏季防摔服骑士服",
          ProductPrice: 348,
          ProductMoenyOriginalPrice: 400
        }, {
          ProductImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/3986256923/O1CN01SFVrPy210mWbA8TRP_!!0-item_pic.jpg_250x250.jpg",
          ProductTitle: "2019日本购摩托骑行服男夏季透气修身女机车赛车越野防摔",
          ProductPrice: 2367,
          ProductMoenyOriginalPrice: 4734
        }, {
          ProductImg: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2702622740/O1CN01BxS1Hn1W6xoR1UUAi_!!2702622740.jpg_250x250.jpg",
          ProductTitle: "机车网RSTAICHI摩托车骑行服男夏季网眼透气赛车防摔骑士夹克上衣",
          ProductPrice: 2710,
          ProductMoenyOriginalPrice: 5420
        }]
      },
      {
        id: 3,
        ProductClassification: "护具产品",
        Product: [{
            ProductImg: "https://gd2.alicdn.com/imgextra/i4/624289882/TB2jAqTrtcnBKNjSZR0XXcFqFXa_!!624289882.jpg_400x400.jpg",
            ProductTitle: "正品现货 丹尼斯dainese摩托车机车防摔护膝护肘骑行护腿护具装备",
            ProductPrice: 428,
            ProductMoenyOriginalPrice: 480
          }, {
            ProductImg: "https://gd1.alicdn.com/imgextra/i1/624289882/TB2fL7Frsj_B1NjSZFHXXaDWpXa_!!624289882.jpg_400x400.jpg",
            ProductTitle: "正品现货 丹尼斯dainese摩托车机车防摔护膝护肘骑行护腿护具装备",
            ProductPrice: 405,
            ProductMoenyOriginalPrice: 450
          },
          {
            ProductImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/64443215/O1CN01LpgNfg1ZcVssalffm_!!64443215.jpg_250x250.jpg",
            ProductTitle: "車迷辰 正品 Dainese BLACKJACK 丹尼斯 哈雷复古 赛车骑行手套",
            ProductPrice: 570,
            ProductMoenyOriginalPrice: 600
          },
          {
            ProductImg: " https://gd2.alicdn.com/imgextra/i1/3843014002/O1CN01YdS4zi1fQxcn5mEXQ_!!3843014002.jpg_400x400.jpg",
            ProductTitle: "新款丹尼斯 D-Explorer 2 春夏秋摩旅触屏摩托车拉力旅行机车手套",
            ProductPrice: 728,
            ProductMoenyOriginalPrice: 850
          }
        ]
      },
      {
        id: 4,
        ProductClassification: "碳纤维产品",
        Product: [{
            ProductImg: " https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/64443215/O1CN01GTZzqp1ZcVvxqxoh2_!!64443215.jpg_250x250.jpg",
            ProductTitle: "正品 意大利原产 AGV Pista GP RR 新款 罗西选手赛道 碳纤维头盔",
            ProductPrice: 12800,
            ProductMoenyOriginalPrice: 12800
          },
          {
            ProductImg: "https://gd3.alicdn.com/imgextra/i2/64443215/O1CN01dIpaCF1ZcVvy0bvLR_!!64443215.jpg_400x400.jpg",
            ProductTitle: "正品 意大利原产 AGV Pista GP RR 新款 罗西选手赛道 碳纤维头盔",
            ProductPrice: 8480,
            ProductMoenyOriginalPrice: 12800
          }


        ]
      },
      {
        id: 5,
        ProductClassification: "其他产品",
        Product: [{
          ProductImg: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/4207517744/O1CN01RPRpOu274niVyRqok_!!0-item_pic.jpg_250x250.jpg",
          ProductTitle: "【官方正品】CHANEL 香奈儿炫亮魅力唇膏丝绒系列 哑光口红58",
          ProductPrice: 330,
          ProductMoenyOriginalPrice: 400
        }]
      }
    ]
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
  onUnload() {
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
  // 点击放出其他类块
  seckillFun(e) {
    let that = this;
    // 获取当前列表
    var ProductList = that.data.seckillContent;
    // 获取当前分类下标
    var index = e.currentTarget.dataset.index;
    console.log(ProductList)
    console.log(index)
    that.setData({
      IndexShow: index
    })

  },
  // 点击抢购
  seckillButton(e)
  {
    // 打印当前产品的下标
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '../seckill_detail/seckill_detail',
    })
  }
})