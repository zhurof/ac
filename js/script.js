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
//другие слайдеры
$('.portfolio__slider').slick({
  slidesToShow:2,
  slidesToSroll:2,
  prevArrow:'<span class="portfolio__prev icon-arrow-left"></span>',
  nextArrow:'<span class="portfolio__next icon-arrow-right"></span>',
  dots:true,
  dotsClass:'slick-dots portfolio__dots',
  customPaging:function(){return ''}
})
$('.about__slider').on('init reInit',function(){
  var arrows = $(this).find('.slick-arrow');
  //$(this).after('<span class="about__arrows"></span>')
  arrows.wrapAll('<span class="about__arrows" />');
})
$('.about__slider').slick({
  prevArrow:'<span class="small about__prev icon-arrow-left"></span>',
  nextArrow:'<span class="small about__next icon-arrow-right"></span>'
})