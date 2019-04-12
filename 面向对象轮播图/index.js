//创建函数Carousel
function Carousel(options) {
	this.banner = options.banner; //轮播区域
	this.content = options.content; // 轮播项
	this.list = options.list; //ul
	this.li = options.li; // li
	this.btnLeft = options.btnLeft;
	this.btnRight = options.btnRight;
	this.control = options.control;
	this.links = options.links; //小圆点
	this.index = options.index;
	this.num = options.num;
	this.SetTimer = null;
	this.eventType = options.eventType || 'click';
	this.ulWidth = options.ulWidth || '-5530px';
	this.liWidth = options.liWidth || 790;
	this.left();
	this.right();
	this.changeNum();
	this.autoCarousel(); //自动轮播
	this.controlClick();
}
//
Carousel.prototype.move = function(obj, end) {
	const _this = this;
	clearInterval(_this.num);
	_this.num = setInterval(function() {
		const start = obj.offsetLeft;
		let speed = (end - start) / 10;
		if (start > end) {
			speed = Math.floor(speed);
		} else {
			speed = Math.ceil(speed);
		}
		obj.style.left = start + speed + 'px';
	}, 10)
}
//左
Carousel.prototype.left = function() {
	const _this = this;
	const btnRight = document.querySelector(this.btnRight)
	const ul = document.querySelector(this.list)
	const links = document.querySelectorAll(this.links)
	const links_lenghth = links.length
	btnLeft.addEventListener(_this.eventType, function() {
		links[_this.index].className = '';
		_this.index--;
		if (_this.index < 0) {
			ul.style.left = _this.ulWidth;
			_this.index = links_lenghth -1;
		}
		let end = -_this.index * _this.liWidth;
		_this.move(ul, end);
		links[_this.index].className = 'active';
	})
}
//右
Carousel.prototype.right = function() {
	const _this = this;
	const btnRight = document.querySelector(this.btnRight)
	const ul = document.querySelector(this.list)
	const links = document.querySelectorAll(this.links)
	const links_lenghth = links.length
	btnRight.addEventListener(_this.eventType, function() {
		if (_this.index == 0) {
			ul.style.left = 0 + 'px';
		}
		links[_this.index].className = '';
		_this.index++;
		let end = -_this.index * _this.liWidth;
		_this.move(ul, end);
		if (_this.index == links_lenghth) {
			_this.index = 0;
		}
		links[_this.index].className = 'active';
	})
}
Carousel.prototype.changeNum = function() {
	const _this = this;
	const links = document.querySelectorAll(this.links)
	for (let i = 0; i < links.length; i++) {
		let num = _this.num
		links[i].num = i;
	}
}
//点击dots
Carousel.prototype.controlClick = function() {
	const _this = this;
	const control = document.querySelector(this.control)
	const links = document.querySelectorAll(this.links)
	const ul = document.querySelector(this.list)
	control.addEventListener(this.eventType, function(event) {
		const node = event.target;
		if (node.nodeName == 'A') {
			links[_this.index].className = '';
			_this.index = node.num;
			const end = _this.index * -_this.liWidth;
			_this.move(ul, end)
			links[_this.index].className = 'active';
		}
	})
}
//自动轮播
Carousel.prototype.autoCarousel = function() {
	const _this = this;
	const btnRight = document.querySelector(this.btnRight)
	const ul = document.querySelector(this.list)
	const links = document.querySelectorAll(this.links)
	const links_lenghth = links.length
	_this.SetTimer = setInterval(function() {	
		if (_this.index == 0) {
			ul.style.left = 0 + 'px';
		}
		links[_this.index].className = '';
		_this.index++;
		_this.index = _this.index-1;
		let end = -_this.index * _this.liWidth;
		_this.move(ul, end);
		if (_this.index == links_lenghth) {
			_this.index = 0;
		}
		links[_this.index].className = 'active';
	}, 3000)	
}
const options = {
	banner: '.banner',
	content: 'content',
	list: '#list',
	li: 'li',
	btnLeft: '.btnLeft',
	btnRight: '.btnRight',
	control: '.control',
	links: '.control a',
	num: '',
	index: 0,
	ulWidth:'-5530px',
	liWidth:790
}
new Carousel(options);
