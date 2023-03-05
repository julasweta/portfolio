import "../development/development-all.scss";
import "./portfolio.scss";
import { NavLink } from "react-router-dom";
import SingleSite from "./singleSite/SingleSite";
import { useState } from "react";

const Portfolio = (props) => {
  const [idPost, setPost] = useState(1);

  const getIdPost = (id) => {
    setPost(id);
  };

  const hoverOn = (e) => {
    let id = e.target.parentElement.parentElement.dataset.key;
    let li = document.querySelector(`[data-key="${id}"]`);
    li.children[0].children[0].innerText = props.info.sites[id - 1].short;
    li.children[0].children[0].classList.add("active");
    li.children[0].children[1].classList.add("active-img");
  };

  const hoverOut = (e) => {
    let id = e.target.parentElement.parentElement.dataset.key;
    let li = document.querySelector(`[data-key="${id}"]`);
    li.children[0].children[0].innerText = props.info.sites[id - 1].name;
    li.children[0].children[0].classList.remove("active");
    li.children[0].children[1].classList.remove("active-img");
  };

  const allItems = (arr) => {
    const items = arr.map((item, index) => {
      // записуємо кожний пост
      return (
        <li key={item.id} className="site" data-key={item.id}>
          {" "}
          <NavLink to="single/" onClick={() => getIdPost(item.id)}>
            <div className="site_name">{item.name}</div>

            <img
              src={
                process.env.PUBLIC_URL +
                `/images/${item.img}.png`
              }
              alt="My Image"
              onMouseOver={hoverOn}
              onMouseOut={hoverOut}
            />
          </NavLink>
        </li>
      );
    });
    //записуємо всі пости
    return <ul>{items}</ul>;
  };

  return (
    <div className="portfolio">
      <hr></hr>
      <div className="container">
        <div className="items">{allItems(props.info.sites)}</div>
      </div>
      <SingleSite idPost={idPost} info={props.info}></SingleSite>
    </div>
  );
};

export default Portfolio;
