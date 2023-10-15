import { useEffect, useState } from "react";
import "../development-all.scss";
import "./cardsite.scss";

const Cardsite = (props) => {
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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="cardsite">
      <div className="container">
        <div className="wrapper">
          <div className="info">
            <div className="price">
              Вартість: <strong>100$</strong>
            </div>
            <h2>Створення та розробка сайта візитки</h2>
            <button className="order">Замовити проект</button>
          </div>
          <div className="text">
            <p>
              Розробка сайту-візитки, як правило, відбувається швидко завдяки
              малій кількості сторінок. Ви обговорюєте з нами тематику,
              стверджуєте макет і в короткий термін отримуєте готовий ресурс.
            </p>
            <p>
              Навіть такий простий сайт, як візитка, можна зробити цікавим і
              нестандартним, якщо підійти до розробки творчо. Ми «живемо» кожним
              проектом, тому не пропонуємо банальних рішень.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <a className="arrow" href="#info-detail" onClick={handleClick}>
        Детально...
      </a>
      <div className="info-detail" id="info-detail">
        <div className="container">
          <h2>Які завдання вирішує сайт візитка?</h2>

          <div className="row info-detail_text">
            <div className="col-md-4 ">
              <div className="studio-text">
                <h3>Позиціонування</h3>
                <p>
                  Сайт створює перше враження і транслює філософію компанії,
                  покращуючи імідж на ринку.
                </p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="studio-text">
                <h3>Маркетинг</h3>
                <p>
                  За допомогою сайту можлива рекламна кампанія по просуванню
                  вашого бізнесу в інтернеті.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="studio-text">
                <h3>Інформування</h3>
                <p>
                  На сайті представлена вся інформація про компанію, описи її
                  діяльності та послуг.
                </p>
              </div>
            </div>
          </div>
        </div>
        {windowWidth > 600 && (
          <a className="arrow" href="#steps" onClick={handleClick}>
            Етапи створення...
          </a>
        )}
      </div>

      {windowWidth > 600 && (
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
                    Робимо сайт з інтерактивним дизайном, динамічними елементами
                    і адаптивною версткою.
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
        </div>
      )}
    </div>
  );
};

export default Cardsite;
