 	function  rem(){
		document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px";
	 }
	  rem();
	//事件  onresize当屏幕的尺寸发生改变的时候会触发该事件
	window.onresize=rem;
	// (function(doc, win) {
	// 	var docEl = doc.documentElement,
	// 		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	// 		recalc = function() {
	// 			var clientWidth = docEl.clientWidth;
	// 			if (!clientWidth) return;
	// 			docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
	// 		};
	// 	if (!doc.addEventListener) return;
	// 	win.addEventListener(resizeEvt, recalc, false);
	// 	doc.addEventListener('DOMContentLoaded', recalc, false);
	// })(document, window);
