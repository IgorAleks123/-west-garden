var menu = ['Поклонная гора', 'Москва Сити', 'Матвеевский лес', 'Район раменки']

window.onload = function() {
  var mySwiper = new Swiper('.swiper-container_1', {
    	loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function(index, className) {
        return '\
          <div class="box ' + className + '">\
          <div class="text">' + (menu[index]) + '</div>\
          </div>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
};
