//Карта
if($('#map').length){
	ymaps.ready(init);
	function init(){
		var myMap = new ymaps.Map("map", {
			center: [55.761297, 37.662959],
			zoom: 17
		});
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), 
		{
			hintContent: 'AC-бюро',
			balloonContent: 'Дизайн-студия'
		},{
			preset: 'islands#dotIcon',
      iconColor: '#80cfef'
		});
    
    myMap.geoObjects.add(myPlacemark);
    //myMap.behaviors.disable('scrollZoom')
  }	
};
//
function is_mobile(){
  return $(window).width()<992;
}
//основная функция для манипуляций с DOM
function changeTemplate(){
  if(is_mobile()){
    $('.social').insertAfter('.consult');
  }else{
    $('.simile__item').css('display','');
    $('.social').insertBefore('.consult');
  }
  placeForHeader();
  stagesSlider();
  charsSlider();
  cardsSlider();
}
$(document).ready(changeTemplate);
$(window).resize(changeTemplate);
//отступ для шапки на некоторых страницах
function placeForHeader(){
  if(!$('.top-block,.order-block').size()){
    $('body').css('padding-top',$('.header').outerHeight());
  }
}

//меню
$('.menu-btn').click(function(){
  $('.header__menu').fadeToggle(200);
})
//табы в сайдбаре
$('.posts-widget__head a').each(function(){
  var index = $(this).index(),
      tab = $(this).parents('.posts-widget').find('.posts-widget__item').eq(index);
  if(!$(this).is('.active')){
    tab.hide();
  }
});
//аккордеон
$('.accord__btn a').click(function(e){
  e.preventDefault();
  $(this).parent().toggleClass('btn_thin');
  $(this).parents('.accord__item').toggleClass('active');
  $(this).parents('.accord__item').find('.accord__toggle').slideToggle(100);
  var normalText = $(this).data('normal'),
      activeText = $(this).data('active');
      
  if($(this).parent().is('.btn_thin') && activeText){
    $(this).text(activeText);
  }
  if(!$(this).parent().is('.btn_thin') && normalText ){
    $(this).text(normalText);
  }
})
$('.posts-widget__head a').click(function(e){
   e.preventDefault();
  var index = $(this).index();
  $(this).parents('.posts-widget').find('.posts-widget__item').hide().eq(index).fadeIn(300);
  //$(this).parents('.post-widget').find('.post-widget__item')
  $(this).addClass('active');
  $(this).siblings('.active').removeClass('active');
});
//Пошаговая форма
$('.step-form__body').on('init reInit',function(){
  $(this).find('.step-form__item:not(:last-child)').append('<div class="btn step-form__next"><a href="#">Далее</a></div>');
  $(this).append('<div class="step-form__progress"><span></span></div>');
})
$('.step-form__body').on('click','.step-form__next', function(e){
  e.preventDefault();
  $(this).parents('.step-form__body').slick('slickNext');
})
$('.step-form__body').on('init reInit afterChange',function(event,slick,currentSlide){
  var i =  (currentSlide ? currentSlide : 0) + 1,
      part = i/slick.slideCount*100 + '%';
  $(this).parents('.step-form').find('.step-form__progress span').width(part);
})
$('.step-form__body').slick({
  accessibility:false,
  arrows:false,
  dots:true,
  speed:300,
  dotsClass:'step-form__nav',
  fade:true,
  infinite:false,
  customPaging:function(slider,i){return i+1}
})
//переключение картинок
$('.simile__btn a').click(function(e){
  e.preventDefault();
  $(this).parents('.simile__item').hide();
  $(this).parents('.simile__item').siblings('.simile__item').show();
})
//Слайдеры
$('.portfolio__slider').slick({
  slidesToShow:2,
  slidesToSroll:2,
  prevArrow:'<span class="portfolio__prev icon-arrow-left"></span>',
  nextArrow:'<span class="portfolio__next icon-arrow-right"></span>',
  dots:true,
  dotsClass:'slick-dots portfolio__dots',
  customPaging:function(){return ''},
  responsive:[
    {
      breakpoint:992,
      settings:{
        slidesToShow:1
      }
    }
  ]
})
$('.about__slider').on('init reInit',function(event,slick){
  var arrows = $(this).find('.slick-arrow');
  //$(this).after('<span class="about__arrows"></span>')
  arrows.wrapAll('<span class="about__arrows" />');
  $(slick.$slides).find('.video-card').css('display','');
})
$('.about__slider').slick({
  fade:true,
  prevArrow:'<span class="small about__prev icon-arrow-left"></span>',
  nextArrow:'<span class="small about__next icon-arrow-right"></span>',
  rows:3
})

