import "../../development/development-all.scss";
import "./singleSite.scss";

const SingleSite = (props) => {
  return (
    <div className="singleSite">
      <div className="container">
        <h2>{props.info.sites[props.idPost - 1].short}</h2>
        <a href={props.info.sites[props.idPost - 1].homepage} target="_blank">
         Переглянути сайт
        </a>

        <img src={process.env.PUBLIC_URL + `/images/${props.info.sites[props.idPost - 1].imgfull}.png`} alt="My Image" />
      </div>
    </div>
  );
};

export default SingleSite;
