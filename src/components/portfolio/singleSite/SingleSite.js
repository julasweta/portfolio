import "../../development/development-all.scss";
import "./singleSite.scss";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const FadeIn = styled.div`
  animation: 2s ${keyframes`${fadeIn}`} infinite;
`;

const SingleSite = (props) => {
  return (
    <div className="singleSite">
      <div className="container">
        <h2>{props.info.sites[props.idPost - 1].short}</h2>
        <FadeIn>
          <a
            href={props.info.sites[props.idPost - 1].homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            Переглянути сайт
          </a>
        </FadeIn>

        <img
          src={
            process.env.PUBLIC_URL +
            `/images/${props.info.sites[props.idPost - 1].imgfull}.png`
          }
          alt="site"
        />
      </div>
    </div>
  );
};

export default SingleSite;
