// pages/product_detail/product_detail.js
const {
	$Toast
} = require('../../dist/base/index');
const {
	$Message
} = require('../../dist/base/index');

let GoTop = require('../index/index');

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		// 模拟评价数据
		RateCont: [{
				RateContLogin: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4150802370,1902002068&fm=11&gp=0.jpg",
				RateContName: "小猪猪飞上天",
				RateContTime: "2020-04-14",
				RateContLevel: 5,
				RateContMain: "如果你要买头盔，不来这家选，那真的是你的损失，只有更惊喜没有最惊喜。是正品，不可多得的好卖家，一点没夸大的说。"
			},
			{
				RateContLogin: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4150802370,1902002068&fm=11&gp=0.jpg",
				RateContName: "花花的美名",
				RateContTime: "2020-03-02",
				RateContLevel: 2.5,
				RateContMain: "无法表达，帅，好看，驾照和车都不知道在哪就先拿下喜欢的头盔和行车仪。😄"
			},

			{
				RateContLogin: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4150802370,1902002068&fm=11&gp=0.jpg",
				RateContName: "飞了的灵魂",
				RateContTime: "2019-08-19",
				RateContLevel: 4,
				RateContMain: "宝贝收到了 给包了顺丰打包完好 帽子漆水真心棒 卖家人超好的 做全球性的代购 以后有骑行装备需求还来这家"
			},

			{
				RateContLogin: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4150802370,1902002068&fm=11&gp=0.jpg",
				RateContName: "狗子快出来",
				RateContTime: "2019-12-28",
				RateContLevel: 5,
				RateContMain: "第一个头盔是爱狮的，当时不懂，属于新手小白。后来通过视频和朋友介绍了解了agv，然后就果断入手了。到货的时候是无比激动，最激动的还是最重要的开箱环节了。头盔拿在手里的第一感觉就是太帅了，简直不要太帅呢，做工这些细节都很好，颜值担当。导购二十八号也很细心，有什么问题立马就回复解决，非常的有耐心，服务态度真的很好👍👍👍，好评"
			},
		],
		// 富文本产品详情
		pruductDetailtest: [{
				pruductDetailtestImg: "https://img.alicdn.com/imgextra/i4/1714128138/O1CN01jnG4XT29zFm3L48QC_!!1714128138.jpg"
			},
			{

				pruductDetailtestImg: "https://img.alicdn.com/imgextra/i4/1714128138/O1CN01jnG4XT29zFm3L48QC_!!1714128138.jpg"
			},
			{
				pruductDetailtestImg: "https://img.alicdn.com/imgextra/i3/1714128138/O1CN01nGLuZs29zFm8rddUN_!!1714128138.jpg"
			},
			{
				pruductDetailtestImg: "https://img.alicdn.com/imgextra/i1/1714128138/O1CN01awYTdb29zFlit5rAZ_!!1714128138.jpg"
			},
			{
				pruductDetailtestImg: "https://img.alicdn.com/imgextra/i2/1714128138/O1CN01RGrGG229zFlWhkU5L_!!1714128138.png"
			}
		],

		productSwiper: [{
			productSwiperImg: "https://img.alicdn.com/imgextra/i2/1714128138/O1CN015Y9VKP29zFmI0HepP_!!0-item_pic.jpg_430x430q90.jpg",
		}, {
			productSwiperImg: "https://img.alicdn.com/imgextra/i2/1714128138/O1CN01DNyaK529zFli16kIt_!!1714128138.jpg_430x430q90.jpg",
		}, {
			productSwiperImg: "https://img.alicdn.com/imgextra/i4/1714128138/O1CN01XwOs2629zFleeXQAh_!!1714128138.jpg_430x430q90.jpg",
		}, {
			productSwiperImg: "https://img.alicdn.com/imgextra/i2/1714128138/O1CN01i5PRVL29zFlcjmFiU_!!1714128138.jpg_430x430q90.jpg",
		}],

		product: [{
				productSwiper: [{
					productSwiperImg: "https://img.alicdn.com/imgextra/i2/1714128138/O1CN015Y9VKP29zFmI0HepP_!!0-item_pic.jpg_430x430q90.jpg",
					productSwiperImg: "https://img.alicdn.com/imgextra/i4/1714128138/O1CN01XwOs2629zFleeXQAh_!!1714128138.jpg_430x430q90.jpg",
					productSwiperImg: "https://img.alicdn.com/imgextra/i2/1714128138/O1CN01DNyaK529zFli16kIt_!!1714128138.jpg_430x430q90.jpg",
				}]
			}]

			,
		visible1: false,
		actions1: [{
				name: '正品保证',
				icon: 'success_fill',
			},
			{
				name: '24H发货',
				icon: 'success_fill',
			},
			{
				name: '自营产品',
				icon: 'success_fill',
			}
		],
		// 产品详情 + 产品评价
		productDetile: [{
			productDetileTitle: "商品详情"
		}, {
			productDetileTitle: "商品评价"
		}],
		// 选中
		ActiveBgColor: 0
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

	// 点击进入优惠券列表
	CouponDetailFun(event) {
		// 先来一波轻提示
		$Toast({
			content: '开发中...',
			type: 'warning'
		});
	},

	// 点击弹出保障服务

	handleOpen() {
		this.setData({
			visible1: true
		});
	},

	handleCancel() {
		this.setData({
			visible1: false
		});
	},

	// 点击选中其一
	productDetileFun(e) {
		this.setData({
			ActiveBgColor: e.currentTarget.dataset.index
		})
	},
	// 点击客服
	ServiceFun() {
		$Toast({
			content: '开发中...',
			type: 'warning'
		})
	},

	// 点击店铺
	ShopFun() {
		$Toast({
			content: '开发中...',
			type: 'warning'
		})
	},

	// 点击收藏
	CollectionFun() {
		$Toast({
			content: '已收藏',
			type: 'success'
		});
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
	// 转发功能
	onShareAppMessage(res) {
		if (res.from === 'button') {
			// 来自页面内转发按钮
			console.log(res.target)
		}
		return {
			title: '自定义转发标题',
			path: '/page/user?id=123'
		}
	},
	//点击加入购物车
	AddCarShopFun()
	{
		console.log("加入购物车");
	}
})