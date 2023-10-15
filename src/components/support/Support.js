import "../development/development-all.scss";
import "./support.scss";
import { Link } from "react-router-dom";

const Support = (props) => {
  return (
    <div className="support">
      <hr></hr>
      <div className="container">
        <div className="wrapper">
          <div className="info">
            <div className="price">
              Вартість: <strong>300$</strong>
            </div>
            <h2>Технічна підтримка сайту</h2>
            <Link to="/modal">
              <button className="order">Замовити проект</button>
            </Link>
          </div>
          <div className="text">
            <p>
              Зазвичай складні та масштабні проекти для досягнення своїх
              бізнес-цілей потребують постійної підтримки, доопрацювання та
              покращення функціоналу.
            </p>
            <p>
              Ми дуже цінуємо довгострокові та довірчі відносини з клієнтами,
              тому при розробці проекту враховуємо його подальший супровід та
              розвиток.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
