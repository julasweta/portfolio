import "../../development/development-all.scss";
import "./singleSite.scss";

const SingleSite = (props) => {
  return (
    <div className="singleSite">
      <div className="container">
        <h2>{props.info.sites[props.idPost - 1].short}</h2>
        <a href={props.info.sites[props.idPost - 1].homepage}>
         Переглянути сайт
        </a>

        <img
          src={props.info.sites[props.idPost - 1].imgfull}
          className="full-page"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default SingleSite;
