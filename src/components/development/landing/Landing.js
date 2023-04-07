import { useEffect, useState } from "react";
import "../development-all.scss";
import "./landing.scss";
import { Link } from "react-router-dom";

const Landing = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  //перевіряємо розмір вікна
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 

  return (
    <div className="landing">
      <div className="container">
        <div className="wrapper">
          <div className="info">
            <div className="price">
              Вартість: <strong>100$</strong>
            </div>
            <h2>Створення та розробка Landing Page</h2>
            <Link to="/modal">
              <button className="order">Замовити проект</button>
            </Link>
          </div>
          <div className="text">
            <p>
              Landing page - це односторінкова посадкова сторінка, завдання якої
              спонукати користувача зробити цільову дію. Така дія може бути
              спрямована на оформлення замовлення, онлайн оплату або просто
              отримання даних потенційного клієнта.
            </p>
            <p>
              Ми займаємося розробкою лендингів з високою конверсією, з упором
              на дизайн та легкість сприйняття інформації користувачем.
            </p>
          </div>
        </div>
      </div>
      <a className="arrow" href="#info-detail" onClick={handleClick}>
        Детально...
      </a>

      <div className="info-detail" id="info-detail">
        <div className="container">
          <h2>Які завдання вирішує Landing page?</h2>

          <div className="row info-detail_text">
            <div className="col-md-4 studio-text">
              <div>
                <h3>Швидкий старт </h3>
                <p>
                  Запуск лендингу забезпечить отримання заявок/продажів
                  максимально швидко, порівняно із запуском інтернет-магазину
                  або бізнес-сайту.
                </p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="studio-text">
                <h3>Конверсія</h3>
                <p>
                  Лендінг прекрасно працює на продаж. Сторінка повністю
                  концентрує увагу на продукт або послугу.
                </p>
              </div>
            </div>
            <div className="col-md-4 fadetop animate">
              <div className="studio-text">
                <h3>Збільшення прибутку</h3>
                <p>
                  За допомогою лендінгу, ви можете запускати нові продукти чи
                  послуги окремо від основного сайту.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {windowWidth > 600 && <a className="arrow" href="#steps" onClick={handleClick}>
          Етапи створення...
        </a>}

          {windowWidth > 600 && 
         
          <div className="steps" id="steps">
        <div className="container">
          <div className="steps-wrap d-flex">
            <div className="steps-item">
              <div className="steps-level"></div>
              <div className="steps-text">
                <h3>Аналіз</h3>
                <p>
                  Досліджуємо тематику вашого бізнесу, аналізуємо конкурентів.
                </p>
              </div>
            </div>
            <div className="steps-item ">
              <div className="steps-level"></div>
              <div className="steps-text">
                <h3>Дизайн</h3>
                <p>
                  Розробляємо дизайн, який залишає яскраве враження про
                  компанію.
                </p>
              </div>
            </div>

            <div className="steps-item ">
              <div className="steps-level"></div>
              <div className="steps-text">
                <h3>Розробка</h3>
                <p>
                  Робимо сайт з інтерактивним дизайном, динамічними елементами і
                  адаптивною версткою.
                </p>
              </div>
            </div>

            <div className="steps-item ">
              <div className="steps-level"></div>
              <div className="steps-text">
                <h3>Запуск</h3>
                <p>Підтримуємо сайт, допомагаємо управляти контентом.</p>
              </div>
            </div>
          </div>
        </div>
      </div>}
     
    </div>
  );
};

export default Landing;
