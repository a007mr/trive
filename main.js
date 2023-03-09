// Вызываю с задержкой 3 секунды, чтобы успело загрузиться содержимое страницы
(function() {
  console.log('trive 1: main()');

	var url = window.location.href.toString().trim();
    if (url.indexOf('twitter.com') == -1) {
        return;
    }

	console.log("trive 2 Started");

  setTimeout(function() {
    var target = document.querySelector('[aria-label="Home timeline"]');
    console.log('==== trive target in timeout', target);

    var main = document.querySelector('[role="main"]');

    // Хочу подставить кнопки после формы ввода твита
    // 
    if (target !== null) {
      var before = target.children[3];
    
      var buttons = '<div class="trive__buttons">'
      +'<div class="trive__button">Button trive</div>'
      +'</div>';
    
      var htmlEl = document.createElement('div');
      htmlEl.className = 'trive__wrapper';
      htmlEl.innerHTML = buttons;
    
      target.insertBefore(htmlEl, before);
    }
  }, 3000);

})();

