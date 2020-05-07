Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 产品分类商品Banner
    SwiperProduct: [{
        SwiperProductImg: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3085058491,1318306775&fm=26&gp=0.jpg"
      },
      {
        SwiperProductImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586720610800&di=133a9c89902241f256f46e71279daf78&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11400194675%2F0.jpg"
      },
      {
        SwiperProductImg: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2013763176,387712477&fm=26&gp=0.jpg"
      },

      {
        SwiperProductImg: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=262064966,2607095984&fm=26&gp=0.jpg"
      },
    ],
    cateItems: [{
        cate_id: 1,
        cate_name: "水果",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃', 
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "干果",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '夏威夷果',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '夏威夷果',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '夏威夷果',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '夏威夷果',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
          },
          {
            child_id: 5,
            name: '夏威夷果',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
          },
          {
            child_id: 6,
            name: '夏威夷果',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
          },
          {
            child_id: 7,
            name: '夏威夷果',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
          },
          {
            child_id: 8,
            name: '夏威夷果',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t18901/57/1522219067/198105/1f4ad39/5acaccb2Nf4a6792b.jpg!q50.jpg"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "蔬菜",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '有机上海青',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t2827/290/2563889921/292001/bf218791/576b843eN1f7e4b44.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '有机上海青',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t2827/290/2563889921/292001/bf218791/576b843eN1f7e4b44.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '有机上海青',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t2827/290/2563889921/292001/bf218791/576b843eN1f7e4b44.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '有机上海青',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t2827/290/2563889921/292001/bf218791/576b843eN1f7e4b44.jpg!q50.jpg"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "海鲜",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id;
    let index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
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