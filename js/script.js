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