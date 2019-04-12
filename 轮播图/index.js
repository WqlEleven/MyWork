var btnLeft = document.querySelector('#btnLeft');
var btnRight = document.querySelector('#btnRight');
var control = document.querySelector('.control');
var banner = document.querySelector('#banner');
var links = document.querySelectorAll('.control a');
var ul = document.querySelector('#list');

var index = 0;
var num;

function move(obj, end) {
	clearInterval(num);
	num = setInterval(function() {
		var start = obj.offsetLeft;
		var speed = (end - start) / 10;
		if (start > end) {
			speed = Math.floor(speed);
		} else {
			speed = Math.ceil(speed);
		}
		obj.style.left = start + speed + 'px';
	}, 10)
}

btnRight.onclick = function() {
	if (index == 0) {
		ul.style.left = 0 + 'px';
	}
	links[index].className = '';
	index++;
	var end = -index * 790;
	move(ul, end);
	if (index == 7) {
		index = 0;
	}
	links[index].className = 'active';

}

btnLeft.onclick = function() {
	links[index].className = '';
	index--;
	if (index < 0) {
		ul.style.left = '-5530px'
		index = 6;
	}
	var end = -index * 790;
	move(ul, end);
	links[index].className = 'active';

}


for (var i = 0; i < links.length; i++) {
	links[i].num = i;
}

control.onclick = function(e) {
	var t = e.target;
	if (t.nodeName == 'A') {
		links[index].className = '';
		index = t.num;
		var end = index * -790;
		move(ul, end);
		links[index].className = 'active';
	}

};

// 自动轮播
var flag = setInterval(function() {
	btnRight.onclick();
}, 3000);


// 鼠标进入banner，停止轮播 
banner.onmouseenter = function() {
	clearInterval(flag);
};

// 鼠标离开banner，轮播
banner.onmouseleave = function() {
	flag = setInterval(function() {
		btnRight.onclick();
	}, 3000);

};
