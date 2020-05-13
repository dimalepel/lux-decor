(function () {
  /* Подмена вьюпорта */
  const viewPort = document.querySelector('[name="viewport"]');
  if (viewPort) {
    if (screen.width < 768) {
      viewPort.setAttribute('content','width=375, user-scalable=yes');
    }
  }
  // Главный слайдер
  function mainSlider(cls) {
    const slider = $(cls);
    if (slider) {
      $(slider).slick({
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><span class="visually-hidden">Назад</span><svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0462589 3.82755L3.71288 0.840227C3.76008 0.801919 3.83235 0.789487 3.8955 0.80953C3.95866 0.829195 4 0.877012 4 0.930029V1.44957C4 1.4828 3.98372 1.51476 3.95442 1.53886L1.06285 3.91734L3.95441 6.29583C3.9837 6.31993 3.99998 6.35189 3.99998 6.38512V6.90466C3.99998 6.95768 3.95864 7.00549 3.89549 7.02516C3.8753 7.0315 3.85414 7.03455 3.83331 7.03455C3.78872 7.03455 3.7451 7.02059 3.71288 6.99446L0.0462589 4.00715C-0.0152712 3.95692 -0.0152712 3.87778 0.0462589 3.82755Z" /></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="visually-hidden">Вперед</span><svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.58289 3.82755L0.918761 0.840227C0.871591 0.801919 0.799376 0.789487 0.736263 0.80953C0.673151 0.829195 0.631836 0.877012 0.631836 0.930029V1.44957C0.631836 1.4828 0.648106 1.51476 0.677382 1.53886L3.56698 3.91734L0.677398 6.29583C0.648121 6.31993 0.631851 6.35189 0.631851 6.38512V6.90466C0.631851 6.95768 0.673167 7.00549 0.736279 7.02516C0.756452 7.0315 0.777594 7.03455 0.798408 7.03455C0.84297 7.03455 0.886565 7.02059 0.918761 6.99446L4.58289 4.00715C4.64438 3.95692 4.64438 3.87778 4.58289 3.82755Z" /></svg></button>',
      });
    }
  }
  //mainSlider('.promo--home');

  // Slick slider for prev/next thumbnails images
  $('.promo--home').slick({
    dots: false,
    slidesToShow: 1,
    autoplay: false,
    prevArrow: '<button type="button" class="slick-prev"><span class="visually-hidden">Назад</span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="visually-hidden">Вперед</span></button>',
  });
  setTimeout(function() {
    $('.slick-prev').prepend('<div class="prev-slick-arrow arrow-icon"><svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0462589 3.82755L3.71288 0.840227C3.76008 0.801919 3.83235 0.789487 3.8955 0.80953C3.95866 0.829195 4 0.877012 4 0.930029V1.44957C4 1.4828 3.98372 1.51476 3.95442 1.53886L1.06285 3.91734L3.95441 6.29583C3.9837 6.31993 3.99998 6.35189 3.99998 6.38512V6.90466C3.99998 6.95768 3.95864 7.00549 3.89549 7.02516C3.8753 7.0315 3.85414 7.03455 3.83331 7.03455C3.78872 7.03455 3.7451 7.02059 3.71288 6.99446L0.0462589 4.00715C-0.0152712 3.95692 -0.0152712 3.87778 0.0462589 3.82755Z" /></svg></div><div class="prev-slick-img slick-thumb-nav"><img src="/prev.jpg" class="img-responsive"></div>');
    $('.slick-next').append('<div class="next-slick-arrow arrow-icon"><svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.58289 3.82755L0.918761 0.840227C0.871591 0.801919 0.799376 0.789487 0.736263 0.80953C0.673151 0.829195 0.631836 0.877012 0.631836 0.930029V1.44957C0.631836 1.4828 0.648106 1.51476 0.677382 1.53886L3.56698 3.91734L0.677398 6.29583C0.648121 6.31993 0.631851 6.35189 0.631851 6.38512V6.90466C0.631851 6.95768 0.673167 7.00549 0.736279 7.02516C0.756452 7.0315 0.777594 7.03455 0.798408 7.03455C0.84297 7.03455 0.886565 7.02059 0.918761 6.99446L4.58289 4.00715C4.64438 3.95692 4.64438 3.87778 4.58289 3.82755Z" /></svg></div><div class="next-slick-img slick-thumb-nav"><img src="/next.jpg" class="img-responsive"></div>');
    get_prev_slick_img();
    get_next_slick_img();
  }, 500);

  $('.promo--home').on('click', '.slick-prev', function() {
    get_prev_slick_img();
  });
  $('.promo--home').on('click', '.slick-next', function() {
    get_next_slick_img();
  });
  $('.promo--home').on('swipe', function(event, slick, direction) {
    if (direction == 'left') {
      get_prev_slick_img();
    }
    else {
      get_next_slick_img();
    }
  });
  $('.slick-dots').on('click', 'li button', function() {
    var li_no = $(this).parent('li').index();
    if ($(this).parent('li').index() > li_no) {
      get_prev_slick_img()
    }
    else {
      get_next_slick_img()
    }
  });
  function get_prev_slick_img() {
    // For prev img
    var prev_slick_img = $('.slick-current').prev('.promo__item').find('img').attr('src');
    //$('.prev-slick-img img').attr('src', prev_slick_img);
    $('.prev-slick-img').css('background-image', 'url(' + prev_slick_img + ')');
    // For next img
    var prev_next_slick_img = $('.slick-current').next('.promo__item').find('img').attr('src');
    //$('.next-slick-img img').attr('src', prev_next_slick_img);
    $('.next-slick-img').css('background-image', 'url(' + prev_next_slick_img + ')');
  }
  function get_next_slick_img() {
    // For next img
    var next_slick_img = $('.slick-current').next('.promo__item').find('img').attr('src');
    //$('.next-slick-img img').attr('src', next_slick_img);
    $('.next-slick-img').css('background-image', 'url(' + next_slick_img + ')');
    // For prev img
    var next_prev_slick_img = $('.slick-current').prev('.promo__item').find('img').attr('src');
    //$('.prev-slick-img img').attr('src', next_prev_slick_img);
    $('.prev-slick-img').css('background-image', 'url(' + next_prev_slick_img + ')');
  }
  // End

  // Открываем мобильное меню
  function openedMobileMenu(clsTrigger, clsTarget, clsClose) {
    const menuTrigger = $(clsTrigger);
    const menuArea = $(clsTarget);
    const menuClose = $(clsClose);
    if (menuTrigger) {
      $(menuTrigger).click(function(event){
        event.preventDefault();
        $(menuArea).addClass('open');
      });
      $(menuClose).click(function(event){
        event.preventDefault();
        $(menuArea).removeClass('open');
      });
    }
  }
  openedMobileMenu('.menu-trigger', '.navigation', '.navigation__close');

  // Слайдер новостей
  function newsSlider(cls) {
    if (cls) {
      const slider = $(cls);
      if (slider) {
        $(slider).slick({
          arrows: false,
          dots: true
        });
      }
    }
  }
  newsSlider('.news__slider');

  // Слайдер в карточке товара
  $('.sliderPrd').slick({
    dots:true,
    arrows: false,
    fade: true,
    dotsClass: 'product-gallery__preview',
    customPaging: function(slick,index) {
      var targetImage = slick.$slides.eq(index).find('img').attr('src');
      return '<img src=" ' + targetImage + ' "/>';
    }
  });

  // Слайдер похожих новостей
  var recommendNews = $('.news--recommended .news-item__wrapper');
  if(recommendNews) {
    $(recommendNews).slick({
      arrows: false,
      dots: true,
      mobileFirst: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  };

  /* Скрипт: Яндекс карта */
  var map = $('#map');
  if(map) {
    ymaps.ready(init);
    function init() {
      var center = [53.67521,23.849444];
      var luxMap = new ymaps.Map('map', {
        center: center,
        zoom: 17,
        controls: []
      });
      let myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "Point",
          coordinates: center
        },
        properties: {
          iconCaption: 'Люкс Декор'
        }
      }, {
        preset: 'islands#blueHomeCircleIcon'
      });
      luxMap.geoObjects.add(myGeoObject);
    }
  }

  // Табы футера
  var desktopWidth = 1200;
  var footerItemTitle = $('.page-footer__item-title');
  if((footerItemTitle) && (window.innerWidth < desktopWidth)) {
    $(footerItemTitle).click(function(event){
      event.preventDefault();
      $(this).toggleClass('active');
    });
  }

  // Наверх
  $('.to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  // Меню каталога
  const subCategoryOpened = $('.category .menu-item-has-children > a');
  if (subCategoryOpened) {
    $(subCategoryOpened).click(function (event) {
      event.preventDefault();
      $(this).parent().toggleClass('open');
    });
  }

})();
