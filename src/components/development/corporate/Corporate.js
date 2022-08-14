import "./corporate.scss";

const Corporate = (props) => {
  return (
    <div className="corporate">
      <div className="container">
        <div className="wrapper">
          <div className="info">
            <div className="price">
              Вартість: <strong>300$</strong>
            </div>
            <h2>Створення корпоративного сайту</h2>
            <button className="order">Замовити проект</button>
          </div>
          <div className="text">
            <p>
              Завдання корпоративного сайту - правильна подача інформації про
              компанію, її послуги і товари. Такий тип сайту дозволить поліпшити
              імідж, впізнаваність і комунікацію між користувачами і компанією.
            </p>
            <p>
              Сайт стає єдиним офіційним обличчям вашої компанії в інтернеті.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <a className="arrow" href="#info-detail">
        Детально...
      </a>
      <div className="info-detail" id="info-detail">
        <div className="container">
          <h2>Які завдання вирішує Корпоративний сайт?</h2>

          <div className="row info-detail_text">
            <div className="col-md-4 studio-text">
              <div>
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
            <div className="col-md-4 fadetop animate">
              <div className="studio-text">
                <h3>Масштаб</h3>
                <p>
                  Ви маєте можливість залучити нових клієнтів і партнерів з
                  інших регіонів і країн, тим самим масштабуючи свій бізнес.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