function stagesSlider(){
  if($(window).width()<1680){
    $('.stages__box').not('.slick-initialized').slick({
      dots:true,
      dotsClass:'stages__dots slick-dots',
      customPaging:function(){return ''},
      prevArrow:'<span class="stages__prev icon-arrow-left"></span>',
      nextArrow:'<span class="stages__next icon-arrow-right"></span>',
      mobileFirst:true,
      responsive:[
        {
          breakpoint:1679,
          settings:'unslick'
        },{
          breakpoint:480,
          settings:{
            variableWidth:true
          }
        }
      ]
    })
  }
}

$('.chars__slider,.chars__box').on('init reInit beforeChange',function(event,slick,currentSlide,nextSlide){
  var current =  (nextSlide ? nextSlide : 0) + 1,
      count = slick.slideCount,
      visible = +slick.options.slidesToShow;
      
  $(slick.$dots).children('li').removeClass('active');
  
  for(var i = 0; i<visible;i++){
    /* if(current>count){
      current = current-count
    } */
    current = current%count;
    $(slick.$dots).children('li').eq(current-1).addClass('active');
    current++
  }
  
});

$('.chars__slider').slick({
  slidesToShow:3,
  dots:true,
  dotsClass:'chars__dots',
  prevArrow:'<span class="chars__prev icon-arrow-left"></span>',
  nextArrow:'<span class="chars__next icon-arrow-right"></span>',
  centerPadding:0,
  customPaging:function(slider, i){
    return $(slider.$slides[i]).find('.char-card__title').text();
  },
  responsive:[
    {
      breakpoint:1200,
      settings:{
        slidesToShow:2
      }
    },{
      breakpoint:992,
      settings:{
        slidesToShow:2,
        dotsClass:'slick-dots',
        customPaging:function(){return ''}
      }
    },{
      breakpoint:768,
      settings:{
        variableWidth:true,
        centerMode:true,
        dotsClass:'slick-dots',
        customPaging:function(){return ''}
      }
    }
  ]
})
/*Сворачивание в слайдер идет с опцией mobileFirst, поэтому начальные опции и точки трансформации отличаются от аналогичных в изначальном слайдере*/
function charsSlider(){
  if($(window).width()<1200){
    $('.chars__box').not('.slick-initialized').slick({
      slidesToShow:2,
      dots:true,
      dotsClass:'slick-dots',
      prevArrow:'<span class="chars__prev icon-arrow-left"></span>',
      nextArrow:'<span class="chars__next icon-arrow-right"></span>',
      customPaging:function(){return ''},
      variableWidth:true,
      centerMode:true,
      mobileFirst:true,
      responsive:[
        {
          breakpoint:1199,
          settings:'unslick'
        },{
          breakpoint:767,
          settings:{
            variableWidth:false,
            centerMode:false,
            dotsClass:'chars__dots',
            customPaging:function(slider, i){
              return $(slider.$slides[i]).find('.char-card__title').text();
            }
          }
        }
      ]
    })
  }
}
$('.cards__slider').slick({
  slidesToShow:4,
  prevArrow:'<span class="cards__prev icon-arrow-left"></span>',
  nextArrow:'<span class="cards__next icon-arrow-right"></span>',
  dotsClass:'slick-dots cards__dots',
  customPaging:function(){return ''},
  centerPadding:0,
  responsive:[
    {
      breakpoint:1200,
      settings:{
        slidesToShow:3
      }
    },{
      breakpoint:992,
      settings:{
        slidesToShow:2,
        dots:true
      }
    },{
      breakpoint:768,
      settings:{
        slidesToShow:1,
        variableWidth:true,
        centerMode:true,
        dots:true
      }
    }
  ]
})
function cardsSlider(){
  if($(window).width()<1200){
    $('.cards__box').not('.slick-initialized').slick({
      slidesToShow:1,
      prevArrow:'<span class="cards__prev icon-arrow-left"></span>',
      nextArrow:'<span class="cards__next icon-arrow-right"></span>',
      customPaging:function(){return ''},
      dotsClass:'slick-dots cards__dots',
      dots:true,
      variableWidth:true,
      centerMode:true,
      mobileFirst:true,
      responsive:[
        {
          breakpoint:1199,
          settings:'unslick'
        },{
          breakpoint:991,
          settings:{
            slidesToShow:3,
            variableWidth:false,
            centerMode:false,
            dots:false
          }
        },{
          breakpoint:767,
          settings:{
            slidesToShow:2,
            variableWidth:false,
            centerMode:false,
            dots:false
          }
        }
      ]
    })
  }
}
$('.styles__slider').slick({
  variableWidth:true,
  centerMode:true,
  centerPadding:0,
  prevArrow:'<span class="angle styles__prev icon-angle-left"></span>',
  nextArrow:'<span class="angle styles__next icon-angle-right"></span>',
  dots:true,
  dotsClass:'styles__dots',
  customPaging:function(slider, i){
    return $(slider.$slides[i]).data('title');
  },
  responsive:[
    {
      breakpoint:1200,
      settings:{
        variableWidth:false,
        centerMode:false
      }
    }
  ]
})