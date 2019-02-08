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
}
$(document).ready(changeTemplate);
$(window).resize(changeTemplate);
//отступ для шапки на некоторых страницах
if($('.top-block').size()){
  $('body').addClass('no-padding');
}
//меню
$('.menu-btn').click(function(){
  $('.header__menu').fadeToggle(200);
})
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
$('.about__slider').on('init reInit',function(){
  var arrows = $(this).find('.slick-arrow');
  //$(this).after('<span class="about__arrows"></span>')
  arrows.wrapAll('<span class="about__arrows" />');
})
$('.about__slider').slick({
  fade:true,
  prevArrow:'<span class="small about__prev icon-arrow-left"></span>',
  nextArrow:'<span class="small about__next icon-arrow-right"></span>'
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
$(document).ready(stagesSlider);
$(window).resize(stagesSlider);

$('.chars__slider').on('init reInit',function(){
  var nav = $(this).find('.chars__dots');
  nav.prependTo(this);
});
$('.chars__slider').on('init reInit beforeChange',function(event,slick,currentSlide,nextSlide){
  var current =  (nextSlide ? nextSlide : 0) + 1,
      count = slick.slideCount,
      visible = +slick.options.slidesToShow;
      
  $(slick.$dots).children('li').removeClass('active');
  
  for(var i = 0; i<visible;i++){
    if(current>count){
      current = current-count
    }
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
  customPaging:function(slider, i){
    return $(slider.$slides[i]).find('.char-card__title').text();
  }
})
$('.cards__slider').slick({
  slidesToShow:4,
  prevArrow:'<span class="cards__prev icon-arrow-left"></span>',
  nextArrow:'<span class="cards__next icon-arrow-right"></span>',
  customPaging:function(){return ''}
})