import { NavLink } from "react-router-dom";
import SingleSite from "./singleSite/SingleSite";
import { useState } from "react";
import "./portfolio.scss";
import "../development/development-all.scss";

const Portfolio = (props) => {
  const [idPost, setPost] = useState(1);
  const [activeBoard, setActiveBoard] = useState(1);
  const getIdPost = (id) => {
    setPost(id);
  };

  const onActiveBoard = (id) => {
    setActiveBoard(id);
    getIdPost(id);
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
        <li
          key={item.id}
          className={`site ${activeBoard === item.id && "active-board"}`}
          data-key={item.id}
        >
          {" "}
          <NavLink to="single/" onClick={() => onActiveBoard(item.id)}>
            <div className="site_name">{item.name}</div>

            <img
              src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
              alt="site"
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
