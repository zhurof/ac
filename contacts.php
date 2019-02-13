<?php	include "header.php";?>
  <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
	<main>
    <div class="wrapper">
      <h1>Контакты</h1>
    </div>
    <div class="contacts">
      <div class="wrapper">
        <div class="contacts__inner">
          <div class="contacts__main">
            <h2 class="contacts__title">Подписывайтесь на нас <br>в социальных сетях и ставьте лайки</h2>
            <div class="subscribe">
              <a href="#/"><img src="img/icons/blog.svg" alt=""></a>
              <a href="#/"><img src="img/icons/facebook.svg" alt=""></a>
              <a href="#/"><img src="img/icons/youtube1.svg" alt=""></a>
              <a href="#/"><img src="img/icons/vk.svg" alt=""></a>
              <a href="#/"><img src="img/icons/instagram_brown.svg" alt=""></a>
              <a href="#/"><img src="img/icons/pinterest.svg" alt=""></a>
            </div>
            <div class="contacts__text">
              <p>м. Курская, Нижний Сусальный переулок, 5 строение 17, Территория творческого завода "ARMA"</p>
              <p>ПН - ПТ : с 10:00 по 19:00 <br>СБ : Выходной <br>ВС : Выходной</p>
              <p>8 (499) 674-06-71</p>
              <h2>Почта для поставщиков <br>и предложений</h2>
              <p>OFFER@A-S-BURO.COM</p>
            </div>
          </div>
          <div class="form contacts__form">
            <h3 class="form__title">Рассчитать стоимость дизайн-проекта</h3>
            <p>Отпраьте анкету и наш главный дизайнер перезвонит вам и сориентирует вас по стоимости вашего дизайна</p>
            <form action="" class="form__fields">
              <div><input type="text" placeholder="Ваше имя:"></div>
              <div><input type="text" placeholder="Номер телефона"></div>
              <div><textarea rows="7" placeholder="Напишите, чем мы можем Вам помочь"></textarea></div>
              <div class="btn btn_block form__btn"><input type="submit" value="Получить консультацию"></div>
            </form>
            <div class="form__notice">Нажимая на кнопку Получить консультацию <br>я даю согласие на обработку персональных данных!</div>
          </div>
        </div>
      </div>
    </div>
    <div class="map" id="map"></div>
		<?php	include "form.php";?>	
  </main>
<?php	include "footer.php";?>	