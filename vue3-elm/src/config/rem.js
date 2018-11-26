// 根据屏幕大小配置字体默认大小
(function(doc,win){
	var docEl = doc.documentElement,
		reseizeEvt = 'orientationchange' in window ? 'orientataionchange' : 'resize', // 兼容横竖屏
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			var bfontSize = 20
			if(!clientWidth) return false
			clientWidth > 320 ? bfontSize = 20 : bfontSize = 12 
			docEl.style.fontSize = bfontSize * (clientWidth/320) + 'px' 
		};
	if (!doc.addEventListener)	return;
	win.addEventListener(reseizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document,window)