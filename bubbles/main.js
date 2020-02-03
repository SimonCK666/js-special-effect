(function (w,d) {
	/* body... */

	// document.querySelector(CSS selectors) querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素
	var bubbles = d.querySelector('.bubbles');

	// 确定浏览器的宽度
	var bubblesWidth = bubbles.clientWidth;

	// element.getAttribute(attributename) getAttribute() 方法通过名称获取属性的值
	var num = bubbles.getAttribute('num');

	
	// 	setInterval(code, milliseconds);	
	// setInterval(function, milliseconds, param1, param2, ...)
	// setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
	var duration = bubbles.getAttribute('duration');

	bubbleUp();
	setInterval(bubbleUp, duration * 1000);

	function bubbleUp() {
        bubbles.innerHTML = '';
        for(var i = 0; i < num; i++) {
          var bubbleDiv = d.createElement('div');
          bubbleDiv.classList.add('bubble');
          bubbleDiv.style.cssText = `
            transform: translate(${bubblesWidth * Math.random()}px, 0) scale(${5 * Math.random()});
            animation: up ${duration * Math.random() + 1}s ease-in-out;
          `
          bubbles.appendChild(bubbleDiv);
        };
      };

})(window,document);