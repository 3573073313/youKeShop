//index.js
//获取应用实例
const app = getApp();
Page({
	data: {
		title: '商城所有产品均已经消毒处理',
		// 倒计时
		myFormat1: ['天', '时', '分', '秒'],
		targetTime1: 0,
		// swiper的参数
		image: [{
				imageUrl: "https://group.dmeit.cn/banner_jifens_02.png"
			},
			{
				imageUrl: "https://group.dmeit.cn/banner1.png"
			}
		],
		// 分类列表数据
		NavTo: [{
				NavToIcon: "/images/icon_56.png",
				NavToTxt: "秒杀",
				NavToUrl: "seckill"
			},
			{
				NavToIcon: "/images/icon_12.png",
				NavToTxt: "拼团",
				NavToUrl: "assemble"
			},
			{
				NavToIcon: "/images/icon_17.png",
				NavToTxt: "砍价"
			},
			{
				NavToIcon: "/images/icon_05.png",
				NavToTxt: "快速购买"
			},
			{
				NavToIcon: "/images/icon_13.png",
				NavToTxt: "优惠券"
			},
			{
				NavToIcon: "/images/icon_11.png",
				NavToTxt: "积分兑换",
				NavToUrl: "Integral"
			},
			{
				NavToIcon: "/images/icon_32.png",
				NavToTxt: "店铺街",
				NavToUrl: "shopStreet"
			},
			{
				NavToIcon: "/images/icon_30.png",
				NavToTxt: "九块九"
			},
			{
				NavToIcon: "/images/icon_43.png",
				NavToTxt: "品牌街",
				NavToUrl: "brandPurchase"
			},
			{
				NavToIcon: "/images/icon_39.png",
				NavToTxt: "会员卡"
			},
		],

		// 秒杀产品数据
		SeckillProduct: [{
				"SeckillImg": "/images/img/Seriscll_product.jpg",
				"SeckillMoney": 5000,
				"SeckillMoneyP": 6500
			},
			{
				"SeckillImg": "/images/img/Seriscll_product.jpg",
				"SeckillMoney": 4200,
				"SeckillMoneyP": 5500
			},
			{
				"SeckillImg": "/images/img/Seriscll_product.jpg",
				"SeckillMoney": 6000,
				"SeckillMoneyP": 7000
			},
			{
				"SeckillImg": "/images/img/Seriscll_product.jpg",
				"SeckillMoney": 5000,
				"SeckillMoneyP": 6500
			},
			{
				"SeckillImg": "/images/img/Seriscll_product.jpg",
				"SeckillMoney": 4200,
				"SeckillMoneyP": 5500
			},
			{
				"SeckillImg": "/images/img/Seriscll_product.jpg",
				"SeckillMoney": 6000,
				"SeckillMoneyP": 7000
			},
			{
				"SeckillImg": "/images/img/Seriscll_product.jpg",
				"SeckillMoney": 5000,
				"SeckillMoneyP": 6500
			},
			{
				"SeckillImg": "/images/img/Seriscll_product.jpg",
				"SeckillMoney": 4200,
				"SeckillMoneyP": 5500
			},
			{
				"SeckillImg": "/images/img/Seriscll_product.jpg",
				"SeckillMoney": 6000,
				"SeckillMoneyP": 7000
			},
		],

		// 推荐产品数据
		Product: [{
				"ProductImg": "/images/img/product_img.jpg",
				"ProductTitle": "小米10 双模5G 骁龙865 1亿像素8K电影相机 对称式立体声 8GB+256GB 钛银黑 拍照智能游戏手机",
				"ProductMoney": 4299.00,
				"ProductTypes": "自营产品",
				"ProductGuarantee": "保障产品"

			},
			{
				"ProductImg": "/images/img/product_img.jpg",
				"ProductTitle": "小米10 双模5G 骁龙865 1亿像素8K电影相机 对称式立体声 8GB+256GB 钛银黑 拍照智能游戏手机",
				"ProductMoney": 699,
				"ProductTypes": "自营产品",
				"ProductGuarantee": "保障产品"

			},
			{
				"ProductImg": "/images/img/product_img.jpg",
				"ProductTitle": "小米10 双模5G 骁龙865 1亿像素8K电影相机 对称式立体声 8GB+256GB 钛银黑 拍照智能游戏手机",
				"ProductMoney": 499,
				"ProductTypes": "自营产品",
				"ProductGuarantee": "保障产品"

			},

			{
				"ProductImg": "/images/img/product_img.jpg",
				"ProductTitle": "小米10 双模5G 骁龙865 1亿像素8K电影相机 对称式立体声 8GB+256GB 钛银黑 拍照智能游戏手机",
				"ProductMoney": 4299,
				"ProductTypes": "品牌99节",
				"ProductGuarantee": "保障产品"

			}

		],

		indicatorDots: true,
		vertical: false,
		autoplay: false,
		interval: 2000,
		duration: 500
	},

	// 页面加载执行
	onLoad() {
		this.setData({
			targetTime: new Date().getTime() + 6430000
		})
		let that = this;
		console.log(that.data);
	},

	onUnload() {
		this.setData({
			clearTimer: true
		});
	},

	// 点击首页广告位进行跳转
	AdverNavFun: function (e) {
		console.log(e)
	},

	// 秒杀产品点击跳转详情页
	SeckillFun(e) {
		console.log("进入秒杀详情");
		wx.navigateTo({
			url: '../seckill_detail/seckill_detail',
		})
	},

	// 点击秒杀更多
	SeckillMore() {
		wx.navigateTo({
			url: '../seckill/seckill',
		})
	},

	// 点击立即兑换跳转
	Integral() {
		wx.navigateTo({
			url: '../Integral_mall/Integral_mall',
		})
	},

	// 产品点击事件
	ProductImg(e) {
		// 定义一个获取下标的常量
		const products = e.currentTarget.dataset.index + 1;
		// 打印输出下标
		console.log(products);
		// 进入详情页
		wx.navigateTo({
			url: '../product_detail/product_detail',
		})
	},
	// 点击品牌街
	brandPurchase() {
		wx.navigateTo({
			url: '../brand_Purchase/brand_Purchase',
		})
	},

	// 点击获取当前的下标
	NavToClickFun(e) {
		console.log(e)
		console.log(e.currentTarget.dataset.index);
	},

	// 点击返回顶部
	goTop(e) {
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

	// 点击排行榜进入
	rankingFun() {
		wx.showToast({
			title: '请稍后',
			icon: 'none'
		});
		wx.navigateTo({
			url: '../ranking/ranking',
		})
	},

	// 每日特价跳转
	specialFun() {
		wx.showToast({
			title: '请稍后',
			icon: 'none'
		});
		wx.navigateTo({
			url: '../daily_specials/daily_specials',
		})
	},

	// 今日拼团跳转
	assembleFun() {
		wx.showToast({
			title: '请稍后',
			icon: 'none'
		});
		wx.navigateTo({
			url: '../assemble/assemble',
		})
	},
	// 秒杀跳转
	seckill() {
		wx.navigateTo({
			url: '../seckill/seckill',
		})
	},

	// 拼团跳转
	assemble() {
		wx.navigateTo({
			url: '../assemble/assemble',
		})
	},
	// 点击商铺街
	shopStreet() {
		wx.navigateTo({
			url: '../shopStreet/shopStreet',
		})
	},
})