<?php	include "header.php";?>
	<main>
    <div class="order-block">
      <div class="wrapper">
        <div class="order-block__inner">
          <div class="order-block__text">
            <h2 class="order-block__title">Хотите заказать дизайн интерьера <small>но не знаете сколько это стоит?</small></h2>
            <p>Заполните форму и получите бесплатный рассчет стоимости дизайн-проекта от профи</p>
          </div>
          <div class="form order-block__form">
            <h3 class="form__title">Форма расчета стоимости дизайна</h3>
            <form action="" class="form__fields">
              <div>
                <select>
                  <option disabled selected>Выберите тип объекта</option>
                  <option>Тип1</option>
                  <option>Тип2</option>
                </select>
              </div>
              <div><input type="text" placeholder="Укажите квадратуру объекта"></div>
              <div>
                <select>
                  <option disabled selected>Выберите стиль интерьера</option>
                  <option>стиль1</option>
                  <option>стиль2</option>
                </select>
              </div>
              <div>
                <select>
                  <option disabled selected>Укажите местоположение объекта</option>
                  <option>Москва</option>
                  <option>не Москва</option>
                </select>
              </div>
              <div><input type="text" placeholder="Ваше имя:"></div>
              <div><input type="tel" placeholder="Ваш сотовый телефон"></div>
              <div><input type="email" placeholder="Ваща электронная почта"></div>
              <div class="btn btn_block form__btn"><input type="submit" value="Получить рассчет бесплатно"></div>
              <div class="form__label">
                <input type="checkbox" id="ordr" required />
                <label for="ordr">Я принимаю политику обработки <a href="#/">персональных данных</a></label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <section class="section person">
      <div class="wrapper">
        <h2 class="section__title">Рассчет стоимости дизайн-проекта от опытного профессионала</h2>
        <div class="person__inner">
          <div class="person__pic"><img src="img/head_middle.jpg" alt=""></div>
          <div class="person__text">
            <h3>Артем Болдырев</h3>
            <ul>
              <li>Основатель бюро, Главный дизайнер</li>
              <li>85 личных проектов по дизайну интерьера</li>
              <li>Дизайнер Школы ремонта на ТНТ</li>
              <li>Сертифицированный специалист по 3d графике компании Autodesk</li>
              <li>145 проектов по 3d визуализации</li>
              <li>Помог выиграть 23 тендера по мебели с бюджетом от 30 тысяч евро</li>
              <li>Основатель собственной студии дизайна интерьера и архитектуры АС Бюро</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
		<?php	include "form.php";?>	
  </main>
<?php	include "footer.php";?>	