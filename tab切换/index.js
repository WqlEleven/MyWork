//一、遍历所有LI节点
// var lis = document.querySelectorAll('.tab-control li');
// var divs = document.querySelectorAll('.tab-content-item');
// var i = 0;
// for (; i < lis.length; i++) {
// 	lis[i].index = i;
// 	lis[i].onmouseenter = function() {
// 		var j = 0;
// 		for (; j < lis.length; j++) {
// 			lis[j].className = '';
// 			divs[j].className = 'tab-content-item';
// 		}
// 		this.className = 'active';
// 		var num = this.index;
// 		divs[num].className = 'tab-content-item active';
// 	}
// }


//二、事件委托
var ul = document.querySelector('.tab-control');
var lis = document.querySelectorAll('.tab-control li');
var divs = document.querySelectorAll('.tab-content > div');
var num = 0;
// var symbol = true;
ul.onmouseover = function (e) {//onmouseenter不支持冒泡
	// console.log(e.target.nodeName)
	// if(!symbol){
	// 	return;
	// }
	if (e.target.nodeName === 'LI') {
		// console.log(e.target)
		var i = 0;
		for (; i < lis.length; i++) {
			var index;
			lis[i].className = '';
			divs[i].className = 'tab-content-item';
			if (lis[i] === e.target) {
				index = i;
			}
		}
	}
	// console.log(index)
	lis[index].className = 'active';
	divs[index].className = 'tab-content-item active';
	mark = index;
	// symbol = true;
}
//自动轮播
function autoPlay() {
	var timer = setInterval(function () {
		num++;
		if (num === lis.length) {
			num = 0;
		}
		for (var j = 0; j < lis.length; j++) {
			lis[j].className = '';
			divs[j].className = 'tab-content-item';
		}
		lis[num].className = 'active';
		divs[num].className = 'tab-content-item active';
	}, 2000)
}
// autoPlay();
//函数节流
//函数预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期
// function throttle(method, duration) {
// 	var begin = new Date();
// 	return function () {
// 		var context = this, args = arguments, current = new Date();
// 		if (current - begin >= duration) {
// 			method.apply(context, args);
// 			begin = current;
// 		}
// 	}
// }
// window.onmouseover = throttle(onmouseover, 500);