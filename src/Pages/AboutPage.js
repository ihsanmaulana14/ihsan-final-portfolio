import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { annimateScroll as scroll } from "react-scroll";
import ImageSection from "../Components/ImageSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";
// import Button from "../Components/Button";
// import Menu from "../Components/Menu";
// import portfolios from "../data/portfolios";
// import { IconButton } from "@material-ui/core";
// import ServicesSection from "../Components/ServicesSection";
// import ReviewsSection from "../Components/ReviewsSetion";
import Skills from "../Components/Skills";
// import { MainLayout} from '../styles/Layouts';
import Resume from "../Components/Resume";
import Educations from "../Components/Educations";

function AboutPage() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <MainLayout onScroll={() => scroll.scrollToMore(10)} smooth={true}>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <SectionButtonResume>
          <ButtonResume
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Skills
          </ButtonResume>
          <ButtonResume
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Experiences
          </ButtonResume>
          <ButtonResume
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Educations
          </ButtonResume>
          <ButtonResume
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Certificates
          </ButtonResume>
        </SectionButtonResume>
        <AboutResume>
          <Section
            className={
              toggleState === 1 ? "contents active-content" : "contents"
            }
          >
            <Skills />
          </Section>
          <Section
            className={
              toggleState === 2 ? "contents active-content" : "contents"
            }
          >
            <Resume />
          </Section>
          <Section
            className={
              toggleState === 3 ? "contents active-content" : "contents"
            }
          >
            <Educations />
          </Section>
        </AboutResume>
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;

const AboutResume = styled.div`
  max-width: 100%;
  /* display: none; */
`;

const Section = styled.div`
  max-width: 100%;
  /* display: none; */
`;

const SectionButtonResume = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  padding: 60px 15px 50px;
  padding: 60px 15px 50px;
  flex: 0 0 100%;
  max-width: 100%;
  text-align: center;
  flex-wrap: wrap;
`;

const ButtonResume = styled.div`
  flex: 0 0 auto;
  /* color: gray; */
  padding: 12px;
  overflow: visible;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;
  /* transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */

  @media screen and (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

export default AboutPage;
