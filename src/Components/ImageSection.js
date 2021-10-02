import React from "react";
import styled from "styled-components";
import ihsan from "../img/ihsan-photo-2.png";
import PrimaryButton from "./PrimaryButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={ihsan} alt="" />
        <div className="icons">
          <a href="https://codepen.io/pen/" className="icon i-linkedin">
            <LinkedInIcon />
          </a>
          <a href="https://codepen.io/pen/" className="icon i-github">
            <GithubIcon />
          </a>
          <a href="https://codepen.io/pen/" className="icon i-instagram">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className="right-content">
        <h4>
          I am <span>Ihsan Maulana</span>
        </h4>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
          natus quas vero enim praesentium delectus est id fugiat ab libero
          adipisci recusandae at maxime veritatis! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Excepturi, nesciunt.
        </p>
        {/* <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <pimport LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";>Nationality </pimport>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Ihsan Maulana</p>
            <p>: 18</p>
            <p>: Indonesia </p>
            <p>: Bekasi City, West Java</p>
            <p>: Freelance</p>
          </div>
        </div> */}
        <div className="section-button">
          <PrimaryButton title={"Download Cv"} />
        </div>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    display: grid;
    justify-content: center;
    img {
      object-fit: cover;
      border-radius: 5px;
      box-shadow: 1px 1px 8px 0.2px #000000d1;
      transition: transform 0.2s;

      @media screen and (max-width: 768px) {
        width: 300px;
      }
      @media screen and (min-width: 768px) {
        width: 360px;
      }
      @media screen and (max-width: 576px) {
        width: 210px;
      }

      &:hover {
        cursor: pointer;
        transform: scale(0.95);
      }
    }
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          transform: scale(1.2);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;

          @media screen and (max-width: 576px) {
            font-size: 1rem;
          }
        }
      }

      /* .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            } */
    }
  }
  .right-content {
    width: 100%;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      display: flex;
      justify-content: center;
    }
    h4 {
      font-size: 2rem;
      color: var(--white-color);

      @media screen and (max-width: 1000px) {
        text-align: center;
      }
      @media screen and (max-width: 576px) {
        font-size: 1.5rem;
        span {
          font-size: 1.5rem;
        }
      }
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
      text-align: justify;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
    .section-button {
      display: flex;
      @media screen and (max-width: 1000px) {
        justify-content: center;
      }
    }
  }
`;
export default ImageSection;
